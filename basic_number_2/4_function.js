'use strict';

//! Урок 32. Введение в функции

// function logName(name, surname) {
//     console.log(`Мое имя ${name} ${surname}`);
// }

// logName('Yevhen', 'Tarasenko');

// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month;
// }

// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1);

// console.log(countDepositSum(1000, 48, 0.11));

//! Урок 33. Анонимные функции

// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(5));

// Анонимная функция
// const poft = function (num) {
//     return num * num;
// };
// console.log(poft(6));

//! Урок 34. Стрелочные функции

// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(5));

// const poft = num => num * num;
// console.log(poft(6));

// const myName = (name, surname) => name + ' ' + surname;
// console.log(myName('Yevhen', 'Tarasenko'));

// const poft2 = (num, i) => {
//     console.log(num);
//     return num * num;
// };
// console.log(poft2(2));

//! Урок 35. Упражнение - Упрощение функции

// обычная функция в стрелочную
// function toPower(num, power) {
//     return num ** power;
// }
// console.log(toPower(2, 2));

// const toPowerArray = (num, power) => num ** power;
// console.log(toPowerArray(2, 2));

//! Урок 36. Параметры по умолчанию

// function toPower(num, power = 2) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 3));
// console.log(toPower(2));

//! Урок 37. Условия в функциях
// используя if
// function haveAccess(age) {
//     if (age >= 18 && age <= 110) {
//         console.log('Доступ предоставлен');
//     } else if (age <= 0 || age >= 111) {
//         console.log('Невалидный возраст');
//     } else {
//         console.log('Доступ запрещён');
//     }
// }

// haveAccess(0);
// используя switch
// function haveAccess2(age) {
//     switch (true) {
//         case age >= 18 && age <= 110:
//             console.log('Доступ предоставлен');
//             break;
//         case age <= 0 || age >= 111:
//             console.log('Невалидный возраст');
//             break;
//         default:
//             console.log('Доступ запрещён');
//             break;
//     }
// }

// haveAccess2(18);

// function canAccessWebsite(age) {
//     if (age < 18) {
//         return 'Нет';
//     }
//     return 'Да';
// }
// console.log(canAccessWebsite(16));

// const canAccessWebsite2 = age => (age < 18 ? 'Нет' : 'Да');
// console.log(canAccessWebsite2(18));

//! Урок 38. Функции в функциях. Переиспользование функций

// const kgInUSD = 7;
// const kmInUSD = 5;

// function calculateW(present) {
//     return present * kgInUSD;
// }

// function calculateKm(distance) {
//     return distance * kmInUSD;
// }

// function getExchangePrice(present1, present2, distance) {
//     const price1 = calculateW(present1);
//     const price2 = calculateW(present2);
//     const distancePrice = calculateKm(distance);
//     return price1 + price2 + distancePrice;
// }
// console.log(getExchangePrice(1, 2, 10));

//! Урок 39. Упражнение - Кредит на MacBook
// Функция  в функции

// function sumCredit(age, isHaveWork) {
//     let credit;
//     if (age >= 24 && isHaveWork) {
//         credit = 500;
//     } else if (age >= 24 && !isHaveWork) {
//         credit = 100;
//     } else {
//         credit = 0;
//     }
//     return credit;
// }
// console.log(sumCredit(24, false));

// let myMoney = 20000;
// let priceMacBook = 25000;

// function canBuy(myMoney, priceMacBook, age, isHaveWork) {
//     let credit = sumCredit(age, isHaveWork);
//     let canBuy;
//     if (myMoney + credit >= priceMacBook) {
//         canBuy = true;
//     } else {
//         canBuy = false;
//     }
//     return canBuy;
// }

// console.log(canBuy(myMoney, priceMacBook, 24, false));

//* Решение автора
// switch в функции

// function computeCredit(age, hasJob = false) {
//     // если не передаем hasJob то по умолчанию оно будет false
//     switch (true) {
//         case age > 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }

// function canBuy(productPrice, age, money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }

// console.log(canBuy(2000, 25, 1500, true));

//! ------------------------------------------------------------------------------------------

//! Функция

//! Function Declaration
//* Пример 1

// const userName = prompt('Enter your name and surname');

// if (userName.length < 4) {
//     alert('Please enter more characters');
//     location.reload(); // перезагрузить текущую страницу
// } else {
//     sayHello(userName);
// }

// function sayHello(userName) {
//     alert(`Hello ${userName}, you are the best!`);
// }

//* Пример 2

// function createUserName() {
//     return 'Yevhen';
// }
// const name = createUserName();
// console.log(name);

//* Пример 3

// function createUserNameWithUpperCase(name) {
//     return name.toUpperCase(); // Верхний регистр
// }

// console.log(createUserNameWithUpperCase('Yevhen'));

//* Пример 4

// function getUser(id = 1, name) {
//     console.log(id + ' ' + name);
// }
// getUser('Антон');

//* Пример 5

// function isAdmin(userId) {
//     if (userId === 10) {
//         return true;
//     } else {
//         return isAdmin(10);
//     }
// }
// console.log(isAdmin(5));

//! Function Expression
//* Пример 1

// const sayHello2 = function (greeting) {
//     console.log(greeting);
// };
// sayHello2('Hello');

//* Функция в объекте
// const car = {
//     speed: 100,
//     color: 'red',
//     drive: function (speed) {
//         console.log(`I drive very fast! My speed ${speed}`);
//     },
// };
// car.drive(100);
// console.log(100);

//! Стрелочные функции

//* Пример 1

// const sayHello = () => {
//     console.log('Hello 2');
// };
// sayHello();

//* Пример 2

// const sayHelloToPerson = name => {
//     console.log(`Hello ${name}`);
// };
// sayHelloToPerson('Yevhen');

//* Пример 3

// const sum = (a, b, c) => {
//     console.log(a + b + c);
// };
// sum(1, 2, 3);

// const sum1 = (a, b, c) => {
//     return a + b + c;
// };
// console.log(sum1(1, 2, 3));

// const sum2 = (a, b, c) => a + b + c;
// console.log(sum2(1, 2, 3));
