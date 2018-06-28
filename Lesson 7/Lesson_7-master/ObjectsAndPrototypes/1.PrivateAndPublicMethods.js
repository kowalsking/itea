  /*
    Objects
  */

  function generateMyObject( name ){
    var defaultPopulation = 0;

    this.name = name;
    this.doSmsng = function(){
      console.log('defaultPopulation:', defaultPopulation );
    };
    this.population = GenerateRandomNum(10000);

    function GenerateRandomNum( q ){
      return Math.floor( Math.random() * q);
    }
    function privateMethod(){
      this.name = "rrr";
    }
    this.publicMethod = function(){
      console.log('before', this.name);
      privateMethod.apply(this);
      console.log('after', this.name);
    };

    this.doPublic = function(){
      this.population = defaultPopulation;
    };
    // return this;
  }

  var obj = new generateMyObject('Dexter');
      obj.doSmsng();
      console.log(obj);
      obj.publicMethod();
