import { Canvas, useFrame } from "@react-three/fiber";

import React, { useRef } from "react";
import { Bonfire } from "./Bonfire";
import { Floor } from "./Floor";
import Lights from "./Light";
import { Fire } from "../Shaders/Fire";
import Delayed from "../Components/Delay/Delay";

const Plane = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5} position={[0, -0.6, 0]}>
      <planeGeometry attach="geometry" args={[30, 30]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
};

const Three = ({ isActive }) => {
  return (
    <>
      <Canvas camera={{ position: [0, -0.1, 2.5] }}>
        <Lights isActive={isActive} />
        {isActive ? (
          <Delayed waitBeforeShow={3000}>
            <Fire color={"white"} />
          </Delayed>
        ) : null}

        <Bonfire />

        <Plane />
        <Floor />
      </Canvas>
    </>
  );
};

export default Three;
