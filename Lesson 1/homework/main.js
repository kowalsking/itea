/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 6-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 256;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/


// Генерація рандомного числа від 0 до max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// рішення
var r = getRandomInt(255),
    g = getRandomInt(255),
    b = getRandomInt(255);

var color = document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';



/* Бонус з HEX */

// var r = getRandomInt(255).toString(16),
//     g = getRandomInt(255).toString(16),
//     b = getRandomInt(255).toString(16);

// document.body.style.backgroundColor = '#' + r + g + b;

/* Бонус onClick */

var someDiv = document.createElement('div');
someDiv.style.color = 'white';
someDiv.style.fontSize = '30px';
someDiv.style.top = '50%';
someDiv.style.left = '40%';
someDiv.style.position = 'absolute';
document.body.appendChild(someDiv);

function changeColor(){
  var r = getRandomInt(255),
      g = getRandomInt(255),
      b = getRandomInt(255);

     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
     someDiv.innerText = 'This color: rgb('+r+','+g+','+b+')';
}


// hello world