import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── Earth ─────────────────────────────────────────────── */
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const earthMap = useLoader(THREE.TextureLoader, "/textures/earth-map.jpg");
  const earthBump = useLoader(THREE.TextureLoader, "/textures/earth-bump.png");

  useFrame((_state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.015;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <group position={[0, -0.6, 0]} rotation={[0.15, 0, 0.1]}>
      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBump}
          bumpScale={0.03}
          specularMap={earthBump}
          specular={new THREE.Color(0x333333)}
          shininess={15}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.02, 48, 48]} />
        <meshPhongMaterial transparent opacity={0.15} color={0xffffff} depthWrite={false} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} scale={1.12}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0x4db8ff) },
            coeff: { value: 0.6 },
            power: { value: 3.5 },
          }}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 glowColor;
            uniform float coeff;
            uniform float power;
            varying vec3 vNormal;
            void main() {
              float intensity = pow(coeff - dot(vNormal, vec3(0.0, 0.0, 1.0)), power);
              gl_FragColor = vec4(glowColor, intensity * 0.5);
            }
          `}
        />
      </mesh>
    </group>
  );
};

/* ── Moon ──────────────────────────────────────────────── */
const Moon = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * 0.03;
      ref.current.position.x = Math.cos(t) * 5.5;
      ref.current.position.z = Math.sin(t) * 3;
      ref.current.position.y = Math.sin(t * 0.5) * 0.5 + 1.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial color={0xcccccc} roughness={0.9} metalness={0} />
    </mesh>
  );
};

/* ── Distant Planets ──────────────────────────────────── */
const DistantPlanets = () => {
  const planets = useMemo(
    () => [
      { pos: [-6, 3, -8] as [number, number, number], size: 0.15, color: 0xd4a574 },
      { pos: [7, 2.5, -10] as [number, number, number], size: 0.1, color: 0x8b6914 },
      { pos: [-4, -2, -12] as [number, number, number], size: 0.2, color: 0xc1440e },
    ],
    []
  );

  return (
    <>
      {planets.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 16, 16]} />
          <meshStandardMaterial color={p.color} roughness={0.8} />
        </mesh>
      ))}
    </>
  );
};

/* ── Nebula particles ─────────────────────────────────── */
const NebulaParticles = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = -5 - Math.random() * 20;

      // Subtle blue / purple / cyan tones
      const r = 0.2 + Math.random() * 0.3;
      const g = 0.1 + Math.random() * 0.2;
      const b = 0.5 + Math.random() * 0.5;
      col[i3] = r;
      col[i3 + 1] = g;
      col[i3 + 2] = b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
};

/* ── Scene ─────────────────────────────────────────────── */
const SpaceScene = () => (
  <>
    {/* Sunlight from upper-right */}
    <directionalLight position={[5, 3, 5]} intensity={2} color={0xfff5e6} />
    <ambientLight intensity={0.08} />

    {/* Stars */}
    <Stars radius={100} depth={60} count={4000} factor={4} saturation={0.1} fade speed={0.3} />

    <NebulaParticles />
    <DistantPlanets />

    <Suspense fallback={null}>
      <Earth />
    </Suspense>

    <Moon />
  </>
);

const SpaceBackground = () => (
  <div className="absolute inset-0" style={{ zIndex: 0 }}>
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "radial-gradient(ellipse at center, #0a0e1a 0%, #020408 100%)" }}
    >
      <SpaceScene />
    </Canvas>
  </div>
);

export default SpaceBackground;
