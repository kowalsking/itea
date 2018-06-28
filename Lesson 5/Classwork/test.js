/* Написать класс Dog, который наследуется от класcа Animal. 
Класс Animal имеет метод getName (name можно передать в конструктор). 
Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».

Пример использования:

var dog = new Dog ('Aban');

dog.getName () === 'Aban'; // true

dog.bark () === 'Dog Aban is barking'; // true */
function Animal( name ) {
    let getName =  function( name ) {
        console.log('say' + name);
        console.log( Animal.prototype );
    }
}
let animal = new Animal( 'pes' );
Object.setPrototypeOf()
console.log(animal.getName);
function Dog( name ) {

}