import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── Earth ─────────────────────────────────────────────── */
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const earthMap = useLoader(THREE.TextureLoader, "/textures/earth-map.jpg");
  const earthBump = useLoader(THREE.TextureLoader, "/textures/earth-bump.png");

  useFrame((_state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.012;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.016;
  });

  return (
    <group position={[0, -0.6, 0]} rotation={[0.2, -0.4, 0.08]}>
      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBump}
          bumpScale={0.04}
          specularMap={earthBump}
          specular={new THREE.Color(0x222244)}
          shininess={25}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.015, 48, 48]} />
        <meshPhongMaterial
          transparent
          opacity={0.18}
          color={0xffffff}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow — outer rim */}
      <mesh scale={1.08}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0x88ccff) },
            coeff: { value: 0.55 },
            power: { value: 4.0 },
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
              gl_FragColor = vec4(glowColor, intensity * 0.4);
            }
          `}
        />
      </mesh>

      {/* Thin bright atmosphere edge */}
      <mesh scale={1.04}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0xaaddff) },
            coeff: { value: 0.7 },
            power: { value: 6.0 },
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
              gl_FragColor = vec4(glowColor, intensity * 0.25);
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
      const t = clock.getElapsedTime() * 0.025;
      ref.current.position.x = Math.cos(t) * 5.5;
      ref.current.position.z = Math.sin(t) * 2.5;
      ref.current.position.y = Math.sin(t * 0.4) * 0.4 + 2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={0xc8c8c8} roughness={0.95} metalness={0} />
    </mesh>
  );
};

/* ── Distant Planets ──────────────────────────────────── */
const DistantPlanets = () => {
  const planets = useMemo(
    () => [
      { pos: [-7, 3.5, -12] as [number, number, number], size: 0.12, color: 0xc4956a },
      { pos: [8, 2, -14] as [number, number, number], size: 0.08, color: 0x8b7b4a },
      { pos: [-5, -2.5, -16] as [number, number, number], size: 0.15, color: 0x9b5a3c },
    ],
    []
  );

  return (
    <>
      {planets.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 16, 16]} />
          <meshStandardMaterial color={p.color} roughness={0.85} />
        </mesh>
      ))}
    </>
  );
};

/* ── Nebula particles ─────────────────────────────────── */
const NebulaParticles = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 35;
      pos[i3 + 1] = (Math.random() - 0.5) * 25;
      pos[i3 + 2] = -8 - Math.random() * 25;

      const r = 0.12 + Math.random() * 0.15;
      const g = 0.08 + Math.random() * 0.12;
      const b = 0.25 + Math.random() * 0.35;
      col[i3] = r;
      col[i3 + 1] = g;
      col[i3 + 2] = b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.12} vertexColors transparent opacity={0.2} sizeAttenuation depthWrite={false} />
    </points>
  );
};

/* ── Scene ─────────────────────────────────────────────── */
const SpaceScene = () => (
  <>
    {/* Sunlight from upper-right — warm directional */}
    <directionalLight position={[5, 3, 4]} intensity={1.8} color={0xfff8ee} />
    {/* Subtle fill from opposite side */}
    <directionalLight position={[-3, -1, 2]} intensity={0.15} color={0x4466aa} />
    <ambientLight intensity={0.06} />

    {/* Stars */}
    <Stars radius={120} depth={80} count={5000} factor={3.5} saturation={0.05} fade speed={0.2} />

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
      style={{ background: "radial-gradient(ellipse at 60% 40%, #080c18 0%, #020306 70%, #000000 100%)" }}
    >
      <SpaceScene />
    </Canvas>
  </div>
);

export default SpaceBackground;
