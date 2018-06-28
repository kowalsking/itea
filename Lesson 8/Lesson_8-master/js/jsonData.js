/*

  Формат JSON.

  JSON (JavaScript Object Notation)

  JSON.parse();
    Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  JSON.stringify()
    Возвращает строку JSON, соответствующую указанному значени.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/

var someUser = {
  name: "asd",
  age: 25,
  doSmsng: function(){
    console.log('hello');
  }
};
// console.log( someUser );
var y = JSON.stringify(someUser);
console.log(y);
//
var myJSON = '{"name":"Adam"}';
var Adam = JSON.parse(myJSON);
    console.log(Adam);
    Adam.age = "23";

var AJAX_DATA = JSON.stringify(Adam);
    console.log(AJAX_DATA);

/*
  JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения nul
  т.е JSON работает со следущими типами данных:
  - Object : {}
  - Array : []
  - Number : 12
  - String : ""
  - Boolen : true
  - null

  Особености:
  1) Передает только данные
  2) Именна свойств должны быть строками заключенными в двойные кавычки
*/

// var obj = {};
//
// var input = document.getElementById('Test');
//     obj[input.name] = input.value;
//
//     console.log('our obj', obj);
//
