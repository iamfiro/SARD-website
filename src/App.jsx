import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Credit } from "./components/credit";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <Credit />
    </>
  );
}

export default App;
