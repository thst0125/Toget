export type Choice = {
  text: string;
  next: string;
};

export type BackgroundType =
  | "train"
  | "conversation"
  | "regret"
  | "control"
  | "exit"
  | "windowReflection"
  | "train-exit"
  | "lokforeren"
  | "ending";

export type Scene = {
  id: string;
  text: string;
  choices: Choice[];
  background: BackgroundType;
};
