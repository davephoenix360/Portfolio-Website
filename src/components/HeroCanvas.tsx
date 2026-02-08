import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Sculpture: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.0035;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.18;
    }
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y -= 0.004;
      satellitesRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.7}>
      <group>
        <group ref={coreRef}>
          <mesh>
            <torusKnotGeometry args={[0.55, 0.18, 64, 8]} />
            <meshStandardMaterial color="#93c5fd" roughness={0.25} metalness={0.65} />
          </mesh>
          <mesh position={[0.25, 0.35, 0.2]}>
            <icosahedronGeometry args={[0.35, 0]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.5} emissive="#2563eb" emissiveIntensity={0.25} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.95, 0.03, 12, 64]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.6} metalness={0.2} />
          </mesh>
        </group>

        <group ref={satellitesRef}>
          {[
            { position: [1.2, 0.4, -0.4], size: 0.12, color: '#60a5fa' },
            { position: [-1.1, -0.2, 0.5], size: 0.1, color: '#a5b4fc' },
            { position: [0.6, -0.7, -0.6], size: 0.08, color: '#7dd3fc' },
            { position: [-0.4, 0.9, 0.2], size: 0.07, color: '#38bdf8' },
          ].map((sat) => (
            <mesh key={`${sat.position.join('-')}`} position={sat.position as [number, number, number]}>
              <sphereGeometry args={[sat.size, 10, 10]} />
              <meshStandardMaterial color={sat.color} roughness={0.35} metalness={0.35} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
};

const FloatingCards: React.FC = () => {
  return (
    <group>
      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.6}>
        <RoundedBox args={[1.5, 0.9, 0.09]} radius={0.08} position={[-1.3, 0.65, -0.6]}>
          <meshStandardMaterial color="#f8fafc" roughness={0.35} metalness={0.1} />
        </RoundedBox>
      </Float>
      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={0.6}>
        <RoundedBox args={[1.2, 0.7, 0.08]} radius={0.08} position={[1.2, -0.35, -0.5]}>
          <meshStandardMaterial color="#e2e8f0" roughness={0.45} metalness={0.1} />
        </RoundedBox>
      </Float>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.4}>
        <RoundedBox args={[0.9, 0.55, 0.07]} radius={0.08} position={[0.2, -0.95, -0.7]}>
          <meshStandardMaterial color="#f1f5f9" roughness={0.5} metalness={0.05} />
        </RoundedBox>
      </Float>
    </group>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 dark:border-slate-800/70 dark:bg-slate-900/70">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 2]} intensity={1.1} />
        <pointLight position={[-3, -2, 2]} intensity={0.7} />
        <spotLight position={[0, 3, 2]} intensity={0.6} angle={0.3} penumbra={0.8} />
        <FloatingCards />
        <Sculpture />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10" />
    </div>
  );
};

export default HeroCanvas;
