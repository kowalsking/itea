  /*
    Demo 1
    Функция вызывается напрямую из HTML
    onclick="someFunc()"
  */

  var i = 0;
  function CounterAdd(e){
    i++;
    console.log('clicked', i, e);
    // return function(){
    //   console.log('123');
    // };
  }

  /*
    Demo 2
    Обработчик вешается из кода на элемент
    Syntax: element.onclick = functionRef;
  */

  var block = document.getElementById('fromCode');
      block.onclick = CounterAdd;
  //
  //     // console.log( block.__proto__ );
      // block.onclick = function(){
      //   console.log('do some stuff');
      // };

  /*

    Присваивать функцию на ивент нужно в формате element.onclick = myFunc
    myFunc() - вызовет функцию и если в функции нет return вернет null.
    Таким образом onclick работать не будет.

  */
  //
  // function ExecutionFunc(){
  //   console.log('exect func');
  // }

  // execution.onclick = ExecutionFunc;
  // console.log(execution.onclick) // func
  // execution.onclick = ExecutionFunc() ;
  // console.log(execution.onclick) // null

  /*
    Demo 4
    Event Obj
  */
  //
  // eventObj.onclick = function( event ){
  //   console.log( 'event', event, event.target );
  // };
  //
  // document.onclick = function( event ){
  //   if( event.altKey === true ){
  //     console.log('click on cordinate:', event.clientX, event.clientY, event.target);
  //   }
  // };
