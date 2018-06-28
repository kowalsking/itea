// Простая функция которая в блоке с id tagert отрисовывает нам картинку с указаным урл.
let RenderImage = (src) => {
  let ImageElement = document.createElement("img");
      ImageElement.src = src;

  let TargetBlock = document.getElementById("target");
      TargetBlock.appendChild(ImageElement);
};
