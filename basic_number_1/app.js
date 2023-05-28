// TODO: теория о JS

//! Что такое JavaScript

//* JavaScript - динамический, слабо типизируемый язык программирования, который компилируется во время исполнения

//* Динамический язык - язык программирования, который позволяет определять типы данных и осуществлять синтаксический анализ и компиляцию "на лету", на этапе выполнения программы

//* Слабо типизируемый = типы данных "выводятся" автоматически, и их нельзя задать и можно менять тип переменной на лету

//! Подключение к Git
//* 1. Генерируем SSH ключ. сmd -> ssh-keygen -> переходим в C:\Users\jekon\.ssh -> Копируем id_rsa.pub
//* 2. Идем в настройки Git -> добавляем этот ключ
//* 3. Открываем папку проекта и там уже открываем cmd и проводим дальнейшие опереции

// TODO: ОСНОВЫ. переменные / ареф операторы / операторы сравнения / типы данных

//! Урок 12. Переменные
// let a = 1
// console.log(a)
// a = 'test'
// console.log(a)

//! Урок 13. Арифметические операторы

// const width = 10
// const height = 5
// const space = width * height
// const newWidth = width - 4
// const newWidth2 = width + 4
// const division = newWidth / newWidth2
// const volume = 2 * 2 * 2
// const volume2 = 2 ** 3 // 2 * 2 * 2
// console.log(volume)

//* Строки
// const city = 'Днепр'
// const street = 'Гагарина'
// console.log(city + ', ' + street + ' ' + 5)

//! Урок 14. Операторы присваивания и сравнения

// let age = 18 + 5
// age += 2 // age = age + 2
// age -= 2 // age = age - 2
// age *= 2 // age = age * 2
// age /= 2 // age = age / 2

// age++ // age = age + 1
// age-- // age = age - 1

// console.log(age)

//* Операторы сравнения

// const vasia = 20
// console.log(age > vasia)
// console.log(age >= vasia)
// console.log(age < vasia)
// console.log(age <= vasia)
// console.log(age == vasia)
// console.log(age === vasia)
// console.log(age != vasia)

//! Урок 15. Порядок операторов

// const isSuited = 100 - 10 > 90 - 5
// console.log(isSuited)

// 100 - (12 приоритет) 10 > (10 приоритет) 90 - (12 приоритет) 5

// const a = (6 + 10) / 2
// console.log(a)

// let b
// let c
// c = b = 100 + 50
// console.log(c)
// console.log(b)

//! Урок 16. Типы данных

// let a = 5
// let b = 5.6
// console.log(typeof a)
// console.log(typeof b)
// a = 'строка'
// console.log(typeof a)
// e = 'text'
// console.log(typeof e)

// let isAdmin = false
// console.log(typeof isAdmin)

// let c
// console.log(c) // undefined
// c = 5
// console.log(c) // number

// let d = null
// console.log(typeof d)
// console.log(d)
// console.log(d == null)
// console.log(typeof (d == null))

//! Урок 17. УПРАЖНЕНИЕ. Расчет проекта
//* УПРАЖНЕНИЕ

// Ваша часовая ставка 80$ и вы готовы работать не более 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы.
// Сейчас понедельник.
// Вы должны уехать через 11 дней.
// Выведете в консоль:
// - Boolean переменную успеете ли вы взяться за работу
// - Сколько вы за неё попросите?

//? Мое решение - правильное
// const myCoast = 80
// const myWeakHours = 25
// const workHours = 40
// const myDayHours = 5
// const allowDaysForWork = 11

// const countWorkDays = workHours / myDayHours
// //console.log(countWorkDays)

// console.log(countWorkDays <= allowDaysForWork)
// const myWorkCoast = myCoast * workHours
// console.log(myWorkCoast)

//* Решение
// Дано с задачи
// const payRateUSD = 80
// const projectHours = 40
// const availableHours = (11 - 2) * 5

// console.log('Смогу ли я работать? ' + (availableHours > projectHours))
// console.log('Стоимость работ: ' + projectHours * payRateUSD + '$')

//! Урок 18. Шаблонные строки

// const projectName = 'Сайт магазина'
// const price = 2000
// const author = 'Василий Пупкин'
// //* Пример 1
// const template = author + ' заказал ' + projectName + ' по цене ' + price + ' $'
// console.log(template)

// const template2 = `${author} заказал ${projectName} по цене ${price} $`
// console.log(template2) // Шаблонная строка
// //* Пример 2
// const template3 = 'Проект \n' + 'Цена: ' + price + '$'
// console.log(template3)

// const template4 = `Проект
// Цена: ${price}$` // Шаблонная строка

// console.log(template4)

//! Урок 19. Преобразование типов

// const age = '18'
// console.log(Number(age) + 5)

// console.log(age - 3)
// console.log(age / 3)
// console.log(age * 3)

// const userName = 'Вася'
// console.log(Number(userName) + 5) //NaN
// console.log(typeof NaN)
// console.log(String(4) + 7)
// console.log(Boolean('') + 10)
// console.log(true + 2)

// const a = 2 + '10' // строка 210
// console.log(a - 10) // строка 200

//! Урок 20. False гз других типов

// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // true
// console.log(Boolean('')) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(Number('text'))) // = Number('text') = NaN. false

// * ТЕСТ
// 1. Какая запись вернёт boolean тип
// ОТВЕТ: a == 5
// 2. Какая запись вернёт строку `Привет Иван! Как дела?` если переменная firstName имеет значение 'Иван'
// ОТВЕТ:
// - 'Привет' + firstName + '! Как дела?'
// - `Привет ${firsName}! Как дела?`
// - `Привет ${firsName}` + '! Как дела?'
// 3. Что выведет число 5?
// ОТВЕТ: '10' - 5
// 4. Что выведется в консоль console.log(Number('10 - 1'))
// ОТВЕТ: NaN
// 5. Что выведется в консоль console.log(Boolean('5') + 9)
// ОТВЕТ: 10
// 6. Что выведется в консоль console.log(String('10') - 5 + Boolean('') + '1')
// ОТВЕТ: 51

// TODO: УПРАВЛЕНИЕ ПОТОКОМ. if else / switch / тернарные операторы

//! Урок 21. if else

// const money = 100
// const canBuy = money > 50 // true или false
// console.log(canBuy)

// if (money > 50) {
//   console.log('Может купить наш продукт')
// } else if (money > 5) {
//   console.log('Может купить mini продукт')
// } else {
//   console.log('Не хватает баланса')
// }

// const yuliaEarn = 0

// if (yuliaEarn >= 15000) {
//   console.log('Может купить шампунь и защиту и даже кроссовки')
// } else if (yuliaEarn >= 10000) {
//   console.log('Может купить кроссовки и защиту')
// } else {
//   console.log('ЖЕНЯ купит для Юлии шампунь, защиту и даже кроссовки')
// }

//! Урок 22. Упражнение - Размещение депозита
//* УПРАЖНЕНИЕ

// Вася положил 12000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
// Вывести в консоль, сможет ли он купить дом за 13500$ через 2 года после снятия вклада. И остаток после покупки.
//  Итого = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

//? Мое решение - правильно
// const moneyVasy = 12000
// const housePrice = 13500
// const monthPercent = 7
// const monthRate = monthPercent / 100

// const allMoneyVasy = moneyVasy * (1 + monthRate / 12) ** 24
// // console.log(allMoneyVasy)

// if (allMoneyVasy >= housePrice) {
//   console.log('Вася купил дом')
//   const balance = allMoneyVasy - housePrice
//   console.log('Остаток после покупки составляет ' + balance + ' $')
// } else {
//   const bankMoneyVasy = allMoneyVasy
//   console.log(
//     'Банк наебал Васю - Вася дом не купил. Вася заработал ' +
//       bankMoneyVasy +
//       ' $'
//   )
// }

//* Решение

// const deposit = 12000
// const rate = 0.07
// const depositLength = 24
// const houseCost = 13500

// const res = deposit * (1 + rate / 12) ** 24
// if (res > houseCost) {
//   console.log(`Мы накопили: ${res}  Можем купить. Остаток ${res - houseCost}`)
// } else {
//   console.log('Купить не сможем (((')
// }

//! Урок 22. Операторы равенства

// const secretNumber = '7';

// if (secretNumber == 7) {
//   console.log('Угадал не строго');
// }

// if (secretNumber === 7) {
//   console.log('Угадал строго');
// }

// const q = Number(prompt('Введите число'));
// if (q === 7) {
//   console.log('Угадал строго !!!');
// }

//! Урок 23. Switch

// const role = 'admin';

// if (role === 'manager') {
//   console.log('Менеджер');
// } else if (role === 'admin') {
//   console.log('Админ');
// } else if (role === 'seo') {
//   console.log('CEO');
// } else {
//   console.log('Мы тебя не знаем!');
// }

// switch (role) {
//   case 'manager': // role === 'manager'
//     console.log('Менеджер');
//     break;
//   case 'admin': // role === 'admin'
//     console.log('Админ');
//     break;
//   case 'seo': // role === 'CEO'
//     console.log('CEO');
//     break;
//   default:
//     console.log('Мы тебя не знаем!');
// }

// switch (role) {
//   case 'manager':
//   case 'admin':
//     console.log('Не руководитель');
//     break;
//   case 'seo':
//     console.log('Руководитель');
//     break;
//   default:
//     console.log('Мы тебя не знаем!');
// }

// switch (role) {
//   case 'manager': // role === 'manager'
//     console.log('Менеджер');
//   case 'admin':
//     console.log('Админ');
//     break;
//   case 'seo':
//     console.log('SEO');
//     break;
//   default:
//     console.log('Мы тебя не знаем');
// }

// const number = 1;

// switch (true) {
//   case number > 0: // true === num > 0
//     console.log('Положительный');
//     break;
//   case number < 0:
//     console.log('Отрицательный');
//     break;
//   default:
//     console.log('Ноль!');
// }

//! Урок 24. Тернарные операторы

// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 2000;

// let message;
// if (budget > bmwX3Price) {
//   message = 'BMW';
// } else {
//   message = 'Велосипед';
// }

// console.log(`Я хочу купить ${message}`);

// 10 > 0 ? console.log('Больше 0') : console.log('Не больше');

// if (10 > 0) {
//   console.log('Больше 0');
// } else {
//   console.log('Не больше');
// }

// const str = 10 > 0 ? 'Больше 0' : 'Не больше';
// console.log(str);

// let message;
// if (budget > bmwX3Price) {
//   message = 'BMW';
// } else {
//   message = 'Велосипед';
// }

// console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

// let message =
//   budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

// console.log(`Я хочу купить ${message}`);

//! Урок 26. Упражнение - Проверка работы
//* УПРАЖНЕНИЕ
// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?" Если ответ верен выведите в консоль "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".

//? Мое решение - Все 3 правильные !

// let message = prompt('Сколько будет 7 + или - 15?');
//* Вариант 1
// if (message == 22) {
//   console.log('Успех');
// } else if (message == -8) {
//   console.log('Успех');
// } else if (message == 'Я не робот') {
//   console.log('Успех');
// } else {
//   console.log('Вы робот!');
// }
//* Вариант 2
// switch (message) {
//   case '22':
//     console.log('Успех');
//     break;
//   case '-8':
//     console.log('Успех');
//     break;
//   case 'Я не робот':
//     console.log('Успех');
//     break;
//   default:
//     console.log('Вы робот!');
// }
//* Вариант 3
// let finalMassage =
//   message == 22
//     ? 'Успех'
//     : message == -8
//     ? 'Успех'
//     : message == 'Я не робот'
//     ? 'Успех'
//     : 'Вы робот';
// console.log(finalMassage);

//* Решение

// const res = prompt('Сколько будет 7 + или - 15?');
//* Вариант 1
// switch (true) {
//   case res === 'Я не робот':
//   case Number(res) === 22:
//   case Number(res) === -8:
//     console.log('Успех');
//     break;
//   default:
//     console.log('Вы робот!');
// }
//* Вариант 2
// if (res === 'Я не робот') {
//   console.log('Успех');
// } else {
//   const resNum = Number(res);
//   switch (resNum) {
//     case 22:
//     case -8:
//       console.log('Успех');
//       break;
//     default:
//       console.log('Вы робот!');
//   }
// }

//* Тест
// 1 Что выведется в консоль?
// const a = 5;
// if (a > 0) {
//     console.log('Yes!');
// } else if(a == 5) {
//     console.log('No!');
// }
//ОТВЕТ: YES

// 2 Что выведется в консоль?
// const a = '5';
// if (a == 5) {
//     console.log('equal');
// }
// if (a === 5) {
//     console.log('strict equal');
// }
//ОТВЕТ: equal

// 3 Что выведется в консоль?
// const a = 3;
// switch(a) {
//     case 5:
//         console.log('1');
//         break;
//     case 4:
//         console.log('2');
//         break;
//     default:
//         console.log('3');
//     case 2:
//         console.log('4')
// }
//ОТВЕТ: 3 и 4

// 4 Что выведется в консоль?
// const a = 5;
// console.log(a > 6 ? a < 3 : a > 5)
//ОТВЕТ: false

// 5 Что выведется в консоль?
// const a = 3
// console.log(a < 6 ? a > 4 ? 'Yes' : a <= 4 ? 'No' : '!!!' : '???')
//ОТВЕТ: No

// 6 Что выведется в консоль?
// const a = 5;
// switch(a) {
//     case '5':
//         console.log('1');
//     case 5:
//         console.log('2');
//     case 4:
//         console.log('2');
// }
//ОТВЕТ: 2 и 2

// TODO: БУЛЕВАЯ ЛОГИКА

//! Урок 27. Булевая логика

// таблицы

//! Урок 28. Логические операторы

// const isAdmin = true;
// const canWrite = true;
// // && и
// // || или
// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный файл ${isAdmin || canWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`); // не админ

// const isEdited = true;
// const isSuperAdmin = true;

// console.log(
//     `Системный файл с редактированием ${isAdmin && canWrite && !isAdmin}`
// );

// console.log(
//     `Системный файл с редактированием ${
//         isAdmin && canWrite && (!isAdmin || isSuperAdmin)
//     }`
// );

// const a = -8;
// if (a === -8 || a === 22) {
//     console.log('Super');
// }

//! Урок 29. Операторы с другими типами

// console.log('Вася' || 'Олег'); // Вася
// console.log(false || 'Олег'); // Олег
// console.log('Вася' || 'false'); // Вася
// console.log(false || false); // false

// console.log('Вася' && 'Олег'); // Олег
// console.log(false && 'Олег'); // false
// console.log('Вася' && false); // false
// console.log(false && false); // false

// let a;
// const userName = a || 'Петя';
// console.log(userName);

// const isAdmin = false;
// const fileName = isAdmin && 'file.mp4';
// console.log(isAdmin);

//! Урок 30. Оператор нулевого слияния
//* ??

// let userName = 'Вася';
// let defaultName = 'Default Name';
// console.log(userName || defaultName);

// let userName = '';
// console.log(userName || 'Default Username');
// console.log(userName ?? 'Default Username'); // выводит пустую строку

// let age = 0;
// console.log(age || 'Default Username'); // Default Username
// console.log(age ?? 'Default Username'); // 0

//! Урок 31. Упражнение - Проверка прав
//* УПРАЖНЕНИЕ
// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
// - его баланс больше 1000 (balance) / или число бонусов больше 100 (bonusBalance)
// - он не забанен (isBanned)
// - игра не куплена (isExist)
// - игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат

//? Мое решение - правильное

// const balance = 1000;
// const bonusBalance = 100;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;

// if (
//     (balance >= 1000 || bonusBalance >= 100) &&
//     !isBanned &&
//     !isExist &&
//     isSelling
// ) {
//     console.log('Вы можете купить игру');
// } else {
//     console.log('Вы НЕ можете купить игру');
// }

//* Решение

// const canBuy =
//     (balance >= 1000 || bonusBalance >= 100) &&
//     !isBanned &&
//     !isExist &&
//     isSelling;

// console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);

//*ТЕСТ - Булевая логика

// Вопрос 1:
// Что выведется в консоль?
// console.log(true && false || false)
// ОТВЕТ: false

// Вопрос 2:
// Что выведется в консоль?
// console.log(!(true && false) && !(false && true))
// ОТВЕТ: true

// Вопрос 3:
// Что выведется в консоль?
// console.log(!'' && 'Yes' || !('No' && 'false'))
// ОТВЕТ: Yes

// Вопрос 4:
// Что выведется в консоль?
// console.log(!'' && true && 'Yes' && Boolean('true') && 'PS')
// ОТВЕТ: PS

// Вопрос 5:
// Что выведется в консоль?
// console.log('' ?? 'Yes')
// ОТВЕТ: пусто

// Вопрос 6:
// Что выведется в консоль?
// console.log(true && 'd' ?? '')
// ОТВЕТ: ошибка

// TODO: ФУНКЦИИ

//! Урок 32. Введение в функции

// function logName() {
//     console.log(`Моё имя Антон`);
// }

// const a = logName();
// console.log(typeof a);

// function logName(name, surName) {
//     console.log(`Моё имя ${name} ${surName}`);
// }

// logName('Евгений', 'Тарасенко');

// function countDepositSum(depositInUSD, month, rate) {
//     const sum = depositInUSD * (1 + rate / 12) ** month;
//     return sum;
// }

// function countDepositSum(depositInUSD, month, rate) {
//     return (sum = depositInUSD * (1 + rate / 12) ** month);
// }

// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1);
// const example2 = countDepositSum(1000, 48, 0.1);
// console.log(example2);
// console.log(countDepositSum(1000, 48, 0.1));

//! Урок 33. Анонимные функции

// function powerOfTwi(num) {
//     return num * num;
// }

// console.log(powerOfTwi(5));

// const poft = function (num) {
//     return num * num;
// };

// console.log(poft(6));

//! Урок 34. Стрелочные функции

// function powerOfTwo(num) {
//     console.log(num);
//     return num * num;
// }
// console.log(powerOfTwo(5));

// const poft = (num) => {
//     console.log(num);
//     return num * num;
// };
// console.log(poft(6));

//! Урок 35. Упражнение - Упрощение функции
//* Упражнение
// Переписать функции в стрелочную

// function toPower(num, power) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(5, 5));

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(5, 5));

//! Урок 36. Параметры по умолчанию

// function toPower(num = 2, power = 2) {
//     const res = num ** power;
//     return res;
// }

// console.log(toPower(2, 3));
// console.log(toPower(2));

//! Урок 37. Условия в функциях

// function canAccessWebsite(age) {
//     if (age < 18) {
//         return 'No';
//     }
//     return 'Yes';
// }
// console.log(canAccessWebsite(20));

// const canAccessWebsite2 = (age) => (age < 18 ? 'No' : 'Yes');
// console.log(canAccessWebsite(20));

//! Урок 38. Функции в функциях

// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) {
//     return present * KG_IN_USD;
// }

// function calculateKm(distance) {
//     return distance * KM_IN_USD;
// }

// function getExchangePrice(present1, present2, distance) {
//     const price1 = calculateW(present1);
//     const price2 = calculateW(present2);
//     const distancePrice = calculateKm(distance);
//     return price1 + price2 + distancePrice;
// }
// console.log(getExchangePrice(1, 2, 10));

//! Урок 39. Упражнение - Кредит на MacBook
//* Упражнение
// Пользователь:
// - возраст
// - наличие работы
// - деньги
// Нужно проверить может ли он купить новый MacBook за 20000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24 лет и он имеет работу, 100$ если ему просто больше 24 лет и 0 в ином случае.
// Напишите функцию, которая принимает данные пользователя и товара и возращает true или false.

//? Мое решение - правильно
// function credit(age, haveWork) {
//     if (age >= 24 && haveWork == true) {
//         return 500;
//     } else if (age >= 24) {
//         return 100;
//     }
//     return 0;
// }
// // console.log('Мой кредит составляет: ', creditSum);

// function canBuy(price, myMoney, age, haveWork) {
//     const creditSum = credit(age, haveWork);
//     const money = myMoney + creditSum;
//     if (money >= price) {
//         console.log('Вы можете купить MacBook, ваша сумма: ' + money + '$');
//     } else {
//         console.log('Вы НЕ можете купить MacBook, ваша сумма: ' + money + '$');
//     }
// }
// canBuy(20000, 19900, 24, true);

//* Решение
// function computeCredit(age, hasJob = false) {
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
// console.log(canBuy(2000, 25, 1900));

//* ТЕСТ

// TODO: МАССИВЫ

//* unshift() - добавляет элемент в начало массива
//* push() - добавляет элемент в конец массива
//* shift() - удаляет первый элемент массива
//* pop() - удаляет последний элемент в массиве

//* includes() - ищет совпадение - возращает true / false
//* indexOf() - ищет совпадение - возращает номер элемента в массиве

//* slice() - не модифицирует изначальный массив. Отрезает кусок.
//* Например: slice(2) - выберет с 2 элемента массива и до конца - это всё ОТРЕЗАЕТ. А в результате вернёт 0 и 1 элементы массива
//* Например: slice(1, 3) - выберет с 1 по 2й включительно элементы массива - это всё ОТРЕЗАЕТ. А в результате вернёт 0, 3 и дальше элементы массива

//* splice() - модифицирует изначальный массив. Отрезает кусок.
//* Например: splice(2) - выберет с 2 элемента массива и до конца - это всё ОТРЕЗАЕТ. А в результате вернёт 0 и 1 элементы массива
//* splice(1, 2) - выберет с 1го и 2штуки следующих элементов массива - их ОТРЕЗАЕТ. А в результате вернёт 0, 4 и дальше элементы массива

//* split() - из строки в массив, разбиваю по определённому символу
//* Например split('/') - создат массив, розбив данные по /
//* join() - из массива в строку, объедения по определённому символу
//* Например join('-') - создат строку данные соединит через -

//* concat() - обеденяет 2 массива вместе

//* reverse() - переворачивает + модифицирует исходный массив

//* ...name - в массиве выберет всё оставшиеся

//! Урок 40. Знакомство с массивами

// const role1 = 'admin';
// const role2 = 'user';
// const role3 = 'superUser';

// const roles = ['admin', 'user', 'superUser'];
// const userInfo = ['Anna', 25];
// console.log(roles);
// console.log(roles[0]); // admin
// console.log(roles[1]); // user
// console.log(roles[2]); // superUser
// console.log(roles[3]); // undefined

// console.log(roles.length); // 3
// console.log(roles[roles.length - 1]); // superUser

// console.log(roles.at(0)); // admin
// console.log(roles.at(-1)); // superUser

// const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
// console.log(usersAge);

// const userNames = new Array('Вася', 'Петя', 'Катя');
// console.log(userNames);

// // function square(el) {
// //     return el * el;
// // }
// // console.log(square(5));

//! Урок 41. Управление элементами массива

// const users = ['Anna', 'Vika', 'Katya'];
// users[2] = 'Kristina';
// console.log(users);
// users[3] = 'Nikita';
// console.log(users);

// const arrLength = users.push('Nikita'); // push - добавляет в конец массива
// console.log(arrLength); // в кностанте push - возращает длину массива после удаления

// users.unshift('Vasy'); // unshift - добавляет в начало массива
// console.log(users);

// const el = users.pop(); // pop - удаляет последний элемент в массиве
// console.log(el); // в константе pop - возращает удалённый элемент Nikita
// console.log(users);

// const el2 = users.shift(users); // shift - удаляет первый элемент массива
// console.log(el2); // в константе shift - возращает удалённый элемент массива
// console.log(users);

//! Урок 42. Поиск элемента

// const roles = ['user', 'admin', 'manager', 'admin'];

// console.log(roles.indexOf('admin')); // indexOf ищет совпадение
// console.log(roles.indexOf('superAdmin'));

// if (roles.indexOf('admin') >= 0) {
//     console.log('Доступ есть');
// }

// console.log(roles.includes('admin'));
// console.log(roles.includes('superAdmin'));

// if (roles.includes('admin')) {
//     console.log('Доступ есть');
// }

//! Урок 43. Slice, splice, concat, reverse

// const roles = ['user', 'admin', 'manager', 'superuser'];

// const res = roles.slice(2); // не модифицирует массив. slice отрезает кусок
// console.log(roles);
// console.log(res);

// const res2 = roles.slice(1, 3); // не модифицирует массив. slice отрезает кусок
// console.log(res2);

// const res3 = roles.slice(-1); // берёт последнее значение в массиве
// const res4 = roles[roles.length - 1];
// console.log(res3);
// console.log(res4);

// const res5 = roles.slice(1, 3); // берёт последнее значение в массиве
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2); // splice модифицирует изначальный массив
// console.log(res6);
// console.log(roles);

// const res6 = roles.splice(1, 2);
// console.log(res6);
// console.log(roles);

// const res7 = roles.splice(-1);
// console.log(res7);

// const res8 = roles.reverse(); // переворачивает + модифицирует исходный массив
// console.log(res8);
// console.log(roles);

// const newRoles = ['sysAdmin', 'developer'];

// const res9 = roles.concat(newRoles); // объеденяет 2 массива
// console.log(res9);
// console.log(res9.length);

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// b = a.splice(1, 2);
// console.log(a);

//! Урок 44. Из строки в массив и обратно

// const roles = ['user', 'admin', 'manager', 'superuser'];
// // строка в массив
// const url = '/auth/user/login';
// const res = url.split('/'); // split - разбивает по символу и складывает в массив
// console.log(res);
// // массив в строку
// console.log(roles.join('-')); // join обеденяет через символ

//! Урок 45. Упражнение - Обновление списка задач
//* Упражнение
// Дан список задач
// const tasks = ['Задача 1']
// Сделать функции:
// - добавление задачи в конец
// - удаление задачи по названию
// - перенос задачи в начало списка по названию
// Всегда меняем исходный массив

//? Мое решение - правильное

// const tasks = ['Задача 1'];
// Функция добавления задачи в конец
// function newTaskToEnd(task) {
//     tasks.push(task);
// }
// console.log(newTaskToEnd('task2'));
// console.log(newTaskToEnd('task3'));
// console.log(tasks);
// Функция удаления задачи
// function deleteTaskByName(name) {
//     if (tasks.includes(name)) {
//         tasks.splice(-1);
//         console.log(tasks);
//     } else {
//         console.log('Задачи для удаления нету!');
//     }
// }
// deleteTaskByName('task2');
// Перенос задачи в начало списка по названию
// function taskToStart2(taskName2) {
//     const index = tasks.indexOf(taskName2);
//     const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }
// taskToStart2('task3');
// console.log(tasks);

//* Решение
// const tasks = ['Задача 1'];

// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     tasks.splice(index, 1);
// }

// function Prioritize(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }

// Add('Задача 2');
// Add('Задача 3');
// console.log(tasks);

// Remove('Задача 2');
// console.log(tasks);

// Prioritize('Задача 3');
// console.log(tasks);

//! Урок 46. Принцип DRY
// Не повторяйся !

// const tasks = ['Задача 1'];

// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     return tasks.splice(index, 1);
// }

// function Prioritize(task) {
//     const result = Remove(task);
//     if (!result) {
//         return;
//     }
//     tasks.unshift(result[0]);
// }

// Add('Задача 2');
// Add('Задача 3');
// console.log(tasks);

// Remove('Задача 2');
// console.log(tasks);

// Prioritize('Задача 3');
// console.log(tasks);

//! Урок 47. Деструктуризация

// const userData = ['Антон', 18, 'Москва'];

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];
// console.log(userName, age, city);

// function getData() {
//     return ['Антон', 18, 'Москва'];
// }
// // const userName2 = getData()[0];
// // const age2 = getData()[1];
// // const city2 = getData()[2];
// // console.log(userName2, age2, city2);

// const [userName2, age2, city2] = getData();
// console.log(userName2, age2, city2);

// const [userName3, _, city3] = getData();
// console.log(userName3, city3);

//! Урок 48. Rest оператор

// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ...other] = data;
// console.log(one, two, other);

//! Урок 49. Упражнение - Функция разбора URL

// Дан произвольный url -
// 'https://www.udemy.com/course/javascript-basic/learn/lecture/33621430#overview'
// Нужно сделать функцию, которая выводит в консоль:
// - протокол https
// - доменное имя
// - путь внутри сайта

// const url =
'https://www.udemy.com/course/javascript-basic/learn/lecture/33621430#overview';

// const url2 =
'www.udemy.com/course/javascript-basic/learn/lecture/33621430#overview';

// function getUrlParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     if (protocol === 'https:' || protocol === 'http:') {
//         if (!host.includes('.')) {
//             return;
//         }
//         console.log(`Протокол: ${protocol.split(':')[0]}`);
//         console.log(`Доменное имя: ${host}`);
//         console.log(`Путь внутри сайта:  /${path.join('/')}`);
//     }
// }
// getUrlParts(url);

// TODO: Циклы
//! Урок 50. Цикл for

// console.log('Наш баланс 1');

// for (let i = 1; i < 10; i = i + 1) {
//     console.log(`Наш баланс ${i}$`);
// }

//! Урок 51. Break и continue

// const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// console.log(tasks[0]);

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         continue;
//     }
//     console.log(tasks[i]);
// }

// console.log('--------');
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         break;
//     }
//     console.log(tasks[i]);
// }

//! Урок 52. Упражнение - Цикл в обратном порядке
//*Упражнение
// Задача вывести в консоль строку "Я люблю JS !" из массива, проходя циклом в обратном порядке.

// const arr = ['!', 'JS', 'люблю', 'Я'];
// const resultArray = [];

// for (let i = arr.length - 1; i >= 0; i = i - 1) {
//     resultArray.push(arr[i]);
// }
// console.log(resultArray.join(' '));

// console.log(arr.reverse().join(' '));

//! Урок 53. Цикл в цикле

// for (let i = 1; i < 5; i++) {
//     console.log(`Цикл 1 - ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Цикл 2 - ${j}`);
//     }
// }

// const tasks = [
//     [1, 'Задача1'],
//     [2, 'Задача 2'],
// ];

// for (let a = 0; a < tasks.length; a++) {
//     for (let b = 0; b < tasks[a].length; b++) {
//         console.log(tasks[a][b]);
//     }
// }

//! Урок 54. Цикл while

// for (let i = 1; i <= 5; i++) {
//     console.log('Вывод - ' + i);
// }

// let i = 1;
// while (i <= 5) {
//     console.log('Вывод -  ' + i);
//     i++;
// }

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

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 0);

//! Урок 55. Цикл for of и for in

// const arr = [1, 4, 8, 7, 'text'];

// for (let a = 0; a < arr.length; a++) {
//     console.log(arr[a]);
// }

// console.log('------');

//* for of - итерируется по значениям элементов массива
// for (let element of arr) {
//     console.log(element);
// }

// //* for in - итерируется по индексам в массиве
// for (let index in arr) {
//     console.log(index);
// }

//! Урок 56. Упражнение - Расчёт итогового баланса
//* Упражнение
// Есть выгрузка операций пользователя. А так же начальный баланс в 100$. Необходимо сделать функции расчёта:
// - итогового баланса
// - наличия отрицательного баланса - если есть - вывести false
// - расчёт среднего расхода и среднего дохода

// const operation = [1000, -700, 300, -500, 10000];
// const startingBalance = 100;
// // итогового баланса
// function getBalance(arrayOfOperations, initialBalance) {
//     let balance = initialBalance;
//     for (const element of arrayOfOperations) {
//         balance = balance + element;
//     }
//     return balance;
// }

// console.log(getBalance(operation, startingBalance));
// // наличия отрицательного баланса - если есть - вывести false
// function checkOperations(arrayOfOperations, initialBalance) {
//     let balance = initialBalance;
//     let isOk = true;
//     for (const element of arrayOfOperations) {
//         balance = balance + element;
//         if (balance < 0) {
//             isOk = false;
//             break;
//         }
//     }
//     return isOk;
// }
// console.log(checkOperations(operation, startingBalance));
// // расчёт среднего расхода и среднего дохода
// function averageOperations(arrayOfOperations) {
//     let positiveCount = 0;
//     let positiveSum = 0;
//     let negativeCount = 0;
//     let negativeSum = 0;
//     for (const element of arrayOfOperations) {
//         if (element > 0) {
//             positiveCount++;
//             positiveSum += element;
//         }
//         if (element < 0) {
//             negativeCount++;
//             negativeSum += element;
//         }
//     }
//     return [positiveSum / positiveCount, negativeSum / negativeCount];
// }

// console.log(averageOperations(operation, startingBalance));

// TODO: Функции высшего порядка
//! Урок 57. Функции высшего порядка

//! Урок 58. Функция callback

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function power(a, b) {
//     return a ** b;
// }

// //* Функция высшего порядка

// function calculate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }

// let res = calculate(3, 5, add);
// console.log(res);
// res = calculate(3, 5, subtract);
// console.log(res);
// res = calculate(3, 5, power);
// console.log(res);

//! Урок 59. Возврат функции

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

// power(5)(4);
// console.log(power(5)(4));

//! Урок 60 - Упражнение - стрелочные функции
//* Упражнение

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }
// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));

// const power = (pow) => (num) => num ** pow;

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));
// power(5)(4);
// console.log(power(5)(4));

// TODO: Итерации в массивах
//! Урок 61. forEach

// const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//     console.log(`Раунд ${i + 1}: ${el}`);
// }

// score.forEach((scoreEl, i) => {
//     console.log(`Раунд ${i + 1}: ${scoreEl}`);
// });
// (5, 0) => { ... }
// (10, 1) => { ... }

//! Урок 62. map

// const transactionInUSD = [10, -7, 50, -10, 100];

// const transactionInRUB = [];
// for (const transaction of transactionInUSD) {
//     transactionInRUB.push(transaction * 60);
// }
// console.log(transactionInUSD);
// console.log(transactionInRUB);

// const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
//     return transaction * 60;
// });
// console.log(transactionInUSD);
// console.log(transactionInRUB2);

//! Урок 63. filter

// const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }
// console.log(positiveOperations);

// const positiveOperations = operations.filter((operation) => {
//     return operation > 0;
// });
// console.log(positiveOperations);

// const negativeOperations = operations.filter((negativeOp) => {
//     return negativeOp < 0;
// });
// console.log(negativeOperations);

// const positiveRUBOperations = operations
//     .filter((operation) => {
//         return operation > 0;
//     })
//     .map((operation) => operation * 60);
// console.log(positiveRUBOperations);

//! Урок 64. Упражнение - вывод изменений цен

// const prices = [
//     [100, 200],
//     [120, 100],
//     [200, 350],
// ];

// const result = prices
//     .map((product) => product[1] - product[0])
//     .filter((price) => price > 0);
// console.log(result);

//! Урок 65. reduce
//* позволяет свести массив к одному значению
//* Пример
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); // 15
//
// const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// }
// console.log(balance);

// const finalBalance = operations.reduce((acc, operation, i) => {
//     console.log(`Iteration: ${i}, acc: ${acc}, operation ${operation}`);
//     return (acc += operation);
// }, 0);
// console.log(finalBalance);

// const minElement = operations.reduce((acc, operation) => {
//     if (operation > acc) {
//         return acc;
//     } else {
//         return operation;
//     }
// }, 0);
// console.log(minElement);

//! Урок 66. Упражнение - среднее значение
//* Упражнение
// Найти среднее значение последовательность чисел с помощью reduce

// const arr = [1, 4, 4, 10];
// const sum = arr.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum / arr.length);

// //* Решение
// const arr = [1, 4, 4, 10];
// const avg = arr.reduce((acc, el, i) => {
//     if (i != arr.length - 1) {
//         return acc + el;
//     } else {
//         return (acc + el) / arr.length;
//     }
// }, 0);
// console.log(avg);

//! Урок 67. find и findindex

// const arr = [2, 4, 4, 10];

// let elGT5;
// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el;
//         break;
//     }
// }
// console.log(elGT5);

// elGT5 = arr.find((el) => el > 5);
// console.log(elGT5);

// elGT5Index = arr.findIndex((el) => el > 5);
// console.log(elGT5Index);

//! Урок 68. Упражнение - some

// const arr = [2, 4, 4, 10, 20];

// function some(array, element) {
//     const res = array.find((el) => el === element);
//     return res == undefined ? false : true;
// }
// console.log(some(arr, 0));

// console.log(arr.some((el) => el === 0));

//! Урок 69. float и flatMap

// const prices = [
//     [2, 4],
//     [3, 4],
//     [10, [20, 50]],
// ];

// const res = prices.flat(2);
// const res2 = prices.flatMap((el) => el.concat([1]));
// console.log(res);
// console.log(res2);

//! Урок 70. sort

// const users = ['Вася', 'Маша', 'Катя', 'Аня'];
// console.log(users);
// users.sort();
// console.log(users);

// const operation = [100, -300, -100, 50, 480];
// console.log(operation);

// < 0 - a, b - сохраняем порядок
// > 0 - b, a - меняем порядок
// operation.sort((a, b) => a - b); //* отсортирует от меньшего к большему числу
// console.log(operation);

// operation.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
// });
// console.log(operation);

// operation.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
// });
// console.log(operation);

//! Урок 71. Быстрое создание массивов

// const arr = [1, 2, 3, 4, 5];

// console.log(new Array(1, 2, 3, 4, 5));
// const arr2 = new Array(5);
// console.log(arr2);
// arr2.fill(1, 0, 3);
// arr2.fill(2, 3, 5);
// console.log(arr2);

// const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
// console.log(arr3);

//* ТЕСТ
/*
//* Тест 1
let arr = [1, 2];
let agg = 0;
arr.forEach((el, i) => agg += el + i );
console.log(agg);

Данный код создает массив arr с двумя элементами [1, 2] и переменную agg со значением 0. Затем, метод forEach() вызывается на массиве arr. В качестве аргумента методу передается функция обратного вызова (el, i) => agg += el + i, которая принимает два аргумента: текущий элемент массива el и его индекс i.

В теле функции вычисляется сумма элемента массива el и его индекса i, и результат добавляется к переменной agg. В первой итерации функция вызывается с аргументами el = 1 и i = 0, поэтому значение agg становится равным 1 + 0 + 0 = 1. Во второй итерации функция вызывается с аргументами el = 2 и i = 1, и значение agg увеличивается на 2 + 1 + 1 = 4.

После выполнения метода forEach() значение переменной agg равно 4. Это значение выводится в консоль с помощью метода console.log(). Таким образом, на экране должно быть напечатано число 4.

//* Тест 2
let arr = [1, 2];
let res = arr.map(e => e * 2).filter(e => e > 3);
console.log(res);

Данный код создает массив arr с двумя элементами [1, 2]. Затем, метод map() вызывается на массиве arr. Метод map() создает новый массив, в котором каждый элемент является результатом применения указанной функции к каждому элементу исходного массива.

В данном случае, передаваемая функция (e => e * 2) умножает каждый элемент массива на 2. Таким образом, метод map() возвращает новый массив [2, 4].

Далее, на полученном массиве вызывается метод filter(), который создает новый массив, содержащий только те элементы исходного массива, для которых переданная функция вернула true. В данном случае, передаваемая функция (e => e > 3) возвращает true только для элемента 4, так как только он больше 3. Таким образом, метод filter() возвращает новый массив [4].

Наконец, результат выполнения метода filter() записывается в переменную res, а значение переменной res выводится в консоль с помощью метода console.log(). В результате на экране будет напечатан массив [4].

Таким образом, данный код можно интерпретировать как "возьми массив [1, 2], умножь каждый его элемент на 2, а затем верни только те элементы, которые больше 3, и запиши их в новый массив res".

//* Тест 3
let arr = [1, 2, 3];
let res = arr.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res);

Данный код выполняет следующие действия:

Создается массив arr со значениями [1, 2, 3].
На этом массиве вызывается метод map(), который применяет функцию (e => [e * 2]) к каждому элементу массива. В результате каждый элемент e умножается на 2 и записывается в новый вложенный массив, который затем становится элементом нового массива. Таким образом, метод map() возвращает новый массив [ [2], [4], [6] ].
На этом новом массиве вызывается метод flat(), который преобразует вложенные массивы в один плоский массив. В результате метод flat() возвращает новый массив [2, 4, 6].
На полученном массиве вызывается метод reduce(), который принимает два аргумента: функцию (acc, el) => acc -= el и начальное значение аккумулятора 0.
На каждой итерации функция acc -= el вычитает текущий элемент массива el из аккумулятора acc. Таким образом, на первой итерации аккумулятор равен 0, текущий элемент равен 2, и результатом функции будет -2. На второй итерации аккумулятор равен -2, текущий элемент равен 4, и результатом функции будет -6. На третьей итерации аккумулятор равен -6, текущий элемент равен 6, и результатом функции будет -12.

После последней итерации, метод reduce() возвращает значение аккумулятора -12, которое записывается в переменную res. Таким образом, console.log(res) выведет в консоль значение -12.
*/

// TODO: Работа со строками

//! Урок 73. Работа со строками

// const userName = 'Вася Пупкин';

//* Найти букву
// console.log(userName[0]); // буква В
// console.log(userName[1]); // буква а

// console.log(userName.charAt(0)); // буква В
// console.log(userName.charAt(1)); // буква а

//* Узнать длину строки
// console.log(userName.length); // 11

//* Искать по строке
// Ищет совпадение с начала строки
// console.log(userName.indexOf('В')); // 0
// console.log(userName.indexOf('П')); // 5

// console.log(userName.indexOf('Женя')); // -1 - нету такого совпадения

//Ищет совпадение с конца строки
// console.log(userName.indexOf('н')); // 10

//* Искать наличие - true / false
// console.log(userName.includes('Вася')); // true
// console.log(userName.includes('Женя')); // false

//* Проверить начало строки и конец строки

// console.log(userName.startsWith('В')); // true
// console.log(userName.startsWith('Вася')); // true

// console.log(userName.endsWith('н')); // true
// console.log(userName.endsWith('Пупкин')); // true

//* Взять части строки
// console.log(userName.slice(5)); // Пупкин - первые 5 индексов обрезает
// console.log(userName.slice(5, 8)); // Пуп - выбирает с 5го по 7й включительно

//! Урок 74. Упражнение - выделение имени
// Вытащить в переменные имя и фамилию

// const userName = 'Вася aka Terminator Perdinator Пупкин';
//* Достать имя со строки
// const firstName = userName.slice(0, userName.indexOf(' '));
// console.log(firstName); // Вася
//* Достать фамилию со строки
// const lastName = userName.slice(userName.lastIndexOf(' ') + 1, userName.length);
// console.log(lastName); // Пупкин

//! Урок 75. Преобразование строки

// const str = 'Вася Пупкин';

//* Преобразовать в нижний регистр
// console.log(str.toLowerCase()); // вася пупкин

//* Преобразовать в верхний регистр
// console.log(str.toUpperCase()); // ВАСЯ ПУПКИН

//* Заменить что-то в строке
// console.log(str.replace('В', 'Ф')); // Фася Пупкин
// console.log(str.replace('П', 'Д')); // Вася Дупкин

//* Заменить все вхождения
// const str2 = 'Вася Пупкина';

// console.log(str2.replaceAll('а', 'и')); // Вися Пупкини  !! не во всех браузерах поддерживается

//* Очистить лишние пробелы со строки
// const str3 = '  Вася Пупкина   \n new Text   ';

// console.log(str3.trim()); // удаляет лишние пробелы
// console.log(str3.trimStart()); // удаляет лишние пробелы с начала строки
// console.log(str3.trimEnd()); // удаляет лишние пробелы с конца строки

//! Урок 76. Упражнение - проверка номера
// Проверить является ли этот номером телефона России
// Верный номера
// const num1 = '89103235356';
// const num2 = '+79103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = '   +7(910) 323-53-56   ';
// не верные
// const num1Error = '89103235';
// const num2Error = '+7d910d323-53-56';
// const num3Error = '9+7103235356';
// const num4Error = '89103g35356';

// function isPhoneNumber(num) {
//     num = num.trim(); // удаляем все пробелы
//     num = num.replace('+7', '8'); // заменяем +7 на 8
//     if (!num.startsWith(8)) {
//         // проверяем что начинается на 8
//         return false;
//     }
//     num = num.replaceAll('(', ''); // удаляем лишние символы
//     num = num.replaceAll(')', '');
//     num = num.replaceAll(' ', '');
//     num = num.replaceAll('-', '');
//     if (num.length != 11) {
//         // проверяем на длину
//         return false;
//     }
//     let onlyNumber = true;
//     for (const char of num) {
//         // проверяем что все элементы являются цифрами
//         if (isNaN(Number(char))) {
//             onlyNumber = false;
//             break;
//         }
//     }
//     return onlyNumber;
// }

// console.log(isPhoneNumber(num1));
// console.log(isPhoneNumber(num2));
// console.log(isPhoneNumber(num3));
// console.log(isPhoneNumber(num4));
// console.log(isPhoneNumber(num5));

// console.log(isPhoneNumber(num1Error));
// console.log(isPhoneNumber(num2Error));
// console.log(isPhoneNumber(num3Error));
// console.log(isPhoneNumber(num4Error));

//! Урок 77. Строки и массивы

// const userFullName = 'Вася Пупкин Васильевич';

//* Строку в массив по определенному разделителю
// console.log(userFullName.split(' ')); // ['Вася', 'Пупкин', 'Васильевич']

//* Получить отдельные переменные из нашего массива
// const [firstName, familyName, lastName] = userFullName.split(' ');
// console.log(firstName); // Вася
// console.log(familyName); // Пупкин
// console.log(lastName); // Васильевич

//* Из массива в строку / объединить наш массив в строку
// const arr = ['ТЫ', 'знаешь', 'JS'];
// console.log(arr.join(' ')); // ТЫ знаешь JS
// console.log(arr.join('*')); // ТЫ*знаешь*JS

//! Урок 78. Дополнение строк

// const film = 'Звёздные Воины';

// console.log(film.padStart(50)); // добавилось в начало символы , теперь наша строка состоит в сумме из 50 символов

// console.log(film.padStart(50, '+')); // добавляет в начало символы + и теперь наша строка в суме состоит из 50 символов

// console.log(film.padStart(50).length); // 50

// console.log(film.padEnd(50)); // добавилось в конец символы , теперь наша строка состоит в сумме из 50 символов

// console.log(film.repeat(10)); // повторит 10 раз нашу строку

//! Урок 79. Упражнение - маскировка карты
// Замаскировать всё, кроме последних 4х символов

// const card = '2342834503458353';

// console.log(card.slice(-4).padStart(card.length, '*'));
// slice(-4) - возращает новую строку 8353
// .padStart(card.length, '*') - смотрит длину переменной card (=16) и добавляем к полученному (card.slice(-4)) символы * , и в сумме будет новая строка ************8353

//* ТЕСТ
// let str = 'How are you?';
// str = str.padStart(1, '%');
// console.log(str); // How are you?

// TODO: Объекты
//! Урок 80. Знакомство с объектами

// const userArray = ['Вася', 'Пупкин', 24];

// const user = {
//     name: 'Вася',
//     surname: 'Пупкин',
//     age: 24,
//     skills: ['Программирование', 'Готовка'],
// };
// console.log(user);

//! Урок 81. Обращение к элементам объекта / Поиск элементов в объекте

// const user = {
//     name: 'Вася',
//     surname: 'Пупкин',
//     age: 24,
//     skills: ['Программирование', 'Готовка'],
//     eduBasic: 'Школа 10',
//     eduPro: 'УДХТУ',
// };

//* Обратится к элементу объекта
// console.log(user.age); // 24
// console.log(user.name); // Вася
// console.log(user.skills); // ['Программирование', 'Готовка']
// console.log(user.skills[0]); // Программирование
// console.log(user.skills[1]); // Готовка

// console.log(user['skills']); // ['Программирование', 'Готовка']
// console.log(user['age']); // 24
// console.log(user['surname']); // Пупкин

// const level = 'Pro';
// console.log(user['edu' + level]); // УДХТУ  = eduPro

// const res = prompt('Введите свойство');
// console.log(user[res]);

//* Задать свойство объекта / Добавить свойство в объект
// user.workAs = 'QA';
// console.log(user.workAs); // QA

// user['city'] = 'Киев';
// console.log(user);
// console.log(user.city); // Киев

//* Модифицировать уже существующее свойство в объекте
// user.age = 30;
// console.log(user.age); // 30

//! Урок 82. Упражнение - сортировка пользователей

// Отсортировать пользователей по возрасту

// const users = [
//     { name: 'Вася', age: 30 },
//     { name: 'Катя', age: 18 },
//     { name: 'Аня', age: 40 },
//     { name: 'Петя', age: 25 },
// ];

// users.sort((a, b) => {
//     return a.age - b.age;
// });

// console.log(users);

//! Урок 83. Упражнение - преобразование объектов
// преобразовать пользователей до вида
// { fullName: 'Вася Пупкин', skillNum: 2}

// const users = [
//     {
//         name: 'Вася',
//         surname: 'Пупкин',
//         age: 30,
//         skills: ['Разработка', 'DevOps'],
//     },
//     {
//         name: 'Катя',
//         surname: 'Белова',
//         age: 18,
//         skills: ['Дизайн'],
//     },
// ];
//* Вариант 1
// const transformedUsers = users.map((user) => {
//     const fullName = `${user.name} ${user.surname}`;
//     const skillNum = user.skills.length;

//     return { fullName, skillNum };
// });
// console.log(transformedUsers);

//* Вариант 2
// const userData = users.map((user) => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skillNum: user.skills.length,
//     };
// });
// console.log(userData);

//! Урок 84. Методы объектов

// const user = {
//     name: 'Yevhen',
//     surname: 'Tarasenko',
//     age: 27,
//     getFullName: function () {
//         // console.log(this);
//         return this.name + ' ' + this.surname;
//     },
// };

// console.log(user.getFullName());

// const getFullName = function (user) {
//     return user.name + ' ' + user.surname;
// };

// const arr = [1, 2];
// arr.sort();
// '22124d;fdl'.toLocaleLowerCase();

//! Урок 86. Упражнение - кошелёк
// Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется в массив operations в виде { reason: 'Оплата налогов', sum: -100 }. Возвращается true - если успешно, и false - если не хватает баланса. так же реализовать методы вывода числа операций по кошельку.

// const wallet = {
//     balance: 0,
//     operations: [],
//     increase: function (sum, reason) {
//         this.balance += sum;
//         this.operations.push({
//             reason: reason,
//             sum: sum,
//         });
//         return true;
//     },
//     decrease: function (sum, reason) {
//         if (this.balance < sum) {
//             console.log('Недостаточно баланса');
//             return false;
//         }
//         this.balance -= sum;
//         this.operations.push({
//             reason: reason,
//             sum: -sum,
//         });
//         return true;
//     },
//     getOperationLength: function () {
//         return this.operations.length;
//     },
// };

// console.log(wallet.increase(1000, 'Зарплата'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(2000, 'Покупка ноутбука'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(500, 'Зарплата'));
// console.log(wallet.balance);

//! Урок 87. Enhance object literals | Улучшить литералы объектов

// const wallet = {
//     balance: 0,
//     operations: [],
//     increase: function (sum, reason) {
//         this.balance += sum;
//         this.operations.push({
//             reason, //!
//             sum, //!
//         });
//         return true;
//     },
//     decrease: function (sum, reason) {
//         if (this.balance < sum) {
//             console.log('Недостаточно баланса');
//             return false;
//         }
//         this.balance -= sum;
//         this.operations.push({
//             reason, //!
//             sum: -sum,
//         });
//         return true;
//     },
//     getOperationLength: function () {
//         return this.operations.length;
//     },
// };

// console.log(wallet.increase(1000, 'Зарплата'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(2000, 'Покупка ноутбука'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(500, 'Зарплата'));
// console.log(wallet.balance);

// const balance = 7;

// const wallet = {
//     balance, //!
//     operation: [],
// };

// const initialBalance = 7;

// const wallet2 = {
//     balance: initialBalance, //!
//     operation: [],
// };

//! Урок 87. Итерирование по объекту

// const cities = {
//     msk: {
//         lt: 200,
//         temp: 25,
//     },
//     spb: {
//         lt: 100,
//         temp: 20,
//     },
// };

// let sumTemp = 0;
// let citiesCount = 0;
// for (const key in cities) {
//     // console.log(key); // msk u spb
//     citiesCount++; // 1 + 1 = 2
//     sumTemp += cities[key].temp; // 25 + 20 = 45
// }
// console.log(sumTemp / citiesCount); // 45 / 2 = 22,5

//* Получить количество ключей в объекте
// let citiesCount2 = Object.keys(cities).length; // 2
// console.log(citiesCount2); // 2

//* Получить ключи из объекта
// let testVariable = Object.keys(cities); // ['msk', 'spb']
// console.log(testVariable); // ['msk', 'spb']

//! Урок 88. Деструктуризация и rest

// const arr = [1, 2, 3];
// const [z, y, x] = arr;
// console.log(z); // 1
// console.log(x); // 3

// let user = {
//     name: 'Vasya',
//     age: 40,
//     city: 'Kiev',
// };

// const { age, name } = user;
// console.log(age); // 40
// console.log(name); // Vasya

// const { city, ...userWithoutCity } = user;
// console.log(userWithoutCity); // всё кроме города

//* Добавить данные в объект
// user.test = 'QA';
// console.log(user); // QA

// const additionalData = {
//     skills: ['Разработка', 'Дизайн'],
//     creditCard: '2342-2345-2563-6789',
// };
// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;
// console.log(user);

// user = {
//     ...user, // = user
//     ...additionalData, // = additionalData
// };
// console.log(user);

//! Урок 89. Optional chaining

// const cities = {
//     msk: {
//         temp: {
//             celsius: 25,
//         },
//     },
//     spb: {},
// };

// console.log(cities.msk.temp.celsius); // 25

// const city = 'spb';
// if (cities[city] && cities[city].temp) {
//     console.log(cities[city].temp.celsius);
// }

//* !!!
// console.log(cities?.spb?.temp?.celsius); // undefined

//! Урок 90. Упражнение - склад
// Сделать объект склад с методами добавления на склад, поиска по складу товара и расчёта веса

// const warehouse = {
//     goods: [],
//     findGoodById: function (id) {
//         return this.goods.find((g) => g.id == id);
//     },
//     addGood: function (good) {
//         const existedGood = this.findGoodById(good.id);
//         if (existedGood) {
//             console.log('Этот товар уже есть на складе');
//         } else {
//             this.goods.push(good);
//             console.log('Товар добавлен на склад');
//         }
//     },
//     getWeightKg: function () {
//         return this.goods.reduce(
//             (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
//             0
//         );
//     },
// };

// // товары
// const car = {
//     id: 1,
//     weight: {
//         kg: 1000,
//     },
//     brand: 'Ford',
// };

// const chair = {
//     id: 2,
//     weight: {
//         kg: 2,
//     },
// };

// const paper = {
//     id: 3,
//     color: 'red',
// };

// warehouse.addGood(car);
// console.log(warehouse.goods);
// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(paper);
// console.log(warehouse.goods);
// let finedItem = warehouse.findGoodById(6);
// console.log(finedItem);
// finedItem = warehouse.findGoodById(1);
// console.log(finedItem);
// const w = warehouse.getWeightKg();
// console.log(w);

//* ТЕСТ
// Тест 1
// let arr = [{ name: 'Вася' }, { name: 'Петя' }];
// console.log(arr.map((e) => e.name)); // ['Вася', 'Петя']

// console.log(arr.map((e) => e.name).reduce((acc, e) => (acc += e[0]), ''));

// TODO: Scope и this
//! Strict mode
//*     'use strict'        - прописывать всегда в начале файла

//! Урок 100 - Пример scope chain
// 'use strict';

// let successMessage = 'Успех';
// const user = {
//     name: 'Vasya',
//     roles: [],
// };

// function addRole(user, role) {
//     if (role == 'admin') {
//         const message = 'Ошибка';
//         console.log(message);
//         return user;
//     }

//     user.roles.push(role);
//     let successMessage = 'Ура';
//     console.log(successMessage);

//     function logRoles() {
//         console.log(user.roles);
//     }
//     logRoles();

//     return user;
// }

// console.log(addRole(user, 'text'));

// console.log(successMessage);

//! Урок 102. Пример поднятия
//* !функции объявлять всегда вверху
//* !var не использовать

// addUser();
// //console.log(a);
// console.log(b);
// const a = 3;
// var b = 2;

// function addUser() {
//     //console.log('User added');
// }

// const arr1 = () => {
//     console.log('arr1');
// };
// arr1();
// addUser();

//! Урок 104. this на практике
'use strict';

// console.log(this);
// console.log(window);

// function addNum(num1, num2) {
//     console.log(this);
//     return num1 - num2;
// }

// addNum();

// const addNum2 = (num1, num2) => {
//     console.log(this);
//     return num1 - num2;
// };

// addNum2();

// const user = {
//     name: 'Vasy',
//     surname: 'Pyp',
//     getFullName: function () {
//         console.log(this);
//         return this.name + '' + this.surname;
//     },
// };

// user.getFullName();

//! Урок 105. КОнтекст
// 'user strict';

// const user = {
//     firstName: 'Vasya',
//     lastName: 'Pyp',
//     age: 20,
//     getUserInfo: function () {
//         console.log(this);
//         console.log(`${this.firstName} ${this.lastName}`);

//         const canDrink = () => {
//             if (this.age >= 18) {
//                 console.log('Может уже пить');
//             } else {
//                 console.log('Не может пить');
//             }
//         };
//         canDrink();
//     },
//     getUserInfoArrow: () => {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };
// user.getUserInfo();
// // user.getUserInfoArrow();

//! Урок 106. Arguments
// 'use strict';

// function sumNum(num1, num2) {
//     console.log(this);
//     console.log(arguments);
//     return num1 + num2;
// }
// console.log(sumNum(1, 3));

//! Урок 107. Упражнение
// дополнить объект методами для получения имени: компании, сео, сотрудника

//* Мое решение
// const company = {
//     name: 'ООО Агро',
//     getCompanyName: function () {
//         console.log('Company Name:', this.name);
//     },
//     employees: [
//         {
//             name: 'Света',
//             getEmployeesName: function () {
//                 console.log('Employees Name:', this.name);
//             },
//         },
//     ],
//     ceo: {
//         name: 'Вася',
//         getCeoName: function () {
//             console.log('CEO Name:', this.name);
//         },
//     },
// };

// company.getCompanyName();
// company.employees[0].getEmployeesName();
// company.ceo.getCeoName();

//* Решение
// const company = {
//     name: 'ООО Агро',
//     employees: [
//         {
//             name: 'Света',
//             getName: function () {
//                 console.log(this.name);
//             },
//         },
//     ],
//     ceo: {
//         name: 'Вася',
//         getName: function () {
//             console.log(this.name);
//         },
//     },
//     getName: function () {
//         console.log(this.name);
//     },
// };

// company.getName();
// company.ceo.getName();
// company.employees[0].getName();

//! Урок 108. EOL для методов
// 'use strict';

// const b = 1;

// const a = {
//     b,
//     getB: function () {
//         return this.b;
//     },
//     getBAlt() {
//         return this.b;
//     },
// };
// console.log(a);
// console.log(a.getB());
// console.log(a.getBAlt());

//! Урок 109. Call, apply
// 'use strict';

// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     year: 2021,
//     damages: [],
//     addDamage(part, rate) {
//         console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: - повреждение: ${part} со степенью ${rate}
// 		`);
//         this.damages.push({
//             part,
//             rate,
//         });
//     },
// };

// // audi.addDamage('Капот', 1);

// const bmw = {
//     make: 'BMW',
//     model: 'X5',
//     year: 2022,
//     damages: [],
// };

// bmw.addDamage = audi.addDamage;
// // bmw.addDamage('Бампер', 2);

// const addDamageFunction = audi.addDamage;
// // addDamageFunction('Бампер', 2); // ошибка
// addDamageFunction.call(bmw, 'Бампер', 2);
// addDamageFunction.call(audi, 'Бампер', 2);

// addDamageFunction.apply(bmw, ['Бампер', 2]);
// addDamageFunction.apply(audi, ['Бампер', 2]);

//! Урок 110. Bind - связывание контекста с функцией
// 'use strict';

// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     damage: [],
// };

// const carManipulation = {
//     addDamage(part, rate) {
//         this.damage.push({ part, rate });
//         console.log(`Добавили повреждение на ${this.make} ${this.model}`);
//     },
// };

// const addDamageAudi = carManipulation.addDamage.bind(audi);
// addDamageAudi('Крыло', 3);
// console.log(audi);

// const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
// addDamageAudiRoof(5);
// console.log(audi);

//! Урок 111. Упражнение - управление this
// создайте объект пользователя с паролем. С помощью функции ниже удалить пароль сделав функцию сброса пароля

// function removePassword(reset) {
//     if (reset) {
//         this.password = undefined;
//     } else {
//         this.password = '1';
//     }
// }

// const user = {
//     name: 'Yevhen',
//     password: '123456QWERTY',
// };

// const resetUserPassword = removePassword.bind(user, true);
// resetUserPassword();
// console.log(user);

//! Урок 112. IIFE
// 'use strict';

// function init() {
//     console.log('Start');
// }
// init();

// (function () {
//     console.log('Start IIFO');
// })();

//! Урок 113. Замыкание
// 'use strict';

// function changeBalance() {
//     let balance = 0;
//     let key = 'asd';
//     return function (sum) {
//         balance += sum;
//         key = 'text';
//         console.log(`Баланс ${balance}`);
//     };
// }

// const change = changeBalance();
// change(100);
// change(-50);
// change(200);
// console.dir(change);

// const change2 = changeBalance();
// change2(100);
// console.dir(change2);

//! Урок 114. Упражнение - работа с замыканиями
// Сделать функцию пользователя, которая берёт за основу userInfo и за счёт замыкания создаёт новый объект, с которым можно работать как user1().increase(100)

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//         (this.balance += sum), this.operations++;
//     },
// };

// function user() {
//     const userObj = {
//         balance: 0,
//         operations: 0,
//         increase(sum) {
//             (this.balance += sum), this.operations++;
//         },
//     };
//     return function () {
//         return userObj;
//     };
// }
// const user1 = user();
// user1().increase(100);
// user1().increase(100);
// console.log(user1());

// const user2 = user();
// user2().increase(100);
// console.log(user2());

// TODO: Document Object Model
// Работа с DOM
//! Урок 116. Выбор и манипуляция с элементами

// 'use strict';

// setTimeout(() => {
//     const panelText = document.querySelector('.panel').innerHTML;

//     console.log(panelText);

//     document.querySelector('.panel').innerHTML = 'New text'; //* Обратиться к тексту в блоке
//     document.querySelector('.input').value = 'text'; //* Обратиться к инпуту и ввести данные
// }, 250);

//! Урок 117. Обработка нажатий

'use strict';

// setTimeout(() => {
//     document.querySelector('.button').addEventListener('click', function () {
//         console.log('text');
//     });
// }, 250);

// document.querySelector('.button').addEventListener('click', function (e) {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

// function changedClick() {
//     const input = document.querySelector('.input').value; //* выбрать введённых текст в инпут

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input; //* обратиться к тексту и заменить его
//     document.querySelector('.input').value = ''; //* удалить введёны текст
// }

//! Урок 118. Обработка событий с клавиатуры

// function submitForm() {
//     //* добавляем в html эту функцию: <button class="button" onclick="submitForm()">Change</button>
//     const input = document.querySelector('.input').value; //* выбрать введённых текст в инпут

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input; //* обратиться к тексту и заменить его
//     document.querySelector('.input').value = ''; //* удалить введёны текст
// }

// function inputChanged(e) {
//     //* добавляем в html эту функцию: <input class="input" onkeydown="inputChanged(event)" />
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// });

//! Урок 119. Работа со стилями и классами

//! Работа со стилями:
// function submitForm() {
//     //* добавляем в html эту функцию: <button class="button" onclick="submitForm()">Change</button>
//     const input = document.querySelector('.input').value; //* выбрать введённых текст в инпут

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input; //* обратиться к тексту и заменить его
//     document.querySelector('.input').value = ''; //* удалить введёны текст
//     document.querySelector('.notification').style.display = 'block'; //! Обращаемся к style.display и изменяем его
// }
// function inputChanged(e) {
//     //* добавляем в html эту функцию: <input class="input" onkeydown="inputChanged(event)" />
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

//! Работа с классами:
// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     document
//         .querySelector('.notification')
//         .classList.add('notification_active'); //! Добавить класс
//document.querySelector('.notification').classList.remove('notification_active'); //! Удалить класс
// }
// function inputChanged(e) {
//     //* добавляем в html эту функцию: <input class="input" onkeydown="inputChanged(event)" />
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

//! Урок 120. Установка атрибутов
'use strict';

// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     // document.querySelector('.notification').classList.add('notification_active');
//     //document.querySelector('.notification').classList.remove('notification_active');
//     console.log(document.querySelector('.notification').getAttribute('class')); //! Получаем атрибуты
//     document
//         .querySelector('.notification')
//         .setAttribute('class', 'notification'); //! Сохраняем атрибут
// }

// function inputChanged(e) {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

//! Урок 121. Упражнение - получение элементов с DOM
'use strict';

// // console.log(document.querySelector('.one').innerText); //! получение по class
// // console.log(document.querySelector('.one ~ div').innerText); //! получение по class
// console.log(document.querySelectorAll('.one')[0].innerText); //! получение по class
// console.log(document.querySelectorAll('.one')[1].innerText); //! получение по class

// // console.log(document.querySelector('#two').innerText); //! получение по id
// console.log(document.getElementById('two').innerText); //! получение по id

// console.log(document.querySelector('[user-id="4"]').innerText);

//! Урок 122. Добавление html на лету
// 'use strict';

// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     document.querySelector('.notification').classList.remove('notification_active');
// }

// function inputChanged(e) {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

//* создать элемент в html

// setTimeout(() => {
//     const panelText = 'Панель';
//     const panelClass = 'Button';
//     const newElement = document.createElement('div');
//     newElement.setAttribute('user-id', 1);
//     newElement.classList.add('panel');
//     // newElement.innerText = 'Кнопка';
//     newElement.innerHTML = `<div>${panelText}</div>`; //! Создать элемент в html
//     document.querySelector('.test').appendChild(newElement);
// }, 1000);

//! Урок 123. Local storage
// ('use strict');

// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     document.querySelector('.notification').classList.remove('notification_active');
// }

// function inputChanged(e) {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

// localStorage.setItem('token', '12345qwerty'); //! добавить токен
// localStorage.setItem('token1', '1');

// console.log(localStorage.getItem('token')); //! посмотреть/получить токен
// localStorage.removeItem('token1'); //! удалить токен с local storage
// localStorage.clear(); //! очистить local storage

//! Урок 124. Работа с JSON
// 'use strict';

// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     document.querySelector('.notification').classList.remove('notification_active');
// }

// function inputChanged(e) {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

// const obj = JSON.parse('{ "a": 1 }');
// console.log(obj.a);
// const str = JSON.stringify(obj);
// console.log(str);

//! Урок 125. Упражнение - сохранение JSON

// 'use strict';

// function submitForm() {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     document.querySelector('.notification').classList.remove('notification_active');
//     const textString = JSON.stringify({
//         text: input, //! сохранить текст в JSON
//     });
//     localStorage.setItem('text', textString); //! сохранить JSON в local storage
// }

// function inputChanged(e) {
//     if (e.code == 'Enter') {
//         submitForm();
//     }
// }

// TODO: Практика
//! Урок
