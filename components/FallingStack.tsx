'use client';

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { resumeData } from '@/lib/resume-data';
import { techIcons } from './Illustrations';

/**
 * FallingStack Component
 *
 * Fills its (positioned) parent with doodle-style tech-stack balls that drop in with
 * real physics (matter-js) and pile up until the area is covered.
 *
 * - Ball count is derived from the parent's area so the pile fills it at any size
 * - Balls start dropping the first time the area scrolls into view
 * - Moving the pointer through the pile pushes nearby balls away
 * - Simulation pauses while off screen; prefers-reduced-motion gets a settled, static pile
 *
 * @component
 */

interface Ball {
  id: number;
  skill: string;
  r: number;
  seed: number;
}

const FILL = 0.66; // share of the area covered by balls (random circle packing tops out ~0.7)
const MAX_BALLS = 220;
const SPAWN_EVERY = 55; // ms between spawn batches
const SPAWN_BATCH = 3;
const STIR_RADIUS = 130;

const SKILLS = Array.from(
  new Set(['JavaScript', ...resumeData.skills.flatMap((c) => c.items)]),
).filter((s) => techIcons[s]);

/** Deterministic PRNG so each ball keeps its doodle shape between renders */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Hand-drawn circle: wobbly radius and a small overshoot where the stroke ends */
function doodleCircle(seed: number, radius: number) {
  const rand = mulberry32(seed);
  const start = rand() * Math.PI * 2;
  const sweep = Math.PI * 2 + 0.35 + rand() * 0.3;
  const phase = rand() * Math.PI * 2;
  const wobble = 1.6 + rand() * 1.6;
  const steps = 48;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const a = start + (sweep * i) / steps;
    const r = radius + Math.sin(a * 3 + phase) * wobble * 0.6 + Math.sin(a * 5 - phase) * wobble * 0.4;
    d += `${i === 0 ? 'M' : 'L'}${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}`;
  }
  return d;
}

export function FallingStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRefs = useRef(new Map<number, HTMLDivElement>());
  const [balls, setBalls] = useState<Ball[]>([]);

  // Size the pile to the area
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const base = width < 640 ? 26 : 40;
    const rand = mulberry32(7);
    const list: Ball[] = [];
    let covered = 0;
    while (covered < width * height * FILL && list.length < MAX_BALLS) {
      const r = base * (0.8 + rand() * 0.5);
      list.push({ id: list.length, skill: SKILLS[list.length % SKILLS.length], r, seed: 1000 + list.length * 17 });
      covered += Math.PI * r * r;
    }
    // shuffle so neighbouring balls aren't always the same stack order
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [list[i].skill, list[j].skill] = [list[j].skill, list[i].skill];
    }
    setBalls(list);
  }, []);

  // Physics
  useEffect(() => {
    const el = containerRef.current;
    if (!el || balls.length === 0) return;

    const { Engine, Bodies, Body, Composite, Sleeping } = Matter;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = el.clientWidth;
    let height = el.clientHeight;

    const engine = Engine.create({ enableSleeping: true });
    engine.gravity.y = 1;

    const wallOpts = { isStatic: true, friction: 0.2 };
    const floor = Bodies.rectangle(width / 2, height + 100, width * 3, 200, wallOpts);
    const left = Bodies.rectangle(-100, height / 2, 200, height * 6, wallOpts);
    const right = Bodies.rectangle(width + 100, height / 2, 200, height * 6, wallOpts);
    Composite.add(engine.world, [floor, left, right]);

    const bodies = new Map<number, Matter.Body>();
    const rand = mulberry32(42);
    const spawn = (ball: Ball, y: number) => {
      const body = Bodies.circle(ball.r + rand() * (width - ball.r * 2), y, ball.r, {
        restitution: 0.45,
        friction: 0.08,
        frictionAir: 0.012,
        density: 0.002,
        angle: rand() * Math.PI * 2,
      });
      Body.setAngularVelocity(body, (rand() - 0.5) * 0.2);
      bodies.set(ball.id, body);
      Composite.add(engine.world, body);
    };

    const render = () => {
      for (const [id, body] of bodies) {
        const node = ballRefs.current.get(id);
        if (!node) continue;
        const r = body.circleRadius ?? 0;
        node.style.transform = `translate3d(${body.position.x - r}px, ${body.position.y - r}px, 0) rotate(${body.angle}rad)`;
      }
    };

    // Reduced motion: settle the pile off-screen and show it once
    if (reduceMotion) {
      balls.forEach((ball, i) => spawn(ball, -ball.r - i * ball.r * 0.9));
      for (let i = 0; i < 1200; i++) Engine.update(engine, 1000 / 60);
      render();
      return () => Engine.clear(engine);
    }

    let frame = 0;
    let running = false;
    let started = false;
    let spawned = 0;
    let spawnTimer: ReturnType<typeof setInterval> | undefined;

    const loop = () => {
      Engine.update(engine, 1000 / 60);
      render();
      frame = requestAnimationFrame(loop);
    };

    const startSpawning = () => {
      started = true;
      spawnTimer = setInterval(() => {
        for (let i = 0; i < SPAWN_BATCH && spawned < balls.length; i++, spawned++) {
          const ball = balls[spawned];
          spawn(ball, -ball.r - rand() * 120);
        }
        if (spawned >= balls.length) clearInterval(spawnTimer);
      }, SPAWN_EVERY);
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          if (!started) startSpawning();
          running = true;
          frame = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.2 },
    );
    visibility.observe(el);

    // Stir: push balls away from the pointer, harder when it moves faster
    let lastPointer: { x: number; y: number } | null = null;
    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        lastPointer = null;
        return;
      }
      const speed = lastPointer ? Math.min(Math.hypot(x - lastPointer.x, y - lastPointer.y), 40) : 0;
      lastPointer = { x, y };
      if (speed < 1) return;

      for (const body of bodies.values()) {
        const dx = body.position.x - x;
        const dy = body.position.y - y;
        const dist = Math.hypot(dx, dy);
        if (dist > STIR_RADIUS || dist === 0) continue;
        const push = (1 - dist / STIR_RADIUS) * speed * 0.35;
        Sleeping.set(body, false);
        Body.setVelocity(body, {
          x: body.velocity.x + (dx / dist) * push,
          y: body.velocity.y + (dy / dist) * push - push * 0.3,
        });
      }
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Keep walls on the edges; pull balls back inside if the area shrank
    const resize = new ResizeObserver(() => {
      width = el.clientWidth;
      height = el.clientHeight;
      Body.setPosition(floor, { x: width / 2, y: height + 100 });
      Body.setPosition(left, { x: -100, y: height / 2 });
      Body.setPosition(right, { x: width + 100, y: height / 2 });
      for (const body of bodies.values()) {
        const r = body.circleRadius ?? 0;
        if (body.position.x > width - r) {
          Sleeping.set(body, false);
          Body.setPosition(body, { x: width - r, y: body.position.y });
        }
      }
    });
    resize.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(spawnTimer);
      visibility.disconnect();
      resize.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      Engine.clear(engine);
    };
  }, [balls]);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {balls.map((ball) => {
        const cfg = techIcons[ball.skill];
        const Icon = cfg.icon;
        return (
          <div
            key={ball.id}
            ref={(node) => {
              if (node) ballRefs.current.set(ball.id, node);
              else ballRefs.current.delete(ball.id);
            }}
            className="absolute left-0 top-0 will-change-transform"
            style={{ width: ball.r * 2, height: ball.r * 2, transform: 'translate3d(-9999px, 0, 0)' }}
          >
            <svg viewBox="-50 -50 100 100" className="absolute inset-0 h-full w-full overflow-visible">
              <circle r="45" fill={cfg.color} fillOpacity="0.1" />
              <path
                d={doodleCircle(ball.seed, 46)}
                fill="none"
                stroke={cfg.color}
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.85"
              />
              <path
                d={doodleCircle(ball.seed + 1, 43)}
                fill="none"
                stroke={cfg.color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeOpacity="0.4"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center" style={{ color: cfg.color }}>
              <Icon size={Math.round(ball.r * 0.95)} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
