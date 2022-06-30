// Дополни код функции createArrayOfNumbers(min, max)
// так, чтобы она возвращала массив всех целых чисел
// от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   console.log(numbers);
//   let numberMin = min;
//   console.log(numberMin);
//   let numberMax = max;
//   console.log(numberMax);
//   for (let i = numberMin; i <= numberMax; i += 1) {
//     //console.log(i);
//     numbers.push(i);
//     console.log(numbers);
//   }

//   return numbers;
// }

//createArrayOfNumbers(1, 3);
//createArrayOfNumbers(14, 17);

// Напиши функцию filterArray(numbers, value),
// которая принимает массив чисел(параметр numbers) и
// возвращает новый массив, в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
  console.log(numbers);
  let namberOne = numbers[0];
  //console.log('namberOne: ', namberOne);
  let namberLast = numbers[numbers.length - 1];
  //console.log('namberLast: ', namberLast);
  let arrNumbers = [];

  for (const number of numbers) {
    //console.log(i);
    if (number[i] > value) {
      arrNumbers.push(number[i]);
      console.log(value);
      console.log('arrNumbers: ', arrNumbers);
    }
  }
  return narrNumbers;
}

//filterArray([1, 2, 3, 4, 5], 3);
filterArray([12, 24, 8, 41, 76], 38);
