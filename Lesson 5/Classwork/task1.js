/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/


let Train = {
    name: 'Chu-Chu',
    speed: 90,
    pas: 30,

    toGo: function() {
        console.log('Поезд ' + this.name + ' везет ' + this.pas + ' пассажиров со скоростью ' + this.speed + ' км/час.');
    },

    toStay: function() {
        this.speed = 0;
        console.log('Поезд ' + this.name + ' остановился. Скорость равна ' + this.speed + ' км/час.');
    },

    toPickUp: function( num ) {
        this.pas += num;
        console.log( this.pas );
    }
}

console.log( Train );