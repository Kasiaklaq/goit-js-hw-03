function makeArray(firstArray, secondArray, maxLength) {
  // Tworzenie nowej tablicy, łącząc firstArray i secondArray
  const newArray = firstArray.concat(secondArray);

  // Sprawdzenie, czy długość nowej tablicy przekracza maxLength
  if (newArray.length > maxLength) {
    // Zwrócenie kopii tablicy o długości maxLength
    return newArray.slice(0, maxLength);
  } else {
    // Zwrócenie całej nowej tablicy
    return newArray;
  }
}

// Testowanie funkcji
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
