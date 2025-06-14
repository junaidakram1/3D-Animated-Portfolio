import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      <OrbitControls enableZoom={false} autoRotate />
      <Suspense fallback="loading...">
        <Stage environment={null}>
          <ComputerModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
