// завдання 1

// const par = document.querySelectorAll(".par");

// for (let i = 0; i < par.length; i++) {
//   if (par[i].textContent === "Привіт")
//     par[i].addEventListener("click", () => {
//       alert("1");
//     });
// }

// завдання 2

// const par = document.querySelectorAll(".par");

// for (let i = 0; i < par.length; i++) {
//   if (par[i].textContent === "Привіт")
//     par[i].addEventListener("click", () => {
//       alert(par[i].textContent.length);
//     });
// }

// завдання 3
// створіть два абзаци з однаковим класом, але з різними текстами
// повішайте addEventListener на абзаци з таким класом і найдовшим тестом

// const par = document.querySelectorAll(".par");
// const largerPar = par[0];

const par = document.querySelectorAll(".par");
let largerPar = par[0];

for (let i = 1; i < par.length; i++) {
  if (par[i].textContent.length > largerPar.textContent.length) {
    largerPar = par[i];
  }

  largerPar.addEventListener("click", function () {
    alert("Ви клікнули на абзац з найдовшим текстом!");
  });
}

// завдання 4 -
//Ви просите користувача ввести суму своєї зарплати. Потім розрахуйте:
//Добавку у вигляді премії в розмірі 15% від зарплати.
// Податки в розмірі 10% від суми всіх нарахувань (зарплата + премія).
//Витрати в магазині в розмірі 190.
//Розділіть решту суми між користувачем та його «дружиною»/«чоловіком». Відображення надлишку в alert

// Отримати зарплату від користувача
const salary = parseFloat(prompt("Введіть вашу зарплату:"));

// Розрахувати премію
const bonus = salary * 0.15;

// Розрахувати суму всіх нарахувань
const totalEarnings = salary + bonus;

// Розрахувати податки
const tax = totalEarnings * 0.1;

// Розрахувати витрати в магазині
const expenses = 190;

// Розрахувати решту суми
const remainingAmount = totalEarnings - tax - expenses;

// Поділити решту між користувачем та його партнером
const userShare = remainingAmount / 2;

// Вивести решту в alert
alert("Надлишок: " + remainingAmount.toFixed(2));

// Вивести результати у консоль
console.log("Зарплата: " + salary.toFixed(2));
console.log("Премія: " + bonus.toFixed(2));
console.log("Податки: " + tax.toFixed(2));
console.log("Витрати в магазині: " + expenses.toFixed(2));
console.log("Решта: " + remainingAmount.toFixed(2));
console.log("Доля користувача: " + userShare.toFixed(2));
console.log("Доля партнера: " + userShare.toFixed(2));
