/*

  Модули в JS
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

  Так как для экспорта и импорта нету родной поддержки в
  браузерах, то нам понадобится сборщик который это умеет делать

  Выбор пал на вебпак

  npm i
  npm run cli

  Затестим - в консоли наберем команду webpack
*/
console.log("WEBPACK WORKING5");
// Для экспорта и импорта обязательно нужно имя
// import myVar from './modules/1';
import Classes from './classes';
// console.log('index module1', myVar);
console.log( 'Classes', Classes );
// let x = {
//   prop1: 'test',
//   prop2: 12,
//   prop3: {}
// }
//
// let { prop1, prop2 } = x;
// console.log( prop1, prop2 );

// import someObj from './modules/2';
// console.log(someObj);
// //
import { mArray, mObj, User } from './modules/3';
console.log( mArray, mObj, User);
// //
const Butch = new User('Butch');
console.log(Butch);
