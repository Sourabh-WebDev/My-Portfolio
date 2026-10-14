'use client';

import { useEffect, useRef } from 'react';

/**
 * CursorEffect Component (inspired by studiomirage.io)
 *
 * - Grain trail: a full-screen canvas sprays fine light grain along the pointer path.
 *   Faster movement spreads the grain wider; every frame the canvas is partially erased
 *   so the trail dissolves within ~300ms.
 * - Cursor label: text that lags slightly behind the pointer. It shows the `data-cursor`
 *   value of the hovered element (nearest ancestor wins) and hides over links/buttons.
 *
 * Only runs on fine pointers (mouse/trackpad) and respects prefers-reduced-motion.
 *
 * @component
 */

const GRAIN_COLOR = '232, 244, 255';
const FADE = 0.09; // share of the trail erased per frame
const LABEL_EASE = 0.18; // label follow smoothing (0–1, higher = snappier)

/** Roughly gaussian random in [-1, 1] */
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    const label = labelRef.current;
    const text = textRef.current;
    if (!finePointer || reduceMotion || !canvas || !label || !text) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const pointer = { x: -100, y: -100 };
    const last = { x: -100, y: -100 };
    const labelPos = { x: -100, y: -100 };
    let hasMoved = false;
    let idleFrames = 0;
    let frame = 0;

    const spray = (fromX: number, fromY: number, toX: number, toY: number) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const dist = Math.hypot(dx, dy);
      const radius = Math.min(10 + dist * 0.6, 46);
      const steps = Math.max(1, Math.ceil(dist / 3));

      for (let s = 0; s < steps; s++) {
        const t = s / steps;
        const cx = fromX + dx * t;
        const cy = fromY + dy * t;
        for (let g = 0; g < 34; g++) {
          const ox = gauss() * radius;
          const oy = gauss() * radius;
          // grains near the centre of the stroke are brighter
          const falloff = 1 - Math.min(1, Math.hypot(ox, oy) / radius);
          ctx.fillStyle = `rgba(${GRAIN_COLOR}, ${(0.25 + Math.random() * 0.55) * falloff})`;
          ctx.fillRect(cx + ox, cy + oy, 1, 1);
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        last.x = labelPos.x = pointer.x;
        last.y = labelPos.y = pointer.y;
      }

      const target = e.target instanceof Element ? e.target : null;
      const labelled = target?.closest<HTMLElement>('[data-cursor]');
      const interactive = target?.closest('a, button, input, textarea, select, label');
      const value = interactive ? '' : labelled?.dataset.cursor ?? '';
      if (value) text.textContent = value;
      label.style.opacity = value ? '1' : '0';
    };

    const onLeave = () => {
      label.style.opacity = '0';
    };

    const tick = () => {
      // erase a share of the existing trail so it dissolves
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0, 0, 0, ${FADE})`;
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.globalCompositeOperation = 'source-over';

      if (hasMoved) {
        if (pointer.x !== last.x || pointer.y !== last.y) {
          spray(last.x, last.y, pointer.x, pointer.y);
          last.x = pointer.x;
          last.y = pointer.y;
          idleFrames = 0;
        } else if (++idleFrames === 60) {
          // low-alpha erasing never fully reaches zero; clear leftovers once idle
          ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        }

        labelPos.x += (pointer.x - labelPos.x) * LABEL_EASE;
        labelPos.y += (pointer.y - labelPos.y) * LABEL_EASE;
        label.style.transform = `translate3d(${labelPos.x + 18}px, ${labelPos.y - 8}px, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-300 h-screen w-screen mix-blend-screen"
      />
      <div
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-300 opacity-0 transition-opacity duration-300 will-change-transform"
      >
        <span ref={textRef} className="whitespace-nowrap text-sm font-medium text-foreground/90" />
      </div>
    </>
  );
}
