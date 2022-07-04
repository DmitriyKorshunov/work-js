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

// function filterArray(numbers, value) {
//   console.log(numbers);
//   let namberOne = numbers[0];
//   //console.log('namberOne: ', namberOne);
//   let namberLast = numbers[numbers.length - 1];
//   //console.log('namberLast: ', namberLast);
//   let arrNumbers = [];

//   for (const number of numbers) {
//     //console.log(i);
//     if (number[i] > value) {
//       arrNumbers.push(number[i]);
//       console.log(value);
//       console.log('arrNumbers: ', arrNumbers);
//     }
//   }
//   return narrNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет, есть ли в массиве
// array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать
// метод массив.includes(значение).

// function includes(array, value) {
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
// includes([1, 2, 3, 4, 5], 3); // true
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');// true
// includes(['apple', 'plum', 'pear', 'orange'], 'plum'); // true
// includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'); // false
// includes([1, 2, 3, 4, 5], 17) // false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // false

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const keysSalaries = Object.keys(salaries);
//   console.log(keysSalaries);
//   const valueSalaries = Object.values(salaries);
//   console.log(valueSalaries);

//   for (const value of valueSalaries) {
//     console.log(value);

//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log('сумма зарплат: ', countTotalSalary({}));
// countTotalSalary({}) возвращает 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
];
for (const book of books) {
  // Объект книги
  //console.log('книги: ', book);
  // Название
  console.log(book.title);
  // Автор
  //console.log(book.author);
  // Рейтинг
  //console.log(book.rating);
}
