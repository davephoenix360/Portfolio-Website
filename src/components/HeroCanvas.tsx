import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * HeroCanvas — a slowly rotating, floating **gold coin** (the signature 3D
 * element of the "old-school money" theme).
 *
 * Why a coin and not the previous abstract torus-knot?
 *   - It's the most universally-readable "money" symbol without leaning on
 *     a flag or specific denomination.
 *   - Embossed "DCD" monogram makes it feel personal (the user's monogram
 *     is in profile.ts) without being corny.
 *   - The die-stamped texture (procedural via emissive + roughness) reads
 *     as "old coin" rather than "shiny prop" — better for the theme.
 *
 * Accessibility: respects prefers-reduced-motion (we freeze rotations and
 * float). Falls back to a CSS coin emoji on the host page if needed.
 */

const COIN_GOLD = '#D4AF37';
const COIN_GOLD_DEEP = '#9C7C1A';
const COIN_GOLD_HIGHLIGHT = '#F4D87A';

function useCoinGeometry() {
  return useMemo(() => {
    // A short cylinder = a coin (a "puck")
    return new THREE.CylinderGeometry(1, 1, 0.18, 64, 1, false);
  }, []);
}

const CoinFace: React.FC<{ side: 'front' | 'back'; monogram: string }> = ({ side, monogram }) => {
  // The face is a slightly raised disc with the embossed monogram.
  // We position it as a child of the coin; the cylinder's local +Y is the
  // axis. We use small box meshes to "stamp" the letters.
  const offset = side === 'front' ? 0.095 : -0.095;
  const textRotation: [number, number, number] = side === 'front' ? [-Math.PI / 2, 0, 0] : [Math.PI / 2, 0, 0];

  return (
    <group position={[0, offset, 0]}>
      {/* Decorative inner ring (a thin torus on the face) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.78, 0.025, 8, 64]} />
        <meshStandardMaterial color={COIN_GOLD_DEEP} roughness={0.35} metalness={0.9} />
      </mesh>

      {/* Monogram text embossed on the face */}
      <group rotation={textRotation} position={[0, 0.01, 0]}>
        <Text
          fontSize={0.42}
          letterSpacing={0.06}
          color={COIN_GOLD_DEEP}
          anchorX="center"
          anchorY="middle"
          font={undefined}
        >
          {monogram}
        </Text>
        {/* Decorative stars on either side of the monogram */}
        <mesh position={[-0.55, 0, 0.01]} rotation={[0, 0, 0]}>
          <octahedronGeometry args={[0.06, 0]} />
          <meshStandardMaterial color={COIN_GOLD_DEEP} roughness={0.4} metalness={0.9} />
        </mesh>
        <mesh position={[0.55, 0, 0.01]} rotation={[0, 0, Math.PI / 4]}>
          <octahedronGeometry args={[0.06, 0]} />
          <meshStandardMaterial color={COIN_GOLD_DEEP} roughness={0.4} metalness={0.9} />
        </mesh>
      </group>
    </group>
  );
};

const Coin: React.FC<{ monogram: string; reducedMotion: boolean }> = ({ monogram, reducedMotion }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coinGeom = useCoinGeometry();

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    // Slow Y rotation — "the coin spinning on a table"
    groupRef.current.rotation.y += 0.006;
    // Subtle wobble for "the coin is in motion"
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.12;
    groupRef.current.rotation.z = Math.cos(t * 0.4) * 0.06;
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 2]}>
      {/* Cylinder is by default aligned with +Y. Rotating the group so
          the coin faces +Z, which matches the default camera. */}
      <mesh geometry={coinGeom}>
        <meshStandardMaterial
          color={COIN_GOLD}
          roughness={0.28}
          metalness={0.95}
          emissive={COIN_GOLD_DEEP}
          emissiveIntensity={0.08}
        />
      </mesh>
      <CoinFace side="front" monogram={monogram} />
      <CoinFace side="back" monogram={monogram} />
    </group>
  );
};

const OrbitingCoins: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  // Three smaller coins at different radii, like a coin galaxy
  const coins = [
    { radius: 1.85, angle: 0, scale: 0.28, tilt: 0.4 },
    { radius: 1.85, angle: (2 * Math.PI) / 3, scale: 0.22, tilt: -0.3 },
    { radius: 1.85, angle: (4 * Math.PI) / 3, scale: 0.32, tilt: 0.1 },
  ];

  return (
    <group ref={groupRef}>
      {coins.map((c, i) => {
        const x = Math.cos(c.angle) * c.radius;
        const z = Math.sin(c.angle) * c.radius;
        return (
          <Float key={i} speed={1.4 + i * 0.3} rotationIntensity={0.3} floatIntensity={0.4}>
            <group position={[x, 0, z]} rotation={[c.tilt, c.tilt, 0]}>
              <mesh>
                <cylinderGeometry args={[c.scale, c.scale, 0.05, 32]} />
                <meshStandardMaterial color={COIN_GOLD} roughness={0.3} metalness={0.9} />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
};

const FallingReceipts: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  // A few flat "receipt paper" planes floating around — adds the
  // "brokerage / paperwork" texture to the scene.
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y -= delta * 0.15;
    }
  });

  const sheets = [
    { pos: [-1.5, 0.7, -0.4], rot: [0.2, 0.4, 0.1], size: [0.7, 1.0] },
    { pos: [1.4, -0.5, -0.5], rot: [-0.1, -0.3, 0.2], size: [0.6, 0.85] },
    { pos: [0.1, -1.1, 0.3], rot: [0.4, 0, -0.15], size: [0.55, 0.75] },
  ];

  return (
    <group ref={groupRef}>
      {sheets.map((s, i) => (
        <Float key={i} speed={0.9 + i * 0.2} rotationIntensity={0.25} floatIntensity={0.4}>
          <RoundedBox args={[s.size[0], s.size[1], 0.02]} radius={0.02} position={s.pos as [number, number, number]} rotation={s.rot as [number, number, number]}>
            <meshStandardMaterial color="#FBF6E7" roughness={0.85} metalness={0.02} />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
};

const HeroCanvas: React.FC<{ monogram?: string; reducedMotion?: boolean }> = ({
  monogram = 'DCD',
  reducedMotion = false,
}) => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 3.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Soft gold + green lighting — not the previous "tech demo" blue */}
      <ambientLight intensity={0.55} color="#F4ECD8" />
      <directionalLight position={[3, 3, 3]} intensity={1.1} color="#FFFFFF" />
      <pointLight position={[-3, -2, 2]} intensity={0.55} color="#D4AF37" />
      <spotLight position={[0, 4, 2]} intensity={0.7} angle={0.3} penumbra={0.8} color="#F4D87A" />

      <FallingReceipts reducedMotion={reducedMotion} />
      <OrbitingCoins reducedMotion={reducedMotion} />
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.6}>
        <Coin monogram={monogram} reducedMotion={reducedMotion} />
      </Float>
    </Canvas>
  );
};

export default HeroCanvas;
