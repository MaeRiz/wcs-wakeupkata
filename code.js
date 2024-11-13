// Tu travailles sur le site web d'un magasin en ligne qui liste des produits.
// Chaque produit est noté par les utilisateurs et cette note influence l'ordre dans lequel les produits sont affichés.
// Chaque produit est représenté par un objet contenant les informations suivantes : id, nom, catégorie, prix, et note moyenne.
// A partir d'un tableau de ces produits, crée une fonction sortByRating() qui triera le tableau de la meilleure note à la moins élevée :

// Crée ensuite une fonction filterByCategory(categoryName) qui retournera la liste des produits de la catégorie indiquée en argument

// DATA
const products = [
  {
    id: 1,
    name: "Smartphone XY",
    category: "Électronique",
    price: 799.99,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Basketball Pro Ball",
    category: "Sport",
    price: 29.99,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Casque Audio Sans Fil",
    category: "Électronique",
    price: 199.99,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Série de Romans Fantasy",
    category: "Livres",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Montre Connectée",
    category: "Électronique",
    price: 249.99,
    rating: 4.4,
  },
];

// FUNCTIONS
const sortByRating = (products) => {
  return products.sort(function (a, b) {
    return b.rating - a.rating;
  });
};

const filterByCategory = (categoryName, products) => {
  return products.filter(
    (item) => item.category.toUpperCase() == categoryName.toUpperCase()
  );
};

// PRINTS FOR TESTS
const PrintSortedByRating = () => {
  console.log("Liste des produits par ordre de notes: ");
  console.log(sortByRating(products));
};

const PrintFilterByCat = (cat) => {
  console.log("Liste des produits par catégorie: " + cat);
  console.log(filterByCategory(cat, products));
};

PrintSortedByRating();
PrintFilterByCat("Livres");
PrintFilterByCat("électronique");
PrintFilterByCat("sporT");
