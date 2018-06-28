  // CALLBACKS || функция обратного вызова
  function loadImageCallback( url, callback){
    // DOC: IMAGE CONSTRUCTOR: https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement/Image
    var imageElement = new Image();
    // let imageElement2 = document.createElement('img');

        // Если загрузилось успешно, то вызываем колбек
        // null передаем потому что эррора нету. См. код функции Render Action
        imageElement.onload = function(){
          callback(null, imageElement);
        };
        // Обрабатываем эррор
        imageElement.onerror = function(){
          var message = 'Error on image load at url ' + url;
          callback( new Error(message) );
        };
        // присваеваем новой картинке переданный урл
        imageElement.src = url;
  }

  loadImageCallback('images/cat1.jpg', (error, img) => {
    // throw -> Заканчиваем вполнение программы после выполнения выражания
    if(error){
      throw error;
    }
    RenderImage(img.src);

    loadImageCallback('images/cat2.jpg', (error, img) => {
      // throw -> Заканчиваем вполнение программы после выполнения выражания
      if(error){
        throw error;
      }
      RenderImage(img.src);

      loadImageCallback('images/cat3.jpg', (error, img) => {
        // throw -> Заканчиваем вполнение программы после выполнения выражания
        if(error){
          throw error;
        }
        RenderImage(img.src);

        loadImageCallback('images/cat4.jpg', (error, img) => {
          // throw -> Заканчиваем вполнение программы после выполнения выражания
          if(error){
            throw error;
          }
          RenderImage(img.src);
        });

      });
    });
  });

  // function RenderAction(error, img){
  //   if(error){
  //     throw error;
  //   }
  //   RenderImage(img.src);
  // }

  // loadImageCallback('images/cat3.jpg', RenderAction);
