/*

Ensuite on va parler température.
Objectif : crée une fonction de conversion de température universelle convertTemperature().
La fonction doit pouvoir convertir n'importe quelle température entre les unités Celsius, Fahrenheit, et Kelvin.

Cette fonction prendra 3 paramètres :
value : la température à convertir de type number
fromUnity : l'unité de température d'origine de type string
toUnity : l'unité de température cible de type string

La fonction doit retourner un résultat avec un maximum de deux décimales.

Pour info, voici Les formules de conversion entre les échelles de température sont les suivantes :
De Celsius à Fahrenheit : F=C×9/5+32
De Celsius à Kelvin : K=C+273.15
De Fahrenheit à Celsius : C=(F−32)×5/9
De Fahrenheit à Kelvin : K=(F+459.67)×5/9
De Kelvin à Celsius : C=K−273.15
De Kelvin à Fahrenheit : F=K×9/5−459.67

Pense à utiliser le switch :clin_d'œil:

*/

const convertTemperature = (value, fromUnity, toUnity) => {
  switch (fromUnity) {
    case "C":
      switch (toUnity) {
        case "C":
          console.log("Celsius to Celsius: " + value.toFixed(2));
          break;
        case "F":
          console.log(
            "Celsius to Fahrenheit: " + ((value * 9) / 5 + 32).toFixed(2)
          );
          break;
        case "K":
          console.log("Celsius to Kelvin: " + (value + 273.15).toFixed(2));
          break;
      }
      break;

    case "F":
      switch (toUnity) {
        case "C":
          console.log(
            "Fahrenheit to Celsius: " + (((value - 32) * 5) / 9).toFixed(2)
          );
          break;
        case "F":
          console.log("Fahrenheit to Fahrenheit: " + value.toFixed(2));
          break;
        case "K":
          console.log(
            "Fahrenheit to Kelvin: " + (((value + 459.67) * 5) / 9).toFixed(2)
          );
          break;
      }
      break;

    case "K":
      switch (toUnity) {
        case "C":
          console.log("Kelvin to Celsius: " + (value - 273.15).toFixed(2));
          break;
        case "F":
          console.log(
            "Kelvin to Fahrenheit: " + ((value * 9) / 5 - 459.67).toFixed(2)
          );
          break;
        case "K":
          console.log("Kelvin to Kelvin: " + value.toFixed(2));
          break;
      }
      break;
  }
};

convertTemperature(296.15, "K", "K");
convertTemperature(296.15, "K", "F");
convertTemperature(296.15, "K", "C");
convertTemperature(23, "C", "K");
convertTemperature(23, "C", "F");
convertTemperature(23, "C", "C");
convertTemperature(73.4, "F", "K");
convertTemperature(73.4, "F", "F");
convertTemperature(73.4, "F", "C");
