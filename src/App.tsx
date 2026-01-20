import { useState } from "react";
import { scenes } from "./story/scenes";
import { SceneView } from "./components/SceneView";
import "./styles.css";

const backgroundMap = {
  train: "/bg/train.jpg",
  conversation: "/bg/conversation.jpg",
  regret: "/bg/regret.jpg",
  control: "/bg/control.jpg",
  exit: "/bg/exit.jpg",
  ending: "/bg/ending.jpg",
};

function App() {
  const [sceneId, setSceneId] = useState("start");

  const scene = scenes[sceneId];

  return (
    <div className="app">
      <SceneView
        scene={scene}
        backgroundImage={backgroundMap[scene.background]}
        onChoice={setSceneId}
      />
    </div>
  );
}

export default App;
