import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import React, { useRef } from "react";
import { Bonfire } from "./Bonfire";
import { Floor } from "./Floor";
import Lights from "./Light";

const PlaneWall = () => {
  return (
    <mesh position={[0, 0, -7]}>
      <planeGeometry attach="geometry" args={[30, 30]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
};

const Plane = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5} position={[0, -0.6, 0]}>
      <planeGeometry attach="geometry" args={[30, 30]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
};

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
      <Canvas camera={{ position: [0, -0.1, 2.5] }}>
        <OrbitControls />
        <Lights />

        <Bonfire />
        <PlaneWall />
        <Plane />
        <Floor />
        <axesHelper args={[5]} />
      </Canvas>
    </>
  );
};

export default Three;
