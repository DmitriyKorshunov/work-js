//Количество клиентов в отеле
/*let clientCounter = 10;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}*/

//Длина пароля или строки
/*let password = '';
do {
  password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);*/

//Цикл фор
/*for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}*/

/*const target = 4;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  console.log(i);
  sum += i;
}

console.log(sum);*/

/*const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}*/

/*const max = 10;

for (let i = 0; i < max; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Нечетное i: ', i);
}*/

const max = 10;
let sum;
for (let i = 1; i <= max; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log('Четное i: ', i);
  let sum = i + i;
  console.log('Cумма: ', sum);
}
