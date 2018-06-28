/*
  let and const variables
  Docs:
    let:   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
  const:   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
*/

  var x = null;
  let y = null;
  const z = null;

  // function letDemo(){
  //   var SomeVariable = '10';
  //     if( true ){
  //       var SomeVariable = "5";
  //       console.log('in scope:', SomeVariable);
  //     }
  //   console.log( 'out of scope:', SomeVariable);
  // }

  // declarative func
  // block scope

  // function letDemo(){
  //   let SomeVariable = '10';
  //     if( true ){
  //       let SomeVariable = "5";
  //       console.log('in scope:', SomeVariable);
  //     }
  //   console.log( 'out of scope:', SomeVariable);
  // }
  //
  // letDemo();
  // console.log(a);
  // console.log(b);
  // var a = 0;
  // let b = 0;


  // const IMMUTABLE_VARIABLE = 3;
  //       // IMMUTABLE_VARIABLE = IMMUTABLE_VARIABLE + 1; // ERROR
  //
  // const IMMUTABLE_OBJ = { animal: 'cat', name: 'Luna'};
  //       // IMMUTABLE_OBJ = { animal: 'dog', name: 'Wolf'}; // error
  //
  //       IMMUTABLE_OBJ.age = '12';
  //       console.log( 'key assigment', IMMUTABLE_OBJ );
  //
  // const IMMUTABLE_ARRAY = [];
  //       IMMUTABLE_ARRAY.push("A");
  //       console.log( IMMUTABLE_ARRAY );
  //       IMMUTABLE_ARRAY = ["B"]; // ERROR
