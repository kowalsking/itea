/*
  PROMISES
  Способ организации асинзронного кода.
*/

  // PROMISES
  // Promise status : Pending | Fulfilled | Rejected

  /*
    FIRST PROMISE
    Статус промиса может изменится только 1 раз
  */

  // let TestPromise = new Promise( function( resolveFunc, rejectFunc ){
  //  setTimeout( () => {
  //    // переведёт промис в состояние fulfilled с результатом "result"
  //    // resolveFunc([{title:'1'}, {title: '2'}]);
  //    // переведёт промис в состояние Rejected с результатом "ERROR 404"
  //    rejectFunc('ERROR 404');
  //  }, 1000);
  // });
  // // console.log( TestPromise );
  // // //
  // TestPromise.then(
  // // В then можем передать две функции - для обработки упешного состояния и для обработки ошибки
  //   function(res){
  //     console.log('Fulfilled: ', res );
  //     console.log( TestPromise );
  //     return [{name: 'one'}, {name: 'two'}];
  //   },
  //   function(error){
  //     console.log( TestPromise );
  //     throw new Error('Rejected: ' + error);
  //     // return [{name: 'vasha'}, {name:'Nasha'}];
  //   }
  // )
  // .then( function(response){
  //   let x = [];
  //       response.forEach( function( item ){
  //         item.maxAge = 90;
  //         x.push(item);
  //       });
  //       console.log('Third then:', x)
  //     return x;
  //   }
  // )
  // .then( function(response){
  //     console.log( 'second chain', response );
  //     let x = [];
  //     response.forEach( (item) => {
  //       item.age = "20";
  //       x.push( item );
  //     });
  //     console.log(x);
  //   return x;
  // }).catch( res => {
  //   console.error('we have a problems', res);
  // });

  /* LOAD CAT PROMISE */

  function loadImagePromise( url ){
    return new Promise( (resolve, reject) => {

      let imageElement = new Image();
          imageElement.onload = function(){
            resolve( imageElement );
          };
          imageElement.onerror = function(){
            let message = 'Error on image load at url ' + url;
            new Error(message);
            reject(
              RenderImage('images/cat5.jpg')
            );
          };

          imageElement.src = url;
    });
  }

  // loadImagePromise('asdasd');
  // loadImagePromise('images/cat1.jpg').then((img) => {
  //   // console.log( img )
  //   RenderImage(img.src);
  // });

  // Promise.all([
  //   loadImagePromise('images/cat1.jpg'),
  //   loadImagePromise('images/cat2.jpg'),
  //   loadImagePromise('images/cat3.jpg'),
  //   loadImagePromise('images/cat4.jpg'),
  //   loadImagePromise('images/caasdt5.jpg'),
  //   loadImagePromise('images/cat6.jpg'),
  //   loadImagePromise('images/cat7.jpg')
  // ])
  // .then( images => {
  //   console.log( images );
  //   images.forEach( img => RenderImage( img.src ));
  // })
  // .catch( error => console.log('catch', error));

  //ASYNC PROMISE
  let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";
  //
  fetch( url )
    .then( function( res ){
      console.log(res);
      return res.json()
    })
    .then( DataHandler )

  function DataHandler( json ){
      console.log( 'json', json );
  }


  /*

    Задание:
    1. Получили список людей c jsonGenerator

    2. Перебераем полученный массив и формируем новый в котором будут
    {
      index: ""
      name: "",
      age: "",
    }
    -> res.json();

    3. Перебираем каждый элемент и добавляем к нему поле друзья
    делая еще один запрос к jsonGenerator
    [{
      name: ""
    }, { ... }
    ]

    4. Выводим на экран списком
    UserName + Age;
    Friends: [FriendName,FriendName,FriendName]

    + 5. Сделать поле поиска по этому списку.

  */
