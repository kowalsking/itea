/*
  ASYNC-AWAIT

  Внутри функции которая помеченая как async в можете поместить
  ключевое слово await перед выражением которое вернет promise.
  Во время выполнения асинхронной функции она останавливается пока
  промис не станет выполненным.

  Задача конструкции async-await писать асинхронный код, который
  будет читаться так же просто как и синхронный

*/
/* jshint ignore:start */

// 1. Возвращает промис
  // async function PlayGame(){
  //   let rand = Math.floor(  Math.random() *  100 );
  //   rand % 2 === 0 ? rand = true : rand = false;
  //   return rand;
  // }
  //
  // let GameResult = PlayGame();
  // console.log(GameResult);
  // GameResult.then(
  //   function(res){
  //     res === true ?
  //       console.log('YOU WON') :
  //       console.log('YOU LOSE')
  //     }
  //   );

  // Demo with Response Awaiting

  // function resolveAfter( number, ms) {
  //   return new Promise(
  //     function( resolve ){
  //       setTimeout(() => {
  //         resolve( number );
  //       }, ms);
  //     });
  // }
  //
  // async function CombineNumbers(){
  //   let a = await resolveAfter( 70, 1000 )
  //     .then( (res) => {
  //       console.log('first done')
  //       return res;
  //     });
  //   let b = await resolveAfter( 40, 3000 )
  //   .then( (res) => {
  //     console.log('second done')
  //     return res;
  //   });
  //   return a + b;
  // }
  // //
  // let sixteen = CombineNumbers();
  //     sixteen.then( res => console.log( 'Final Result', res ));

  // Combine User
  async function getUserWithFriends(){
    const getUserResponse = await fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
    const users = await getUserResponse.json();
    const selectedUserName = users[0];
    const getUserFriends = await fetch("http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2");
    const UserFriends = await getUserFriends.json();

    let { age, name, gender } = selectedUserName;
    const CombinedUser = {
      age,
      name,
      gender,
      friends: UserFriends[0].friends
    };
    return CombinedUser;
  }

  var UserWithFriends = getUserWithFriends();
      UserWithFriends.then( data => console.log('Final Person:', data));
