import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── Earth — ~50s full rotation, realistic NASA-style ──── */
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const earthMap = useLoader(THREE.TextureLoader, "/textures/earth-map.jpg");
  const earthBump = useLoader(THREE.TextureLoader, "/textures/earth-bump.png");

  // Improve texture quality
  useMemo(() => {
    earthMap.colorSpace = THREE.SRGBColorSpace;
    earthMap.anisotropy = 4;
  }, [earthMap]);

  // ~50s per full rotation
  const rotSpeed = (2 * Math.PI) / 50;
  const cloudSpeed = rotSpeed * 1.15;

  useFrame((_s, dt) => {
    if (meshRef.current) meshRef.current.rotation.y += dt * rotSpeed;
    if (cloudsRef.current) cloudsRef.current.rotation.y += dt * cloudSpeed;
  });

  return (
    <group position={[0, -0.5, 0]} rotation={[0.22, -0.3, 0.06]}>
      {/* Earth surface */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBump}
          bumpScale={0.05}
          specularMap={earthBump}
          specular={new THREE.Color(0x1a1a33)}
          shininess={20}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.012, 48, 48]} />
        <meshPhongMaterial transparent opacity={0.22} color={0xffffff} depthWrite={false} />
      </mesh>

      {/* Atmosphere — outer diffuse glow */}
      <mesh scale={1.09}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0x6eb4ff) },
            sunDir: { value: new THREE.Vector3(1, 0.5, 0.8).normalize() },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vWorldPos;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 glowColor;
            uniform vec3 sunDir;
            varying vec3 vNormal;
            varying vec3 vWorldPos;
            void main() {
              float rim = pow(0.58 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
              // Sun-side brightening
              float sunFactor = max(dot(normalize(vWorldPos), sunDir), 0.0) * 0.5 + 0.5;
              gl_FragColor = vec4(glowColor, rim * 0.35 * sunFactor);
            }
          `}
        />
      </mesh>

      {/* Atmosphere — thin bright limb */}
      <mesh scale={1.04}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0xb0ddff) },
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
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 6.0);
              gl_FragColor = vec4(glowColor, intensity * 0.2);
            }
          `}
        />
      </mesh>
    </group>
  );
};

/* ── Moon — slow orbit ─────────────────────────────────── */
const Moon = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * 0.02;
      ref.current.position.x = Math.cos(t) * 5.8;
      ref.current.position.z = Math.sin(t) * 2.2;
      ref.current.position.y = Math.sin(t * 0.3) * 0.3 + 2.2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial color={0xc0c0c0} roughness={0.95} metalness={0} />
    </mesh>
  );
};

/* ── Distant Planets — faint, far away ─────────────────── */
const DistantPlanets = () => {
  const planets = useMemo(
    () => [
      { pos: [-8, 3.8, -15] as [number, number, number], size: 0.1, color: 0xb08860 },
      { pos: [9, 2.2, -18] as [number, number, number], size: 0.07, color: 0x7a6b40 },
      { pos: [-5.5, -3, -20] as [number, number, number], size: 0.13, color: 0x8a5030 },
    ],
    []
  );

  return (
    <>
      {planets.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 16, 16]} />
          <meshStandardMaterial color={p.color} roughness={0.9} />
        </mesh>
      ))}
    </>
  );
};

/* ── Nebula — very subtle depth particles ──────────────── */
const NebulaParticles = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 150;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 40;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = -10 - Math.random() * 30;
      col[i3] = 0.08 + Math.random() * 0.1;
      col[i3 + 1] = 0.06 + Math.random() * 0.08;
      col[i3 + 2] = 0.18 + Math.random() * 0.22;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_s, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.0008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.15} sizeAttenuation depthWrite={false} />
    </points>
  );
};

/* ── Scene ─────────────────────────────────────────────── */
const SpaceScene = () => (
  <>
    {/* Sun — warm directional from upper-right */}
    <directionalLight position={[5, 3, 4]} intensity={1.6} color={0xfff6e8} />
    {/* Cool fill from opposite side for day/night transition */}
    <directionalLight position={[-4, -1, 2]} intensity={0.1} color={0x3355aa} />
    <ambientLight intensity={0.04} />

    <Stars radius={150} depth={100} count={5000} factor={3} saturation={0.03} fade speed={0.15} />

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
      style={{ background: "radial-gradient(ellipse at 55% 45%, #060a14 0%, #020306 65%, #000000 100%)" }}
    >
      <SpaceScene />
    </Canvas>
  </div>
);

export default SpaceBackground;
