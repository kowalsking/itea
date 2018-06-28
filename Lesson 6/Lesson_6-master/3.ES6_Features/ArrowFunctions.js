/*
  Arrow functions + default values
  Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
    // const x = param => console.log( param );

    // const FnName = (params) => params * 2;
    // const z = param => console.log( param ); // return expresion
    // const y = ( param, param2 ) => {
    //   var tst = param + '123';
    //   console.log( tst, param2 );
    //   return 'HELLO';
    // };
    //
    // const o = function( param, param2 ){
    //   console.log( param, param2 );
    // };

    // x('test1');
    // let ddd = FnName(2);
    // console.log( ddd );
    // let testvar = y('Info', 'Block');
    // console.log( testvar )

    // z('test1');
    // let ppp = y('test3', 'test4');
    // console.log(ppp);
    // o('test5', 'test6');

    // const Duble = a => a * 2;
    // let Duble4 = Duble(4);
    // console.log(Duble4);
    
    const Test = (one, two) => {
      console.log( one, two );
      return one + two;
    }

    // console.log( Test(10, 5) );
