
    /*
      Objects in JS
    */


    /*
      Пример обычного обьекта в JavaScript с которым мы будем работать.
      Имеет свои свойства и методы.
    */

    var cat = {
      nubmer: undefined,
      sound: 'meow',         // свойство обьекта
      talk: function(){      // Метод обьекта
        console.log( 'cat obj', this );
        console.log( 'cat sound', this.sound );
      }
    };

    // 
    // var myObj = {};
    //     myObj.name = "Cat";
    //     myObj.sound = "Hello";
    //     myObj.sayName = function(){
    //       console.log( this.sound + ' my name is ' + this.name);
    // }



    // создание нового обьекта
    // var cat = {};
    // // присвоение свойств
    //     cat.number = undefined;
    //     cat.sound = 'meow';
    // // // через квадтатные скобки и переменную
    // var someVariable = "talk"
    //     cat[someVariable] = "Dance-Dance-Dance"
    //     cat.method = function(){
    //       console.log(123);
    //     }
    // console.log(cat);

    var dog = {
      sound: 'woof'
    }

    //
    // cat.talk();
    // var x = cat.talk;
    // window.sound = "brbrbr";
    // x();


    // console.log( myObj );
    // myObj.sayName();

    /*
      Пример функции которая работает с this
    */
    // function testThis(){
    //   "use strict";
    //   return this;
    // }
    // console.log( testThis() );

    // пример работы с this
    // var myObj = {
    //   name: 'Dexter',
    //   setName: function( newName ){
    //     console.log('context', this);
    //     this.name = newName;
    //   },
    //   talk: function(){
    //     console.log(this);
    //     console.log(`My name is ${this.name}`)
    //   }
    // }
      // myObj.talk();
      // console.log( 'before', myObj );
      // myObj.setName('Test');
      // console.log( 'after', myObj)
      // myObj.talk();

      // var x = {  }
      //     x.value = 13;
      //     x.doSmsng = testThis;
      //
      //   console.log('return in obj', x.doSmsng());
      // cat.walk = function(){
      //   console.log('cat walk and say ' + this.sound);
      // };
      //
      // console.log( cat );
      // cat.walk()

      // function talk(){
      //   console.log( 'talk', this.sound );
      // }
      // talk();
      //
      // var boromir = {
      //   speak: talk,
      //   sound: "Нельзя просто так взять и..."
      // };
      // boromir.speak();
      //
      // var gollum = {
      //    blab: boromir.speak,
      //    sound: "Моя прелесть...."
      // };
      // gollum.blab();

      /* 3 */
      // Контекст выполнения this
      // var Human = {
      //   name: 'Ivan',
      //   sayName: function(){
      //     console.log( ' my name is ' + this.name );
      //   },
      //   personTwo: {
      //     name: 'Petro',
      //     sayName: function(){
      //       console.log( ' my name is ' + this.name );
      //     }
      //   }
      // };
      //
      // Human.sayName();
      // Human.personTwo.sayName();
