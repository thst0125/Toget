import { useState } from "react";
import { scenes } from "./story/scenes";
import { SceneView } from "./components/SceneView";
import { backgroundImages } from "./backgrounds";
import "./styles.css";

function App() {
  const [sceneId, setSceneId] = useState("start");

  const scene = scenes[sceneId];

  const backgroundImage = backgroundImages[scene.background];

  return (
    <div className="app">
      <SceneView
        scene={scene}
        backgroundImage={backgroundImage}
        onChoice={setSceneId}
      />
    </div>
  );
}

export default App;
