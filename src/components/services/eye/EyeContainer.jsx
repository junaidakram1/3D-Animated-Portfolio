import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { EyeModel } from "./EyeModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const EyeContainer = () => {
  return (
    <Canvas shadows={false}>
      <PerspectiveCamera position={[-0.9, 0.5, 1.8]} zoom={0.78} makeDefault />
      <OrbitControls enableZoom={false} autoRotate />
      <Suspense fallback="loading...">
        <Stage environment={null}>
          <EyeModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default EyeContainer;
