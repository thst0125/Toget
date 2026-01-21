import type { Scene } from "./types";

export const scenes: Record<string, Scene> = {
  start: {
    id: "start",
    background: "train",
    text: `
Du sitter i en togvogn som beveger seg jevnt fremover.
Lyset er dempet. Utenfor vinduet er det mørkt.

Du kan ikke huske når du gikk på.
    `,
    choices: [
      { text: "Se ut av vinduet", next: "vindu" },
      { text: "Se deg rundt i vognen", next: "vogn" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  vindu: {
    id: "vindu",
    background: "windowReflection",
    text: `
Mørket utenfor gir ingenting tilbake.
Bare refleksjonen av deg selv i glasset.
    `,
    choices: [
      { text: "Gå videre i toget", next: "vogn" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  vogn: {
    id: "vogn",
    background: "train",
    text: `
Du ser deg rundt i vognen.
Det sitter noen få andre her.
Ingen sier noe, men en av dem ser på deg som om de visste at du kom.
    `,
    choices: [
      { text: "Snakke med personen", next: "person" },
      { text: "Gå videre i toget", next: "angret_person" },
      { text: "Trekke i nødbremsen", next: "nodbrems" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  stillhet: {
    id: "stillhet",
    background: "train",
    text: `
Du blir sittende.
Lyden av skinner og vind er konstant.
Det føles som om tiden går, men du er ikke sikker.
    `,
    choices: [
      { text: "Reise deg", next: "vogn" },
      { text: "Fortsette å sitte", next: "stillhet" },
    ],
  },

  person: {
    id: "person",
    background: "conversation",
    text: `
"Jeg har sittet her lenge", sier de.
"Så lenge at jeg sluttet å telle."

De ser ikke slitne ut.
Bare vant.
    `,
    choices: [
      { text: "Spørre hvorfor de aldri gikk av", next: "aldri_gatt_av" },
      { text: "Spørre hvor toget skal", next: "hvor_toget_skal" },
      { text: "Avslutte samtalen", next: "stillhet" },
    ],
  },

  aldri_gatt_av: {
    id: "aldri_gatt_av",
    background: "conversation",
    text: `
De trekker litt på skuldrene.

"Det var alltid lettere å bli litt til."
"Og så ble det bare sånn."

De ser på deg igjen, som om de prøver å huske
når det sluttet å være et valg.
    `,
    choices: [
      { text: "Spørre om de angrer", next: "anger" },
      { text: "Reise deg og gå videre", next: "vogn" },
      { text: "Bli sittende med dem", next: "stillhet" },
    ],
  },

  anger: {
    id: "anger",
    background: "conversation",
    text: `
De blir stille en stund.

"Anger er et rart ord", sier de til slutt.
"Det forutsetter at man visste noe annet var mulig."

De ser bort, som om svaret ligger et sted utenfor vinduet.
    `,
    choices: [
      { text: "Spørre hva de mener med det", next: "aldri_gatt_av" },
      { text: "La det være og bli sittende", next: "stillhet" },
      { text: "Reise deg og gå videre", next: "vogn" },
    ],
  },

  angret_person: {
    id: "angret_person",
    background: "regret",
    text: `
En person står ved døren mellom to vogner.
Hånden deres hviler på dørhåndtaket,
men de slipper det ikke.

"Jeg gikk av en gang", sier de lavt.
"Jeg trodde det var det riktige."

De ser ikke på deg når de snakker.
    `,
    choices: [
      { text: "Spørre hva som skjedde", next: "hva_som_skjedde" },
      { text: "Spørre hvorfor de gikk på igjen", next: "hvorfor_tilbake" },
      { text: "Gå videre uten å si noe", next: "vogn" },
    ],
  },

  hva_som_skjedde: {
    id: "hva_som_skjedde",
    background: "regret",
    text: `
De rister svakt på hodet.

"Det spiller ingen rolle nå."
"Det ble ikke slik jeg hadde sett for meg."

Hånden strammes rundt håndtaket igjen.
    `,
    choices: [
      { text: "Spørre hvorfor de gikk på igjen", next: "hvorfor_tilbake" },
      { text: "La dem være", next: "stillhet" },
      { text: "Gå videre i toget", next: "vogn" },
    ],
  },

  hvorfor_tilbake: {
    id: "hvorfor_tilbake",
    background: "regret",
    text: `
"Fordi det var kjent", sier de.
"Og fordi det som ventet der ute
ikke var det jeg trodde."

De slipper dørhåndtaket.
    `,
    choices: [
      { text: "Gå videre i toget", next: "lokforer" },
      { text: "Bli stående litt til", next: "stillhet" },
    ],
  },

  lokforer: {
    id: "lokforer",
    background: "lokforeren",
    text: `
Fronten av toget er stille.
Det står én person der, vendt bort fra deg.

"Dette toget stopper ikke," sier de.
"Men dørene fungerer."
    `,
    choices: [
      { text: "Spørre hva de mener", next: "hva_mener_du" },
      { text: "Gå uten å si noe", next: "vogn" },
    ],
  },

  hva_mener_du: {
    id: "hva_mener_du",
    background: "lokforeren",
    text: `
"Det betyr bare én ting," sier de rolig.
"Du kan bli så lenge du vil."

"Men hvis du går,
er det ditt valg."
    `,
    choices: [
      { text: "Gå mot døren", next: "doren" },
      { text: "Gå tilbake i toget", next: "vogn" },
    ],
  },

  nodbrems: {
    id: "nodbrems",
    background: "control",
    text: `
En rød spak henger på veggen ved døren.
Den er slitt, som om den har blitt brukt før.
    `,
    choices: [
      { text: "Trekke i nødbremsen", next: "brems_trukket" },
      { text: "La den være", next: "vogn" },
    ],
  },

  brems_trukket: {
    id: "brems_trukket",
    background: "control",
    text: `
Du trekker i spaken.

Toget bremser.
Bare litt.
Så fortsetter det som før.
    `,
    choices: [
      { text: "Gå videre i toget", next: "lokforer" },
      { text: "Bli stående", next: "stillhet" },
    ],
  },

  doren: {
    id: "doren",
    background: "exit",
    text: `
Du står ved døren.

Den er ikke låst.
Utenfor er det mørkt, men stille.
    `,
    choices: [
      { text: "Gå av", next: "slutt_gar_av" },
      { text: "Gå tilbake", next: "slutt_blir" },
      { text: "Bli stående", next: "slutt_passiv" },
    ],
  },

  slutt_gar_av: {
    id: "slutt_gar_av",
    background: "train-exit",
    text: `
Du tar et steg ut.

Bak deg fortsetter toget.
    `,
    choices: [],
  },

  slutt_blir: {
    id: "slutt_blir",
    background: "ending",
    text: `
Du setter deg igjen.

Toget beveger seg videre.
    `,
    choices: [],
  },

  slutt_passiv: {
    id: "slutt_passiv",
    background: "exit",
    text: `
Døren lukker seg.

Toget fortsetter.
    `,
    choices: [],
  },
};
