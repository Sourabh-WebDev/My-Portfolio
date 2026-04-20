'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function BackgroundMesh() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color="#50d4ff"
        wireframe={true}
        emissive="#3498db"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function FloatingOrbs() {
  const orbs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    speed: 0.3 + i * 0.1,
    offset: (i * Math.PI * 2) / 5,
    radius: 3 + i * 0.5,
  }));

  return (
    <>
      {orbs.map((orb) => (
        <AnimatedOrb key={orb.id} {...orb} />
      ))}
    </>
  );
}

function AnimatedOrb({
  id,
  speed,
  offset,
  radius,
}: {
  id: number;
  speed: number;
  offset: number;
  radius: number;
}) {
  const orbRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      const angle = state.clock.elapsedTime * speed + offset;
      orbRef.current.position.x = Math.cos(angle) * radius;
      orbRef.current.position.y = Math.sin(angle * 0.5) * radius * 0.5;
      orbRef.current.position.z = Math.sin(angle) * radius;
    }
  });

  return (
    <mesh ref={orbRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshPhongMaterial
        color={id % 2 === 0 ? '#a78bfa' : '#50d4ff'}
        emissive={id % 2 === 0 ? '#8b5cf6' : '#3498db'}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

export function AnimatedBackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
      <BackgroundMesh />
      <FloatingOrbs />
    </Canvas>
  );
}
