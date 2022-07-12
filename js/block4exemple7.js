function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  console.log(firstArray);
  console.log(secondArray);

  firstArray.forEach(function (number) {
    console.log(number);
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });

  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
//Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]

// function filterArray(firstArray, value) {
//   console.log(firstArray);
//   const filteredNumbers = [];
//   // Change code below this line
//   firstArray.forEach(function (number) {
//     console.log(number);
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
//Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
