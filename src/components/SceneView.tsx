import { useEffect, useState } from "react";
import type { Scene } from "../story/types";

type Props = {
  scene: Scene;
  onChoice: (next: string) => void;
};

export function SceneView({ scene, onChoice }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, [scene.id]);

  const isEnding = scene.choices.length === 0;

  return (
    <div className={`scene ${visible ? "fade-in" : "fade-out"}`}>
      <p className="scene-text">{scene.text}</p>

      <div className="choices">
        {!isEnding &&
          scene.choices.map((choice) => (
            <button
              key={choice.text}
              className="choice-button"
              onClick={() => onChoice(choice.next)}
            >
              {choice.text}
            </button>
          ))}

        {isEnding && (
          <button className="restart-button" onClick={() => onChoice("start")}>
            Start på nytt
          </button>
        )}
      </div>
    </div>
  );
}
