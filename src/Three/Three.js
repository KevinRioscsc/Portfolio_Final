import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";


const Cube = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const Three = () => {
  return (
    <>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <Cube />
      </Canvas>
    </>
  );
};

export default Three;
