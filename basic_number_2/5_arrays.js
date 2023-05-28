'use strict';

//! МЕТОДЫ МАССИВОВ
/*

length
length - 1
at(-1)
unshift()
push()
shift()
pop()
indexOf()
includes()
slice()
splice()
reverse()
concat()
split()
join()

*/

//* ДЕТАЛЬНЕЕ МЕТОДЫ МАССИВОВ

const arrTest = ['a', 'b', 'c', 'd'];
const arrTest2 = ['a1', 'b2', 'c3', 'd4'];
const urlTest = 'hello/test/world/login/admin';

// arrTest.length; //* длина массива = 4

// arrTest[0]; //* получить определенный элемент массива = а
// arrTest.at(0); //* получить определенный элемент массива = а

// arrTest[arrTest.length - 1]; //* получить последний элемент в массиве = d
// arrTest.at(-1); //* получить последний элемент в массиве = d
// arrTest.slice(-2) //* получить последние элементы в массиве ! возвращается массив

// arrTest.push('ab'); //* добавит новый элемент в конец массива / возращает новую длину массива
// arrTest.unshift('a1'); //* добавит новый элемент в начало массива / возращает новую длину массива

// arrTest.pop(); //* удаляет последний элемент  в массиве / возращает удалённый элемент
// arrTest.shift(); //* удаляет первый элемент в массиве / возращает удалённый элемент
// arrTest.splice(-1) //* удалит последний элемент в массиве / возращает удалённый элемент

// arrTest.indexOf('b'); //* найти индекс конкретного элемента (если есть - то возращает индекс; если нету - возращает -1)
// arrTest.includes('b'); //* найти наличие элемента в массиве / true, false

// arrTest.slice(1); //* отрезать кусок, результатом возращает от 1го и до последнего элемента, не модифицирует исходный массив = ['b', 'c', 'd']
// arrTest.slice(1, 3); //* отрезает кусок, результатом возращает 1й и 2й элементы = ['b', 'c']
// arrTest.slice(-2); //* возращает последние 2 элемента массива

// arrTest.splice(2); //* отрезает кусок, отрезает от 2го элемента и до конца. Возращает оставшиеся элементы в массиве = ['a', 'b']. В const вернёт удалённые элементы. = ['c', 'd'], модифицирует исходный массив !
// arrTest.splice(2, 2); //* отрезает с 2го элемента 2элемента. Возращает = ['a', 'b']. В константе вернёт удалённые элементы = ['c', 'd'], модифицирует исходный массив !
// arrTest.splice(-1); //* удалит последний элемент в массиве, модифицирует исходный массив !

// arrTest.reverse() //* перевернуть массив, модифицирует исходный массив !

// arrTest.concat(arrTest2); //* конкатенировать ,объединить 2 массива

// urlTest.split('/') //* преобразует строку в массив
// arrTest.join('-') //* преобразует массив в строку

//!----------------------------------------------------------------------------------------

//! Урок 40. Знакомство с массивами
// const role1 = 'Admin';
// const role2 = 'User';
// const role3 = 'SuperUser';

// const roles = ['Admin', 'User', 'SuperUser'];
// const userInfo = ['Аня', 25];
// console.log(roles);

// console.log(roles[0]);
// console.log(roles.at(0));
// console.log(roles[2]);

// Получить последний элемент массива
// console.log(roles.length);
// console.log(roles.at(-1));

// Условия в массиве / тернарные операторы в массиве
// const usersAges = [2040 - 2022, 10 > 0 ? 5 : 0];
// console.log(usersAges);

// const userNames = new Array('Вася', 'Петя', 'Катя');
// console.log(userNames);

// function square(el) {
//     return el * el;
// }
// console.log(square(5));

//! Урок 41. Управление элементами массива

// const users = ['Аня', 'Вика', 'Катя'];
// console.log(users);

//* Изменить элемент в массиве
// users[2] = 'Кристина';
// console.log(users);

//* Добавить элемент в массив
// users[3] = 'Никита';
// console.log(users);

//* Добавить новый элемент в конец массива
// users.push('Женя');
// console.log(users);

// const arrLength = users.push('Юля'); //* получить новую длину массива сразу при добавлении
// console.log(arrLength);

//* Добавить новый элемент в начало массива
// users.unshift('Вася');
// console.log(users);

// const arrLength2 = users.unshift('Вася 2');
// console.log(arrLength2);

//* Удалить последний элемент в массиве
// users.pop();
// console.log(users);

// const deletedEl = users.pop(); //* получить удалённый элемент
// console.log(deletedEl);

//* Удалить первый элемент массива
// users.shift();
// console.log(users);

// const deletedE2 = users.shift(); //* получить удалённый элемент
// console.log(deletedE2);

//! Урок 42. Поиск элемента
// Проверить наличие элемента в массиве

// const roles = ['user', 'admin', 'manager', 'manager'];

//* Найти значение в массиве
// const elIndex = roles.indexOf('manager');
// console.log(elIndex); // возращает индекс элемента

// const elIndex2 = roles.indexOf('superuser');
// console.log(elIndex2); // возращает -1 бо не нашло

// if (roles.indexOf('manager') >= 0) {
//     console.log('Доступ есть');
// }

//* Проверить наличие элемента в массиве

// console.log(roles.includes('admin')); // true
// console.log(roles.includes('superuser')); // false

// if (roles.includes('admin')) {
//     console.log('Доступ разрешен');
// } else {
//     console.log('Доступ запрещён');
// }

//! Урок 43. Slice, splice, concat, reverse

// const roles = ['user', 'admin', 'manager', 'manager'];

//* SLICE. Отрезать кусок массива - не изменяет исходный массив
// Пример 1
// roles.slice(2);
// console.log(roles);

// const res = roles.slice(2);
// console.log(res);

// Пример 2
// const res2 = roles.slice(1, 3);
// console.log(res2);

// Пример 3
// const res3 = roles.slice(-1); // Получить последний элемента массива / получить последние элементы массива
// console.log(res3);

// Пример 4
// const res4 = roles.slice(1, -1);
// console.log(res4);

//* SPLICE. Отрезать кусок массива - изменяет исходный массив
// Пример 1
// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// Пример 2
// const res6 = roles.splice(2, 2);
// console.log(res6);
// console.log(roles);

// Пример 3
// const res7 = roles.splice(-1);
// console.log(res7);
// console.log(roles);

//* REVERSE. Перевернуть массив - модифицирует исходный массив
// const res8 = roles.reverse();
// console.log(res8);
// console.log(roles);

//* Объединить, соединить, конкатенировать несколько массивов
// const newRoles = ['sysadmin', 'developer'];

// const res9 = roles.concat(newRoles);
// console.log(res9);
// console.log(roles);

//! Урок 44. Из строки в массив и обратно

// const roles = ['user', 'admin', 'manager', 'superadmin'];

// const url = '/auth/user/login';

//* Из строки в массив
// const res = url.split('/');
// console.log(res);

//* Из массива в строку
// console.log(roles.join('-'));

//! Урок 45. Упражнение - Обновление списка задач

// const tasks = ['Задача 1'];
//* Функция - Добавление элемента в массив, добавление элемента в конец массива
// function addNewTasks(newTask) {
//     tasks.push(newTask);
// }
// addNewTasks('задача 2');
// addNewTasks('задача 3');
// console.log(tasks);

//* Функция - Удаление задачи с массива по названию
// function deleteTasksByName(deletedTask) {
//     if (tasks.includes(deletedTask)) {
//         const deletedEl = tasks.indexOf(deletedTask);
//         tasks.splice(deletedEl, 1);
//         return tasks + ` - ${deletedTask} успешно удалена`;
//     } else {
//         return 'Задача не найдена';
//     }
// }

//* Функция - Перенос задачи в начало списка по названию
// function taskPriority(priorityTask) {
//     const taskIndex = tasks.indexOf(priorityTask);
//     if (taskIndex === -1) {
//         return 'Задача не найдена';
//     }
//     const taskName = tasks.splice(taskIndex, 1)[0];
//     tasks.unshift(taskName);
//     return tasks;
// }

// console.log(addNewTasks('Задача 6'));
// console.log(deleteTasksByName('Задача 6'));
// console.log(taskPriority('Задача 6'));

//* Решение автора
// DRY
// const tasks = ['Задача 1'];

// function add(task) {
//     tasks.push(task);
// }

// function remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     return tasks.splice(index, 1);
// }

// function prioritize(task) {
//     const result = remove(task);
//     if (!result) {
//         return;
//     }
//     tasks.unshift(result[0]);
// }

// add('Задача 2');
// add('Задача 3');
// console.log(tasks);
// remove('Задача 2');
// console.log(tasks);
// prioritize('Задача 3');
// console.log(tasks);

//! Урок 46. DRY

//! Урок 47. Деструктуризация

// const userData = ['Антон', 18, 'Киев'];

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

// console.log(userName, age, city);

// function getData() {
//     return ['Антон', 18, 'Киев'];
// }

// const userName1 = getData()[0]; // Достать данные с функции
// const age1 = getData()[1];
// const city1 = getData()[2];

// const [userName2, age2, city2] = getData();

// console.log(userName2, age2, city2);

//! Урок 48. Rest оператор

// const data = [1, 2, 3, 4, 5, 6];
// const [one, two] = data;
// console.log(one, two);

// const [one1, two2, ...others] = data; // Положить остаток элементов в переменную
// console.log(one1, two2, others);

//! Урок 49. Упражнение - Функция разбора URL
// парсер url

// const url = 'https://www.udemy.com/course/javascript-basic/learn/lecture/';

// function urlParser(url) {
//     const [protocol, _, host, ...others] = url.split('/');
//     if (protocol === 'https:' || protocol === 'http:') {
//         if (host.includes('.')) {
//             console.log(protocol, host, others);
//             console.log(`Протокол: ${protocol.split(':')[0]}`);
//             console.log(`Домен: ${host}`);
//             console.log(`Путь внутри сайта: /${others.join('/')}`);
//         }
//     }
// }
// urlParser('https://www.udemy.com/course/javascript-basic/learn/lecture/');

//! ------------------------------------------------------------------------------------------

//! МАССИВЫ

//* Объект в массиве
// const usersArr = [
//     { name: 'John', email: 'test@example.com' },
//     { name: 'user 2', email: 'test2@example.com' },
// ];

// console.log(usersArr[0].name);

//* Пример 1
const subscribers = [
    { name: 'user 1', profession: 'programmer' },
    { name: 'user 2', profession: 'footballer' },
    { name: 'user 3', profession: 'teacher' },
    { name: 'user 4', profession: 'teacher' },
    { name: 'user 5', profession: 'teacher' },
    { name: 'user 6', profession: 'teacher' },
    { name: 'user 7', profession: 'teacher' },
    { name: 'user 8', profession: 'teacher' },
    { name: 'user 9', profession: 'teacher' },
    { name: 'user 10', profession: 'teacher' },
];

// const haveYouGotNewSubscriber = true;

// //* push - добавить элемент в конец массива
// if (haveYouGotNewSubscriber) {
//     subscribers.push({ name: 'user 3', profession: 'teacher' }); // добавить элемент в конец массива
// }

// console.log(subscribers);

//* unshift - - добавить элемент в начало массива
// if (haveYouGotNewSubscriber) {
//     subscribers.unshift({ name: 'user 0', profession: 'qa' }); // добавить элемент в начало массива
// }
// console.log(subscribers);

//* pop - удалить последний элемент
// subscribers.pop();
// console.log(subscribers);

//* pop - удалить первый элемент
// subscribers.shift();
// console.log(subscribers);

//* splice - удалить элемент с № элемента и кол-во элементов
// Пример 1
// subscribers.splice(0, 1, 'new item'); // удалит с 0 элемента - 1 элемент и заменит его на строку new item
// console.log(subscribers);

// Пример 2
// subscribers.splice(5, 5); // удалит с 5го 5ть элементов
// console.log(subscribers);

// Пример 3
// subscribers.splice(7, 4, 'text'); //удалит с 7го 4 элемента, на 7й вставит текст "text"
// console.log(subscribers);

//! Упражнение - создать функцию поздравления если в массиве больше 10 записей вывести alert

// const subscribersTest = [
//     { name: 'user 1', profession: 'programmer' },
//     { name: 'user 2', profession: 'footballer' },
//     { name: 'user 3', profession: 'teacher' },
//     { name: 'user 4', profession: 'teacher' },
//     { name: 'user 5', profession: 'teacher' },
//     { name: 'user 6', profession: 'teacher' },
//     { name: 'user 7', profession: 'teacher' },
//     { name: 'user 8', profession: 'teacher' },
//     { name: 'user 9', profession: 'teacher' },
//     { name: 'user 10', profession: 'teacher' },
// ];

// function congratsIfMoreThen10(subscribers) {
//     if (subscribers.length >= 10) {
//         // проверить количество элементов в массиве
//         alert('Поздравляю! У вас больше чем 10 подписчиков');
//     }
// }
// congratsIfMoreThen10(subscribers);
