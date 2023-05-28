'use strict';

//! ЦИКЛЫ

/*
1. объявить переменную для участия в цикле
2. условия когда цикл должен быть завершён
3. действия с нашей переменной 
*/

/*

цикл for
continue - продолжить цикл при условии
break - прервать цикл при определенном условии

цикл while
цикл do while

for of - цикл по ЭЛЕМЕНТУ массива / итерация по значениям массива

for in - цикл по ИНДЕКСУ массива / итерация по индексу массива

*/

//! Урок 50. Цикл for

// for (let i = 1; i <= 10; i++) {
//     console.log(`Наш баланс ${i}`);
// }

//! Урок 51. Break и continues

// const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// цикл по длине массива
// for (let i = 0; i < tasks.length; i++) {
//     console.log(tasks[i]);
// }

//* continue проверить наличие элемента в массиве используя цикл и пропустить выполнение
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         continue;
//     }
//     console.log(tasks[i]);
// }

//* continue проверить наличие элемента в массиве используя цикл и завершить цикл
// прекратить цикл после нахождения элемента
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         break;
//     }
//     console.log(tasks[i]);
// }

//! Урок 52. Упражнение - цикл в обратном порядке
// достать элементы с массива и циклом соединить их в строку
// const arr = ['!', 'JS', 'люблю', 'Я'];
// const res = [];

// for (let i = arr.length; i >= 0; i--) {
//     res.push(arr[i]);
// }

// console.log(res.join(' '));

//! Урок 53. Цикл в цикле

// for (let i = 1; i < 5; i++) {
//     console.log(`Цикл 1 - ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Цикл 2 - ${j}`);
//     }
// }

// const tasks = [
//     [1, 'Задача 1'],
//     [2, 'Задача 2'],
// ];

//* цикл внутри цикла. Массив в массиве
// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]);
//     }
// }

//! Урок 54. Цикл while
//* Пример с for
// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }

//* Пример while
// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//* Пример

// const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         break;
//     }
//     console.log(arr[i]);
// }

// let i = 0;
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//* do while

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 0);

//! Урок 55. Цикл for of / for in

// const arr = [1, 4, 8, 7, 'text'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//* for of - итерация по элементу массива
// for (let element of arr) {
//     console.log(element);
// }

//* for in - цикл по индексу массива
// for (let index in arr) {
//     console.log(index);
// }

//! Урок 56. Упражнение - Расчёт итогового баланса

// const operations = [1000, -1700, 300, -500, 10000];
// const startedBalance = 100;

//* функция для подсчёта итогового баланса

// function sumBalance(startedBalance, operations) {
//     let totalBalance = startedBalance;
//     for (let el of operations) {
//         if (el >= 0) {
//             totalBalance += el;
//         }
//     }
//     return totalBalance;
// }

// console.log(sumBalance(startedBalance, operations));

//* функция проверки отрицательного баланса

// function negativeBalance(startedBalance, operations) {
//     for (let el of operations) {
//         startedBalance += el;
//         if (startedBalance <= 0) {
//             console.log(`Недостаточно средств, на вашем счету ${startedBalance}`);

//             break;
//         }
//     }
// }

// console.log(negativeBalance(startedBalance, operations));

//* функция среднего дохода и среднего расхода

// function average(startedBalance, operations) {
//     let averageIncome = [];
//     let averageOutcome = [];

//     for (let el of operations) {
//         if (el >= 0) {
//             averageIncome.push(el);
//         } else {
//             averageOutcome.push(el);
//         }
//     }

//     let countOnAverageIncome = averageIncome.length + 1;
//     let averageIncome2 = startedBalance;
//     for (let el of averageIncome) {
//         if (el >= 0) {
//             averageIncome2 += el;
//         }
//     }
//     console.log(`Средний доход равен ${averageIncome2 / countOnAverageIncome}`);

//     let countOnAverageOutcome = averageOutcome.length;
//     let averageOutcome2 = 0;
//     for (let el of averageOutcome) {
//         if (el < 0) {
//             averageOutcome2 -= el;
//         }
//     }
//     console.log(`Средний расход равен -${averageOutcome2 / countOnAverageOutcome}`);
// }

// console.log(average(startedBalance, operations));

//!----------------------------------------------------------------------------------------

//! ЦИКЛЫ

//* Пример

// const subscribers = [
//     { name: 'Andrei', isCloseFriend: true },
//     { name: 'Vasy', isCloseFriend: true },
//     { name: 'Yevhen', isCloseFriend: true },
//     { name: 'Yura', isCloseFriend: true },
//     { name: 'Dima', isCloseFriend: true },
//     { name: 'Vitaliy', isCloseFriend: true },
//     { name: 'Max', isCloseFriend: true },
//     { name: 'Jon', isCloseFriend: true },
//     { name: 'Don gand', isCloseFriend: true },
// ];

// console.log(subscribers);

//! for
//* вывести каждый элемент объекта в массиве используя цикл
// for (let i = 0; i < subscribers.length; i++) {
//     console.log(subscribers[i]);
// }

//! for of
//* вывести каждый элемент объекта в массиве используя цикл
//* пройтись по всем элементам массива - итерация по элементу массива
// for (const item of subscribers) {
//     console.log(item);
// }

//! for in
//* цикл по индексу массива
// const obj = {
//     name: 'Vitaly',
//     age: 18,
//     sex: 'male',
// };

//* вывести значения ключей в объекте
// for (const key in obj) {
//     console.log(obj[key]);
// }

//* вывести ключи в объекте
// for (const key in obj) {
//     console.log(key);
// }

//! while

// let i = 0;
// while (i < subscribers.length) {
//     console.log(subscribers[i]);
//     i++;
// }

//! do while

// let i = 0;
// do {
//     console.log(subscribers[i]);
//     i++;
// } while (i < subscribers.length);

//! Задачка

//* функция принимает массив чисел и возводит в квадрат каждое число

// function squareArr(arr) {
//     let hasString = false;

//     for (let i = 0; i < arr.length; i++) {
//         // проверить каждый элемент в массиве на его тип
//         if (typeof arr[i] !== 'number') {
//             hasString = true;
//             break;
//         }
//     }

//     if (hasString === true) {
//         console.log('Передан неверный тип данных в массиве');
//         return;
//     }

//     let res = []; // взять каждый элемент в массиве и возмести его в степень
//     for (let el of arr) {
//         res.push(el ** 2);
//     }
//     return res;
// }

// const tasks = [1, 2, 3, 4, 5];
// console.log(squareArr(tasks));
// console.log(typeof tasks[1]);
