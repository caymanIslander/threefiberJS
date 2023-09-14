import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useMediaQuery } from "@react-hook/media-query";
import './canvas.css'

function App() {
  const isMobile = useMediaQuery("(max-width: 686px)");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ display: "flex", alignItems: 'center', padding: '5px', backgroundColor: "#e2e2e2", width: "100%", height: "10%", justifyContent: "center" }}>
        <img src="../textures/loky.png" style={{ width: "10%", height: "75%" }} />
      </div>
      <div className="container">
        <Canvas shadows camera={{ position: [10, 10, 10], fov: 3 }} >
          <Experience />
        </Canvas>
        <p>container</p>
        <p>container</p>
        <p>container</p>
      </div>
      <div className="test">
        Abc
      </div> 
    </div>
  );
  
}



export default App;
