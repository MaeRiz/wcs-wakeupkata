/* 

 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne
  la somme de tous les nombres pairs présents dans le tableau.
const numbers = [1, 2, 3, 4, 5, 6];

*/

const numbers = [1, 2, 10, 20, 3, 4, 5, 6, 3, 6, -2, -3];

const sumOfEvenNumbers = (numbers) => {
  let sumArray = 0;
  // for (let i in numbers) {
  //   if (numbers[i] % 2 == 0) {
  //     sumArray += numbers[i];
  //   }
  // }
  numbers.map((num) => (num % 2 == 0 ? (sumArray += num) : ""));
  return sumArray;
};

console.log(sumOfEvenNumbers(numbers));

/* 

2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus
 grand nombre présent dans le tableau.
const numbers2 = [12, 21, 67, 36, 49, 51];

*/

const numbers2 = [12, 21, 67, 36, 251, 49, 51, -20, -523];

const maxNumber = (numbers) => {
  return numbers.sort((a, b) => {
    return b - a;
  })[0];
};

console.log(maxNumber(numbers2));
