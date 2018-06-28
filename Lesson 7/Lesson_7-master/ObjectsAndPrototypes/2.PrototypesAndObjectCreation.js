/*
  Углубляемся в прототипы
  Вспомним что и себя представляют прототипы в JS
*/

  let cat = {
    breed: 'Balinese',
    eats: true
  };
  let myCat = { name: 'Luna'};
  Object.setPrototypeOf(myCat, cat);
  // console.log( myCat.name );  // Luna
  // console.log( myCat.breed ); // Balinese
  // console.log( myCat.eats );  // true
  // console.log( myCat );       // { name: Luna, __proto__: Object }

  /*
    JS - Прототипный, обьекто-ориентированный язык.
    Прототип является просто ссылкой которая указывает на обьект "Родителя"
    И может предствлять собой бесконечную вложеность их друг в друга
    Пишется в свойство __proto__ любого обьекта
    Что же собой являет сам прототип
  */

  // console.log( Object.prototype );

  /*
    Каждый наш прототип, который мы создаем наследует все свои методы с
    "Родительского" обьекта. Проверим это:
  */

  // console.log('cat proto equal to obj.prototype', cat.__proto__ === Object.prototype ); // true

  /*
    Убедимся в этом - модифицируем наш Object.prototype;
  */

  // Object.prototype.learning = true;
  // console.log( 'cat.__proto__.learning', cat.__proto__.learning ); // true
  // console.log( cat, cat.learning );

  /*
    Разница между __proto__ и prototype в том, что:
    Первый является свойством, которое указывает на обьект который является прототипом для текущего обьекта.
    А второй, это свойство ФУНКЦИИ,которое применяется только к функциям конструкторам
    и будет использовано для создания нового обьекта с приставкой new Fn/
  */

  let Hamster = function( name, count ){
    this.name = name;
    this.count = count;
  };
  // Hamster.prototype.animal = 'mammal';
  //
  // let myNewHamster = new Hamster("test1", 1);
  // let myNewHamster2 = new Hamster("test2", 100);
  //     console.log( 'myNewHamster.animal:', myNewHamster, myNewHamster2 );

  /*
    В JS любая сущность является обьектом. Хорошим примером тут будут например Массивы
    Проверьте значение window.Array для лучшего понимания.

    Другими словами, они наследуют свойство constructor из своего прототипа:
  */

  // var x = {};
  // console.log( x )// true
  //
  // let mySuperArray = [];
  // console.log( 'myArray to global array Obj', mySuperArray.__proto__ === window.Array.prototype );

  /*
    Разберем немного работу с ключевым словом new
  */

  function Person(name){
    this.name = name;
  }
  Person.prototype.sayMyName = function(){
    console.log('My name is', this.name);
  };

  let Heisenberg = new Person('Haisenberg');
      Heisenberg.sayMyName();
  console.log( Heisenberg );

  /*
    Что делает ключевое слово New:
    1. Создает новый пустой обьект
    2. Смотрит что мы пытаемся создать, проверяет прототип обьекта и создает
    ссылку с пустого, только что созданого обьекта на обьект "родитель"
    3. Вызывает конструктор и применяет все поля которые в нем присутствуют через
    обращение this к новосозданному обьекту
    4. Возвращает обьект, у которого есть прототип и те свойства что мы указали

    Проверим?
    Напишем свою функцию которая в упрощенном виде будет имитировать работу new

    Назовем её newZ - протому что new зарезервированное слово в JS
  */

    //
    // function newZ( constructor ){
    //   var obj = {}; // Пункт 1
    //   Object.setPrototypeOf(obj, constructor.prototype ); // Пункт 2
    //   // console.log( 'arg', arguments ); // Проверим ааргументы
    //   var argsArray = Array.prototype.slice.apply(arguments); // Приобразуем аргументы в массив
    //   // console.log(argsArray, argsArray[1]);
    //   constructor.apply( obj, argsArray.slice(1) ); // Вызовем конструктор и передадим в него наши аргументы функции
    //   return obj; // Вернем готовый обьект
    // }

    // var Jessie = newZ( Person, 'Jessie' );
        // Jessie.sayMyName();

        // console.log( Jessie );
        // console.log( Heisenberg );

    /*
      Метод Object.create() создаёт новый объект с указанными объектом прототипа
      и свойствами.
    */

    let Human = {
      eat: function(){
        console.log('Human eat food:', this.food);
      }
    };
    console.time('trueobjectCreate');
    let Jessie = Object.create(Human);
    // console.log( Jessie );
    console.timeEnd('trueobjectCreate');
    // Jessie.food = 'Tako';
    // console.log( Jessie );
    // Jessie.eat();

    // Jessie.eat = false;
    // Jessie.eat = function(){
    //   console.log('123');
    // };
    // console.log(Jessie);
    // Jessie.eat();

    /*
      Как работает Object.create и в чем разница с функцией setPrototypeOf()
      Разберем по аналогии с this
    */

    function objectCreate( proto ){
      console.time('objectCreate');
      let obj = {};
      Object.setPrototypeOf(obj, proto);
      return obj;
    }

    let Jessie2 = objectCreate(Human);
        console.timeEnd('objectCreate');

      /*
        А теперь измерим скорость через console.time
        ¯\_(ツ)_/¯
      */
