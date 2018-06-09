// DOMContentLoaded – браузер полностью загрузил HTML и построил DOM-дерево.
// load – браузер загрузил все ресурсы.

  // Аналог jQuery $(document).ready()
  document.addEventListener("DOMContentLoaded", function(event) {


      console.log("DOM fully loaded and parsed");
  });

  appendImage.addEventListener('click', function(){
    var ImageCat = new Image();
        ImageCat.onload = function(){
          alert( ImageCat.src, 'was loaded');
          ImageCat.classList.add('loadedImage');
        };

        ImageCat.onerror = function(err){
          new Error('Some Error on load', err);
        };
        ImageCat.src = 'images/cat4.jpg';
        appendBlock.appendChild(ImageCat);
  });
