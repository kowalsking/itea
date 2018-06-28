
      var meowButton = document.getElementById('meowButton');
          // console.log( meowButton );
          meowButton.addEventListener(
            'click',
            function( e ){
              console.log( e );
              console.log( this )
            }
          );

        /*
          call, bind, apply

          Apply:
            fun.apply(thisArg, [argsArray]);

        */

        function add(c, d, z, g) {
          console.log('add context',this);
          console.log('add sum', this.a + this.b + c + d + z + g);
        }
        // add(3,4); //NaN


        var ten = {
          a: 1,
          b: 2,
        };
        // add.call(ten, 3, 4, 5, 6); // 10
        //
        var x = [1,2,4,5];
        // add.apply(ten, x);

        // function Product(name, price) {
        //   this.name = name;
        //   this.price = price;
        //
        //   if (price < 0) {
        //     throw RangeError('Cannot create product ' + this.name + ' with a negative price');
        //   }
        // }
        //
        // function Food(name, price) {
        //   Product.call(this, name, price);
        //   this.category = 'food';
        // }
        //
        // function Toy(name, price) {
        //   Product.call(this, name, price);
        //   this.category = 'toy';
        // }

        // var phone = new Product('Phone', 1000);
        // console.log(phone);
        // var cheese = new Food('feta', 5);
        // var fun = new Toy('robot', 40);
        // console.log( fun, cheese );



        /*
          Bind
        */
        // var myObj = {
        //   sound: 'Guten Morgen',
        //   talk: function(){
        //     console.log('myObj', this, this.sound );
        //   }
        // }
        // myObj.talk();
        // //
        // //
        // var Sasha = { name: 'Sasha', sound: 'Sasha say hello!'};
        // var bindedTalk = myObj.talk.bind(myObj);
        // testBtn.addEventListener('click', bindedTalk);
        // var x = myObj.talk.bind(Sasha);
        // x();

        /*
          Частичный вызов функции
        */

        // function SimlpleFunc( a, b, message ){
        //   console.log( message, a + b );
        // }
        // var SimpleCarrying = SimlpleFunc.bind(null, 1);
        //     SimpleCarrying(6, 'hello');
        //     SimlpleFunc(5, 6, 'bye')
        // //
        // function ManyArgyments( another, brick, in_the, wall){
        //   console.log('ManyArgyments', another, brick, in_the, wall);
        // }
        //
        // var CarryingFunc = ManyArgyments.bind(null, 'We', 'don\'t', 'need', 'no education');
        //     CarryingFunc();
