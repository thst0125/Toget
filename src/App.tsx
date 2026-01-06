import { useState } from "react";
import { scenes } from "./story/scenes";
import { SceneView } from "./components/SceneView";
import "./styles.css";

//APpp funksjonen holder styr på hvilken scene som er aktiv for øyeblikket
//const scene henter riktig scene basert på brukerens valg
function App() {
  const [sceneId, setSceneId] = useState("start");
  const scene = scenes[sceneId];

  return (
    <main className="app">
      <SceneView scene={scene} onChoice={setSceneId} />
    </main>
  );
}

export default App;
