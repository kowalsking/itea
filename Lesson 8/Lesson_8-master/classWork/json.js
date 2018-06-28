
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

*/
let MyValidateForm = document.getElementById('MyValidateForm');
let MyForm = document.getElementById('MyForm');

MyValidateForm.addEventListener('submit', jsonFunction);
MyForm.addEventListener('submit', jsonFunction1);

function jsonFunction(e) {
  e.preventDefault();
  let myObj = {};
  let arr = Array.from(MyValidateForm.elements);
  arr.forEach(item => {
    if (item.type !== 'submit') {
      myObj[item.name] = item.value;
    }
  })
  let strJSON = JSON.stringify(myObj);
  // console.log( myObj );
  console.log( strJSON );
}

function jsonFunction1(e) {

  e.preventDefault();

  let parsee = document.getElementById('11');
  
  let parseJSON = JSON.parse(parsee.value);

  console.log(parseJSON);
  // console.log(parsee.value);

}

