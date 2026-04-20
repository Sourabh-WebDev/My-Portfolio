'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

interface SkillsPhereProps {
  skills: string[];
}

function SkillOrbit({ skills }: SkillsPhereProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const y = Math.sin(angle * 0.5) * 1.5;
        const z = Math.sin(angle) * 3;

        return (
          <group key={skill} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshPhongMaterial
                color="#50d4ff"
                emissive="#3498db"
                emissiveIntensity={0.5}
              />
            </mesh>
            <Text
              position={[0, 0, 0.5]}
              fontSize={0.3}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export function SkillsSphereScene({ skills }: SkillsPhereProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{
        width: '100%',
        height: '100%',
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
      <SkillOrbit skills={skills} />
    </Canvas>
  );
}
