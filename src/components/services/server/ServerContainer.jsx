import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ServerModel } from "./ServerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ServerContainer = () => {
  return (
    <Canvas shadows={false}>
      <PerspectiveCamera position={[-1, 0.8, 1.8]} zoom={0.77} makeDefault />
      <OrbitControls enableZoom={false} autoRotate />
      <Suspense fallback="loading...">
        <Stage environment={null}>
          <ServerModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default ServerContainer;
