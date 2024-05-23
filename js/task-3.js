function filterArray(numbers, value) {
  // Utwórz pustą tablicę do przechowywania pasujących liczb
  const filteredNumbers = [];

  // Iteruj przez każdy element tablicy numbers
  for (const number of numbers) {
    // Sprawdź, czy element jest większy niż value
    if (number > value) {
      // Dodaj element do tablicy filteredNumbers
      filteredNumbers.push(number);
    }
  }

  // Zwróć nową tablicę z pasującymi liczbami
  return filteredNumbers;
}

// Testowanie funkcji
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
