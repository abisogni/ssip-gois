import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── Earth — vibrant NASA-style ────────────────────────── */
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const earthMap = useLoader(THREE.TextureLoader, "/textures/earth-map.jpg");
  const earthBump = useLoader(THREE.TextureLoader, "/textures/earth-bump.png");

  useMemo(() => {
    earthMap.colorSpace = THREE.SRGBColorSpace;
    earthMap.anisotropy = 4;
  }, [earthMap]);

  const rotSpeed = (2 * Math.PI) / 50;

  useFrame((_s, dt) => {
    if (meshRef.current) meshRef.current.rotation.y += dt * rotSpeed;
    if (cloudsRef.current) cloudsRef.current.rotation.y += dt * rotSpeed * 1.15;
  });

  return (
    <group position={[0, -0.5, 0]} rotation={[0.22, -0.3, 0.06]}>
      {/* Earth surface — brighter, more saturated */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBump}
          bumpScale={0.05}
          specularMap={earthBump}
          specular={new THREE.Color(0x334466)}
          shininess={30}
          emissive={new THREE.Color(0x050810)}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Cloud layer — more visible */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.012, 48, 48]} />
        <meshPhongMaterial transparent opacity={0.3} color={0xffffff} depthWrite={false} />
      </mesh>

      {/* Atmosphere — outer diffuse glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0x5eaaff) },
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
              float rim = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.5);
              float sunFactor = max(dot(normalize(vWorldPos), sunDir), 0.0) * 0.6 + 0.4;
              gl_FragColor = vec4(glowColor, rim * 0.5 * sunFactor);
            }
          `}
        />
      </mesh>

      {/* Thin bright atmospheric limb */}
      <mesh scale={1.045}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          uniforms={{
            glowColor: { value: new THREE.Color(0xc0e8ff) },
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
              float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 5.0);
              gl_FragColor = vec4(glowColor, intensity * 0.35);
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
      const t = clock.getElapsedTime() * 0.02;
      ref.current.position.set(Math.cos(t) * 5.8, Math.sin(t * 0.3) * 0.3 + 2.2, Math.sin(t) * 2.2);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial color={0xd0d0d0} roughness={0.9} metalness={0} />
    </mesh>
  );
};

/* ── Distant Planets ──────────────────────────────────── */
const DistantPlanets = () => {
  const planets = useMemo(() => [
    { pos: [-8, 3.8, -15] as [number, number, number], size: 0.12, color: 0xc09070 },
    { pos: [9, 2.2, -18] as [number, number, number], size: 0.08, color: 0x908050 },
    { pos: [-5.5, -3, -20] as [number, number, number], size: 0.14, color: 0xa06040 },
  ], []);

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

/* ── Nebula ────────────────────────────────────────────── */
const NebulaParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 40;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = -10 - Math.random() * 30;
      col[i3] = 0.1 + Math.random() * 0.12;
      col[i3 + 1] = 0.07 + Math.random() * 0.1;
      col[i3 + 2] = 0.2 + Math.random() * 0.3;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_s, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.0008; });

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
    {/* Strong sun from upper-right */}
    <directionalLight position={[5, 3, 4]} intensity={2.2} color={0xfff6e8} />
    {/* Cool fill for day/night contrast */}
    <directionalLight position={[-4, -1, 2]} intensity={0.12} color={0x3355aa} />
    <ambientLight intensity={0.06} />

    <Stars radius={150} depth={100} count={6000} factor={3.5} saturation={0.05} fade speed={0.15} />
    <NebulaParticles />
    <DistantPlanets />
    <Suspense fallback={null}><Earth /></Suspense>
    <Moon />
  </>
);

const SpaceBackground = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: isMobile ? 55 : 50 }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "radial-gradient(ellipse at 55% 45%, #080c18 0%, #020306 65%, #000000 100%)" }}
      >
        <SpaceScene />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
