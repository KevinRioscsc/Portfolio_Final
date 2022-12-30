//import * as THREE from "three";
///import { Stats, OrbitControls, useHelper } from "@react-three/drei";
///import { useControls } from "leva";
import { useRef } from "react";

const Lights = ({ isActive }) => {
  // const ambientRef = useRef();
  const directionalRef = useRef();
  const pointRef = useRef();
  //const spotRef = useRef();
  /*

  useControls("Ambient Light", {
    intensity: {
      value: 1,
      min: 0,
      max: 5,
      onChange: (v) => {
        ambientRef.current.intensity = v;
      },
    },
    visible: {
      value: false,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v);
      },
    },
  });*/

  return (
    <>
      <directionalLight
        ref={directionalRef}
        position={[-17, 0, 89]}
        color={"#a0a0a0"}
      />
      {isActive ? (
        <pointLight ref={pointRef} position={[0, 0, 0]} intensity={".5"} />
      ) : null}

      <pointLight ref={pointRef} position={[0, 0, 0]} color={"#481300"} />
    </>
  );
};

export default Lights;
