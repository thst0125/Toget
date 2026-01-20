import { useState } from "react";
import { scenes } from "./story/scenes";
import { SceneView } from "./components/SceneView";
import type { BackgroundType } from "./story/types";
import "./styles.css";

const backgroundMap: Record<BackgroundType, string> = {
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

  const backgroundImage = backgroundMap[scene.background];

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
