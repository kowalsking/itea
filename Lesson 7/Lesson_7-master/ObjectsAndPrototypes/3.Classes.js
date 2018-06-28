/*
  Давайте разберемся что такое класс в других языках программирования.
  "Класс — это элемент ПО, описывающий абстрактный тип данных и его частичную или полную реализацию" © Википедия
  И давайте попробуем реализовать простой класс в JS

  1. Создаидм функцию конструтор Robot в которой указывается имя и скорость нового робота.
  2. Зададим ему через прототип два метода - move, stop.
  3. Создадим нового робота Rover
*/

  // function Robot(name){
  //   this.name = name;
  //   this.speed = 0;
  // }
  //
  // Robot.prototype.move = function(speed){
  //   this.speed += speed;
  //   console.log( `Robot ${this.name} is moving with speed ${this.speed}`);
  // };
  //
  // Robot.prototype.stop = function(){
  //   this.speed = 0;
  //   console.log( `Robot ${this.name} is stoped` );
  // };
  //
  // let TransportRobot = new Robot('Rover');
  // console.log( TransportRobot );
  //
  // TransportRobot.move(1);
  // TransportRobot.move(10);
  // TransportRobot.stop();

  /*

    Проверили - вроде все работает как надо.
    Попробуем унаследовать классы этого робота, который умеет только двигаться следующим роботом.
    А так же добавим ему новый метод 'translate'

  */

  // function TranslateRobot( name, langs ){
  //   Robot.apply(this, arguments);
  //   this.langs = langs;
  // }
  // // Создалим обьект с прототипом и наследуем его методы
  // TranslateRobot.prototype = Robot.prototype;
  // TranslateRobot.prototype.translate = function( string ){
  //   console.log( string.split('').reverse().join('') );
  // };
  //
  // let C3PO = new TranslateRobot('C3PO', ['UKR', 'ENG', 'ROM']);
  //     console.log( C3PO );
  //     C3PO.move(20);
  //     C3PO.translate('Селедка');

  // let R2D2 = new TranslateRobot('R2D2', null);
      // R2D2.move(50);
  //


  /*
    А теперь поехали к ES6 Classes
    Создадим пустой класс, новый объект этого класса и выведем его в консоль
  */

  // class Robot {}
  // let TransportRobot = new Robot;
  // console.log( TransportRobot );


  /*
    Расширим методы и синтаксис.
    Нету приватных методов.
  */

    class Robot {
      constructor(name, speed){
        this.name = name;
        this.speed = speed === undefined ? 0 : speed;
        console.log(`new robot: ${this.name} with speed ${this.speed}`);
      }

      move(speed){
        console.log( speed, this.speed );
        this.speed += speed;
        console.log( `Robot ${this.name} is moving with speed ${this.speed}`);
      }
      stop(){
        this.speed = 0;
        console.log( `Robot ${this.name} is stoped` );
      }
    }

    let TransportRobot = new Robot('TransportRobot');
        TransportRobot.move(10);
        TransportRobot.move(1);
        TransportRobot.stop();

     /*
       Дальше создадим extended Class:
     */

    class TranslateRobot extends Robot{
      constructor(name, speed){
        super(name, speed); // Super в конструкторе прокидывает данные дальше в "Класс" родителя
        this.lang = ['UA', "RU", "EN"];
      }
      translate( string ){
        console.log( string.split('').reverse().join('') );
      }
    }

    let C3PO = new TranslateRobot('C3PO');
        C3PO.translate('Do some staff');
        C3PO.move(30);
        console.log( C3PO );


    /*

      Простая истина: Классов в JS не существует.
      В данной реализации, это просто синтаксический сахар над прототипным наследованием. Проверим это.

    */

      let ClassCheck = typeof( TranslateRobot );
      console.log( ClassCheck ); // function
    //
    // /* Попробуем достать метод через прототип */
      console.log( TranslateRobot.prototype.stop ); // function -> BOOM!
      console.log( TranslateRobot.prototype ); //
    //
    /*
      Сделаем немного магии.
    */

      let Magic = TranslateRobot.prototype.move.bind({
        name: 'MagicRobot', // биндим к нашему обьекту имя
        speed: 20 // и стандартную скорость
      });
      Magic(20); // вызываем Robot.move(20);
      console.log('is robot proto?', Robot.isPrototypeOf(TranslateRobot)); // true
      // BOOM~!

      /*
        Попробуем смешать методы и добавить к "класу" через прототпы метод:
      */

      Robot.prototype.beep = function(){
         console.log('beep');
      };
      //
      let BeepRobot = new Robot('BeepRobot');
          BeepRobot.beep();
      //
          C3PO.beep();
          console.log(C3PO);
