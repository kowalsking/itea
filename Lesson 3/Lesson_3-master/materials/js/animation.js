function ToggleClass( e ){
  e.target.classList.toggle('animation');
}
//
var transition = document.getElementById('transition');
    transition.addEventListener('click', ToggleClass);
//

function transitionAnimation(e){
   // Сработает для КАЖДОГО анимированого свойства
  console.log(e);
  console.log('Animation end', e.propertyName);
  transition.removeEventListener('click', ToggleClass);
  // transition.addEventListener('click', ToggleClass);
}
transition.addEventListener('transitionend', transitionAnimation);
setTimeout( function(){
  transition.classList.add('animation');
}, 1000);
