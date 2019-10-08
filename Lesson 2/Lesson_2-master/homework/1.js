
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

  //2019
  document.querySelector('.buttonsHeader').addEventListener('click', tabulators);
  let tabs = document.querySelectorAll('.tab');

  function tabulators(e) {
    let button = e.target;
    if(button.className === 'showButton') {
      console.log(tabs);
      tabs.forEach(tab => {
        if(tab.dataset.tab === button.dataset.tab) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  }


  // example
  // var buttonsHeader = document.querySelector('.buttonsHeader').addEventListener('click', myTabs);
  //
  // function myTabs(event) {
  //   if (event.target.className == 'showButton') {
  //     var buttonDataTab = event.target.getAttribute('data-tab');
  //     var tabCats = document.getElementsByClassName('tab');
  //     for (var i = 0; i <= tabCats.length - 1; i++) {
  //       if (buttonDataTab == (i + 1)) {
  //         tabCats[i].classList.add('active');
  //       } else {
  //         tabCats[i].classList.remove('active');
  //       }
  //     }
  //   }
  // }

// 2018

// var button1 = document.querySelectorAll('button')[0];
// var button2 = document.querySelectorAll('button')[1];
// var button3 = document.querySelectorAll('button')[2];
// var tabCats = document.querySelectorAll('.tab');
// // var tabCatsArray = Array.from(tabCats);
// var tabClasses = tabCats.classList;
// console.log(tabCats);
//
// button1.onclick = function(event){
//   tabCats[0].classList.add('active');
// };
// button2.onclick = function(event){
//   tabCats[1].classList.add('active');
// };
// button3.onclick = function(event){
//   tabCats[2].classList.add('active');
// };
//
// function hideAllTabs() {
//   for (var i = 0; i <= tabCats.length - 1; i++){
//       tabCats[i].classList.remove('active');
//   }
// }
