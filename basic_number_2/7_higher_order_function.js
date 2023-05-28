'use strict';

//! Урок 57. Функции высшего порядка

//* Функции высшего порядка принимают или возвращают функцию

//! Урок 58. Callback
//* Callback - передать какую-то функцию, которая будет вызвана этой функцией

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function power(a, b) {
//     return a ** b;
// }

//* Функция высшего порядка
// function calculate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }

// let res = calculate(3, 5, add);
// console.log(res);

// let res2 = calculate(3, 5, subtract);
// console.log(res2);

// let res3 = calculate(3, 5, power);
// console.log(res3);

//! Урок 59. Возврат функции

//* Возврат одной функции из другой

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));

// console.log(power(5)(4));

//! Урок 60. Стрелочные функции

// const power = pow => num => num ** pow;

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));

// console.log(power(5)(4));
