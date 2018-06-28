/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент, второй попадает в него через метод .call(obj)
    1.2 Ф-я не принимает никаких аргументов, а необходимые настройки полностью передаются через bind
    1.3 Ф-я принимает фразу для заголовка, обьект с настройками передаем через .apply();

*/

let colors = {
    background: 'blue',
    color: 'white'
}

let myCall = function( color ) {
    document.body.style.background = background;
    document.body.style.color = this.color;
}

let myBind = function() {
    document.body.style.background = this.background;
    document.body.style.color = this.color;
}


let myApply = function( name ) {
    let h1 = document.querySelector('h1');
    h1.innerText = name;
    document.body.style.background = this.background;
    document.body.style.color = this.color;
}

// myCall.call(colors, 'green');
// let bind = myBind.bind( colors );
// bind(); 

myApply.apply(colors, ['JavaScript']);  