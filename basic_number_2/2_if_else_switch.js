'use strict';

//! Урок 21. if , else

// const money = 10;

// if (money > 50) {
//     console.log('Может купить наш продукт');
// } else if (money > 5) {
//     console.log('Куплен мини продукт');
// } else {
//     console.log('Не может купить наш продукт');
// }

//* Задачка
// const number = 6;

// if (number % 2 == 0) {
//     console.log('Это чётное число');
// } else {
//     console.log('Это не чётное число');
// }

//* Задачка
// let name = 'Yevhen';

// if (name === 'Yevhen') {
//     console.log('male');
// } else {
//     console.log('female');
// }

//! Урок 22. Упражнение - Размещение депозита

// const deposit = 12000;
// const rate = 0.07;
// const depositPeriod = 24;
// const houseCoast = 13500;

// const result = deposit * (1 + rate / 12) ** 24;
// if (result > houseCoast) {
//     console.log(`Можем купить. Остаток ${result - houseCoast}`);
// } else {
//     console.log(`Средств недостаточно`);
// }

//! Урок 23. Операторы равенства

// const secretNumber = 7;
// if (secretNumber === 7) {
//     console.log('Угадал');
// }

//! Урок 24. Switch

// const role = 'Admin';

// if (role === 'manager') {
//     console.log('Менеджер');
// } else if (role === 'Admin') {
//     console.log('Admin');
// } else if (role === 'CEO') {
//     console.log('CEO');
// } else {
//     console.log('Мы тебя не знаем');
// }

// switch (role) {
//     case 'manager':
//         console.log('Менеджер');
//         break;
//     case 'Admin':
//         console.log('Admin');
//         break;
//     case 'CEO':
//         console.log('CEO');
//         break;
//     default:
//         console.log('Мы тебя не знаем');
// }

// const number = 1;
// switch (true) {
//     case number > 0:
//         console.log('Положительный');
//         break;
//     case number < 0:
//         console.log('Отрицательный');
//     default:
//         console.log('Ноль');
// }

//! Урок 25. Тернарные операторы

// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 0;
// let message;

// if (budget > bmwX3Price) {
//     message = 'BMW';
// } else if (budget > fordFocusPrice) {
//     message = 'Ford';
// } else {
//     message = 'Велосипед';
// }

// console.log(`Я хочу купить ${message}`);

// let message2 = budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';
// console.log(message2);

//! Урок 26. Проверка робота

// const stringByUser = prompt('Сколько будет 7 + или -15 ?');

// if (stringByUser === '22' || stringByUser === '-8' || stringByUser === 'Я не робот') {
//     console.log('Успех');
// } else {
//     console.log('Хм, ты чё робот?!');
// }

// switch (true) {
//     case stringByUser === 'Я не робот':
//     case stringByUser === '22':
//     case stringByUser === '-8':
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!');
// }

// if (stringByUser === 'Я не робот') {
//     console.log('Успех');
// } else {
//     const numberByUser = Number(stringByUser);
//     switch (numberByUser) {
//         case 22:
//         case -8:
//             console.log('Успех');
//             break;
//         default:
//             console.log('Вы робот!');
//     }
// }

//! ------------------------------------------------------------------------------------------

//! Условные операторы

//* if else operator
// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log('You are logged in!');
// } else {
//     console.log('You are NOT logged in!');
// }

//* Тернарный оператор
// const isUserLoggedIn = false;
// console.log(isUserLoggedIn ? 'You are logged in!' : 'You are NOT logged in!');

//* Switch оператор
// const isUserLoggedIn = true;
// switch (true) {
//     case isUserLoggedIn == true:
//         console.log('You are logged in!');
//         break;
//     case isUserLoggedIn == false:
//         console.log('You are NOT logged in!');
//         break;
// }
