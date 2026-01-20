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
//APpp funksjonen holder styr på hvilken scene som er aktiv for øyeblikket
//const scene henter riktig scene basert på brukerens valg
function App() {
  const [sceneId, setSceneId] = useState("start");
  const scene = scenes[sceneId];

  return (
    <main
      className="app"
      style={{
        backgroundImage: `url(${backgroundMap[scene.background]})`,
      }}
    >
      <SceneView scene={scene} onChoice={setSceneId} />
    </main>
  );
}

export default App;
