import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const ShootingStars = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.0;
    ref.current.rotation.y += 0.01;
  });

  const particles = [];
  for (let i = 0; i < 100; i++) {
    const posX = (Math.random() - 0.2) * 20;
    const posY = (Math.random() - 0.2) * 20;
    const posZ = Math.random() * 20;
    const particle = (
      <mesh key={i} position={[posX, posY, posZ]}>
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color="#02E3F4" />
      </mesh>
    );
    particles.push(particle);
  }

  return <group ref={ref}>{particles}</group>;
};

const ShootingStarsCanvas = ({ size = "100%" }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <ShootingStars />
      </Canvas>
    </div>
  );
};

export default ShootingStarsCanvas;
