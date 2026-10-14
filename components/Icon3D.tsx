'use client';

import type { ComponentType, PointerEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Icon3D Component
 *
 * Renders an icon on a glossy, extruded tile that tilts toward the pointer.
 *
 * Features:
 * - Extruded depth built from stacked box-shadows in a darker shade of the face color
 * - Radial face shading + top gloss highlight for a clay/app-icon look
 * - Glyph lifted off the face with translateZ so it parallaxes as the tile tilts
 * - Spring-smoothed pointer tilt (disabled for prefers-reduced-motion)
 *
 * @component
 */

type GlyphComponent = ComponentType<{ size?: number | string; className?: string }>;

interface Icon3DProps {
  /** Face color of the tile (hex) */
  color: string;
  /** Glyph color, defaults to white */
  glyphColor?: string;
  /** Icon component (lucide-react or react-icons) */
  icon?: GlyphComponent;
  /** Custom glyph content, used when no icon is given */
  children?: ReactNode;
  size?: number;
  shape?: 'square' | 'circle';
  /** Tilt toward the pointer on hover */
  interactive?: boolean;
  className?: string;
  label?: string;
}

/** Lighten (amount > 0) or darken (amount < 0) a hex color */
function shade(hex: string, amount: number, alpha = 1) {
  const value = parseInt(hex.replace('#', '').padEnd(6, '0').slice(0, 6), 16);
  const target = amount < 0 ? 0 : 255;
  const t = Math.abs(amount);
  const channel = (shift: number) => {
    const c = (value >> shift) & 0xff;
    return Math.round(c + (target - c) * t);
  };
  return `rgba(${channel(16)}, ${channel(8)}, ${channel(0)}, ${alpha})`;
}

const MAX_TILT = 22;

export function Icon3D({
  color,
  glyphColor = '#ffffff',
  icon: Icon,
  children,
  size = 48,
  shape = 'square',
  interactive = true,
  className = '',
  label,
}: Icon3DProps) {
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 260, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 260, damping: 18 });
  const canTilt = interactive && !reduceMotion;

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!canTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(x * MAX_TILT * 2);
    tiltX.set(-y * MAX_TILT * 2);
  };

  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const depth = Math.max(3, Math.round(size * 0.12));
  const radius = shape === 'circle' ? '50%' : size * 0.28;
  const side = shade(color, -0.45);
  const extrusion = Array.from({ length: depth }, (_, i) => `0 ${i + 1}px 0 ${side}`).join(', ');

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size + depth, perspective: size * 6 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: `radial-gradient(120% 120% at 28% 18%, ${shade(color, 0.35)} 0%, ${color} 45%, ${shade(color, -0.25)} 100%)`,
          boxShadow: [
            `inset 0 ${Math.max(1, size * 0.04)}px ${Math.max(1, size * 0.03)}px rgba(255, 255, 255, 0.45)`,
            `inset 0 -${Math.max(2, size * 0.06)}px ${Math.max(3, size * 0.1)}px rgba(0, 0, 0, 0.25)`,
            extrusion,
            `0 ${depth + size * 0.12}px ${size * 0.35}px -${size * 0.05}px ${shade(color, -0.2, 0.55)}`,
          ].join(', '),
        }}
      >
        {/* Top gloss highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: radius,
            background: 'radial-gradient(90% 55% at 50% 0%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%)',
          }}
        />
        <span
          className="relative flex items-center justify-center"
          style={{
            color: glyphColor,
            transform: `translateZ(${size * 0.3}px)`,
            filter: `drop-shadow(0 ${Math.max(1, size * 0.04)}px ${Math.max(1, size * 0.04)}px rgba(0, 0, 0, 0.35))`,
          }}
        >
          {Icon ? <Icon size={Math.round(size * 0.52)} /> : children}
        </span>
      </motion.div>
    </div>
  );
}
