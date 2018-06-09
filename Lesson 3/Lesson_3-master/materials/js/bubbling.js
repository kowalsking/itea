/*
  Bubbling
  При наступлении события обработчики сначала срабатывают
  на самом вложенном элементе, затем на его родителе,
  затем выше и так далее, вверх по цепочке вложенности.
*/

  bubbleParent.onclick = function (event) {
      console.log("onclick в потомке");
      console.log('child', event.target, this);
  };

  bubbleChild.onclick = function (event) {
      event.stopPropagation();
      console.log("onclick в потомке 2");
      console.log('child', event.target, this);
      // this ссылается на элемент на котором висит обработчик
      // event.target ссылается на тот элемент на котором был сделан клик
  };

  /*
    event.stopPropagation() - прекращает всплытие событий вверх по дом дереву
    Рекомендуется использовать механику отмены всплытия очень осторожно
  */
