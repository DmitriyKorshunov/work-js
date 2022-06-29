/* напиши скрипт который подсчитает сумму всех четных чисел,
которые входят в диапазон чисел в переменных от min до max,
Например. если min=0 и max=5, то диапазон 0-5, и в нем два четных числа 2 и 4,
их сумма 6*/
/*const min = 5;
const max = 13;
let total = 0;*/

// первый вариант
/*for (let i = min; i <= max; i += 1) {
  //console.log(i);

  if (i % 2 === 0) {
    console.log('Четное: ', i);
    total += i;
  }
}
console.log('Total: ', total);*/

// второй вариант
/*for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    //console.log('Не четное: ', i);
    continue;
  }
  console.log('Четное: ', i);
  total += i;
}
console.log('Total: ', total);*/

/*Если выписать все натуральные числа меньше 10, кратные 3 или 5, 
то получим 3, 5, 6 и 9. 
Сумма этих чисел равна 23.
Найдите сумму всех чисел меньше 1000, кратных 3 или 5.*/

//создать переменные
// const min = 0;
// const max = 3;
// let total = 0;

//фор от min до max с шагом 1
// for (let i = min; i < max; i += 1) {
//   total += i;
//   /*if (i % 3 !== 0 && i % 5 !== 0) {
//     continue;
//   }*/
//   console.log(i);
//total += i;
//}
//console.log('сумма: ', total);
//Проверям остаток от деления

// Пишем сумму

function calculateTotal(3) {
  let total = 0;
  for (let i = 0; i <= 3; i += 1) {
    total += i;
  }
  return total;
  console.log(total);
}
//console.log(total);
//calculateTotal(3);
