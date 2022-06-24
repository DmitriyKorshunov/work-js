// Подсчет зарплаты работников
//Зарплата каждого работника это случайное число от 500 до 5000
//записать сумму в переменную и вывести в консоль

const minSalary = 500;
const maxSalary = 5000;
const employees = 3;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП работника номер ${i} - ${salary}`);

  totalSalary += salary;
}
console.log('Total salary: ', totalSalary);
