import React from "react";
import { useGLTF } from "@react-three/drei";

export function EyeModel(props) {
  const { nodes, materials } = useGLTF("/eyeProtector.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["1001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/eyeProtector.glb");
