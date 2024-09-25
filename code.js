// Very first Wake Up Kata la team :tada:
// Le but va être d'écrire une fonction JavaScript que tu vas nommer filterByTitle, qui prend en paramètre un tableau d'objets movies et une chaîne de caractères searchedTitle .
// Cette fonction doit retourner un nouveau tableau contenant uniquement les objets dont la propriété title contient la chaîne de caractères searchedTitle spécifiée en paramètre ET doit être insensible à la casse.

const recentMovies = [
  {
    title: "The Great Adventure",
    releaseDate: "2023-07-15",
    actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"],
  },
  {
    title: "Lost in Time",
    releaseDate: "2023-05-22",
    actors: ["Clara Hughes", "Robert Smith", "Emily Stone"],
  },
  {
    title: "Mystery of the Blue Ocean",
    releaseDate: "2023-08-30",
    actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"],
  },
  {
    title: "Cybernetic",
    releaseDate: "2023-09-12",
    actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"],
  },
  {
    title: "The Hidden World",
    releaseDate: "2023-10-05",
    actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"],
  },
];

const filterByTitle = (movies, searchTitle) => {
  let result = [];
  for (let i in movies) {
    if (movies[i].title.toUpperCase() == searchTitle.toUpperCase()) {
      result.push(movies[i]);
    }
  }
  return result.length > 0
    ? result
    : "Aucun film trouvé, essayez un autre titre";
};

console.log(filterByTitle(recentMovies, "the gReaT adventure"));
