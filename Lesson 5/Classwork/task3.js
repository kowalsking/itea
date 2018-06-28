/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }

*/
function Dog( name, breed ) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.eat = function() {
  console.log('My ' + this.name + ' loves fresh bones')
}

Dog.prototype.run = function() {
  console.log('Dogs breed ' + this.breed + ' is very fast')
}

let dog = new Dog('Birma', 'ovcharka');

Dog.prototype.allMethods = function() {
  for (key in this) {
    console.log( key, this[key] );
  }
}

console.log(dog.allMethods());

