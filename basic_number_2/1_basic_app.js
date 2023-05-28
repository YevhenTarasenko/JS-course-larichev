'use strict';

//! Урок 12. Переменные

// let a = 1;
// console.log(a);
// a = 'test';
// console.log(a);

//! Урок 13. Арифметические операторы

// const width = 10;
// const height = 5;
// const space = width * height;
// const newWidth = width - 4;
// const newWidth2 = width + 4;
// console.log(newWidth2);
// const division = newWidth / newWidth2;
// console.log(division);
// const volume = 2 ** 3;
// console.log(volume);

// const city = 'Kiev';
// const street = 'Gagarin';
// console.log(city + ' ' + street);
// console.log(`${city} ${street}`);

//! Урок 14. Операторы присваивания и сравнения

// let age = 18 + 5;
// age += 2;
// age -= 3;
// age *= 2;
// age /= 2;
// age **= 2;

// age++;
// age++;
// age--;
// age--;

// age = 22;

// console.log(age);

// const vasia = 20;
// console.log(age > vasia);
// console.log(age < vasia);
// console.log(age >= vasia);
// console.log(age <= vasia);
// console.log(age != vasia);
// console.log(age == vasia);

//! Урок 15. Порядок операторов

// const isSuited = 100 - 10 > 90 - 5;
// console.log(isSuited);

// const a = (6 + 10) / 2;
// console.log(a);

// let b;
// let c;
// c = b = 100 + 50;
// console.log(c);
// console.log(b);

//! Урок 16. Типы данных

// let a = 5;
// let b = 5.6;
// console.log(typeof a);
// console.log(typeof b);

// let isAdmin = false;
// console.log(typeof isAdmin);

// let c;
// console.log(typeof c);
// c = 5;
// console.log(typeof c);

// let d = null;
// console.log(typeof d)

//! Урок 17. Упражнение - Расчёт проекта

// let myCoast = 80;
// let myHours = 5;
// let workOrder = 40;
// let limitDays = 11;

// let workDays = workOrder / myHours
// console.log(workDays < limitDays)
// let workCoast = myCoast * workOrder
// console.log(workCoast);

//* Решение

// const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;
// console.log('Смогу ли я работать? ' + (availableHours > projectHours));
// console.log('Стоимость работ: ' + projectHours * payRateUSD + '$')

//! Урок 18. Шаблонные строки

// const projectName = 'Сайт магазина';
// const price = 2000;
// const author = 'Василий Пупкин';

// const template = author + ' заказал ' + projectName + ' по цене ' + price + ' $'
// console.log(template);

// const template2 = `${author} заказал ${projectName} по цене ${price} $`
// console.log(template2);

// const template3 = 'Проект \n' + 'Цена: ' + price + '$'
// console.log(template3)

// const template4 = `Проект
// Цена: ${price}$`
// console.log(template4)

//! Урок 19. Преобразование типов

// const age = '18';
// console.log(Number(age) + 5)

// console.log(age - 3);
// const userName = 'Вася'
// console.log(userName + 5)
// console.log(Number(userName) + 5)
// console.log(userName - 5)
// console.log(typeof NaN)
// console.log(4 + 7);
// console.log(String(4) + 7);
// console.log(Boolean(1));
// console.log(Boolean(0));

// const a = 2 + '10';
// console.log(a - 10)

//! Урок 20. False из других типов

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(Number('sx')));

// console.log(Number('10-1'))
// console.log(Boolean('5') + 9)

//! ------------------------------------------------------------------------------------------

//* Переменные

// let greetingForUsers = 'Hello my dear users!';

// const greetingForUsers2 = 'Hello my dear users2!';

// alert('Hello my dear users!');

//* Математические операторы

// const num1 = 17;
// const num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// let num3 = 50;
// num3 += num2;
// console.log(num3);
