'use strict';

//! Урок 27. Булевая логика

/*
true && true = true //* И
true && false = false
false && true = false
false && false = false

true || true = true //* ИЛИ
true || false = false
false || true = false
false || false = false
*/

//! Урок 28. Логические операторы

// const isAdmin = true;
// const canWrite = true;

// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный файл ${isAdmin || canWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`);

// const isEdited = true;
// const superAdmin = true;

// console.log(`Системный файл с редактированием ${isAdmin && canWrite && !isEdited | isAdmin}`);

//! Урок 29. Операторы с другими типами

// console.log('Вася' || 'Олег');
// console.log(false || 'Олег');
// console.log('Вася' || false);
// console.log(false || false);

// console.log('Вася' && 'Олег');
// console.log(false && 'Олег');
// console.log('Вася' && false);
// console.log(false && false);

// let a = 'Марина';
// const userName = a || 'Петя';
// console.log(userName);

// const isAdmin = true;
// const fileName = 'file.mp4' && isAdmin;
// console.log(fileName);

//! Урок 30. Оператор нулевого слияния

// const userName = '';
// console.log(userName || 'Default Username');
// console.log(userName ?? 'Default Username');

//! Урок 31. Упражнение - Проверка прав

// const balance = 1000;
// const bonusBalance = 100;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;

// const canBuy = (balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling;

// if (canBuy === true) {
//     console.log('Может купить игру');
// } else {
//     console.log('Покупка игры невозможна');
// }

// console.log(!'' && true && 'Yes' && Boolean('true') && 'PS'); // PS
