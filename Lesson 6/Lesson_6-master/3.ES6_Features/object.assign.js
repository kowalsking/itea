/*
  Object Assign, Spread and Rest Operator
  Docs:
    https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

  /*
    String Literal:
  */

  var a = 'Карп',
      b = "Селедка";
  var newStringLiteral = `${a} и ${b} сидели на трубe`;
      // console.log('newStringLiteral', newStringLiteral);

      var d = ['Лебедь','Рак','Щука'];
      var c = `
      <div>
        <ul>
          ${
            d.map( (item) => `<li>${item}</li>` )
          }
        </ul>
      </div>
      `;
      // console.log(c);

  /*
    Object.assign
    syntax: Object.assign(target, ...sources)
  */
  // не коментить DataObj
  let DataObj = {
    data1: 'data1',
    data2: 'data2'
  };

  let DataObj2 = {
    data3: 'data3',
    data4: 'data4'
  };

  // - - - - - - - -

  // let firstAssign = Object.assign(DataObj, DataObj2);
  // console.log('firstAssign', firstAssign);
  // console.log('DataObj', DataObj);
  // Изменяем значение исходного обьекта и проверяем значения обеих
  // DataObj.data5 = 'data5';
  // console.log('DataObj', DataObj);
  // console.log('firstAssign', firstAssign);

  // - - - - - - - -

  // IMMUTABLE ASSIGN
  let secondAssign = Object.assign({}, DataObj, DataObj2 );
  // console.log( 'secondAssign', secondAssign );
  DataObj.data6 = 'data6';
  // console.log('DataObj - secondAssign', DataObj);
  // console.log('secondAssign', secondAssign);

  // - - - - - - - -

  let FunctionalObj = {
    x: () => {
      console.log('some important stuff');
    },
    y: {
      a: 'a',
      b: 'b',
      c: 'c'
    }
  };

  // FunctionalObj.x();
  let thirdAssign = Object.assign({}, FunctionalObj, DataObj);
  // console.log( thirdAssign );
  // thirdAssign.x();

  // - - - - - - - -
  // convert to obj
  // var v1 = 'abcfadfsdfsds';
  // var v2 = true;
  // var v3 = 10;
  // var v4 = { value : true };
  // // //
  // var obj = Object.assign(
  //   {},
  //   v1,   // разберет посимвольно индекс-буква
  //   null, // -> ignore
  //   v2,   // -> ignore
  //   undefined,  // -> ignore
  //   v3,   // -> ignore
  //   v4    // внесет в обьект
  // );
  // console.log(obj);

  // - - - - - - - -

  // var obj = {
  //   foo: 1,
  //   get bar() {
  //     return 2;
  //   }
  // };
  //
  // obj.value = '';
  // // // // При попытке скопировать значение с геттером, получим только его value
  // var copy = Object.assign({}, obj);
  // console.log(copy);



  /*
    REST and Spread Operator
  */

  // in Function ->
  function RestTest(a, b, ...props){
    console.log('a:', a, 'b', b, 'props', props);
    props.map( item => console.log( 'map rest props', item ) )
  }
  // var args = [0, 1, 2, 4, 5];
  // RestTest.apply(null, args);
  RestTest(6,7,8,9,0,'f')

  // In array:
  // var iterableObj = ['i','t','e'];
  // var iterableObj2 = ['d','d','a'];
  // var restArray = [ '4', 'five', 6, ...iterableObj, ...iterableObj2];
  // console.log( 'rest in array:', restArray);

  // concat arrays: old way;
  // var arr1 = [0, 1, 2];
  // var arr2 = [3, 4, 5];
  // Append all items from arr2 onto arr1
  // arr1 = arr1.concat(arr2);
  // new way:
  // arr1 = [...arr1, ...arr2];
  // console.log( arr1 );

// // // In obj
// var obj = { value: 1};
// let objClone = { ...obj, ...DataObj };
// console.log( 'objClone', objClone );

// - - - - - - - - -

// let desonctruct = {
//   prop1: 'demo',
//   prop2: 'test',
//   prop3: function(){
//     return 213;
//   }
// }

// let { prop1, prop2, prop3 } = desonctruct;
// console.log( prop1, prop2, prop3() );
//
// let { x, k, ...z } = { x: ['x'], k: ['k'], a: 3, b: 4 };
// console.log(x); // ['x']
// console.log(k); // ['k']
// console.log(z); // { a: 3, b: 4 }


  let data = {
    loaded: false,
    loading: false,
    data: {},
    error: ['Log error']
  }

  let xx = {
    ...data,
    data: {
      test: '123'
    },
    loaded: true
  }

  console.log( xx );
