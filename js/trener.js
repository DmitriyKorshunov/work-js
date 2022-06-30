// Дополни код функции createArrayOfNumbers(min, max)
// так, чтобы она возвращала массив всех целых чисел
// от значения min до max.
function createArrayOfNumbers(min, max) {
  const numbers = [];
  console.log(numbers);
  let numberMin = min;
  console.log(numberMin);
  let numberMax = max;
  console.log(numberMax);
  for (let i = numberMin; i <= numberMax; i += 1) {
    //console.log(i);
    numbers.push(i);
    console.log(numbers);
  }

  return numbers;
}

//createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
