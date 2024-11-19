// Wake Up Kataaaaaa 🥷

// Le but est de convertir un sigle non abbrégé en sa version abbrégée (majuscules séparées par des points).
// Exemple : 'Wild Code School' => 'W.C.S.'

// Dans un second temps, ajouter un 1er cas particulier Société Nationale du Chemin de Fer Français doit donner
// 'S.N.C.F.' et non ‘S.N.D.C.D.F.F’ , tandis que 'Electricité de France' doit bien donner 'E.D.F.'

// Puis un autre cas particulier 'World Wide Web Consortium' doit donner W.3.C.

// Les autres sigles fonctionnent bien entendu toujours comme attendus.

const exempted = {
  "Société Nationale du Chemin de Fer Français": "S.N.C.F.",
  "Electricité de France": "E.D.F.",
  "World Wide Web Consortium": "W.3.C.",
};

const abbreviate = (phrase) => {
  if (phrase in exempted) return exempted[phrase];

  const words = phrase.replace("'", " ").split(" ");
  let abbreged = [];
  words.map((item) => {
    letters = item.split("");
    if (letters[0] == letters[0].toUpperCase()) {
      abbreged.push(letters[0]);
    }
  });
  return abbreged.join(".") + ".";
};

console.log(abbreviate("Reseau de Transport d'Eléctricité"));
console.log(abbreviate("Wild Code School de Lyon"));
console.log(abbreviate("World Wide Web Consortium"));
console.log(abbreviate("Electricité de France"));
console.log(abbreviate("Concepteur Développeur d'Applications"));
console.log(abbreviate("Société Nationale du Chemin de Fer Français"));
