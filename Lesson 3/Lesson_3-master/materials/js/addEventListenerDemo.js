// // Demo 7
function logger( event ){ console.log('logger'); }
// //
function removeListenerFromStuff(){
    // OFF
    doStuff.setAttribute('disabled', true);
    StopStuff.setAttribute('disabled', true);
    // ON
    AddStuff.removeAttribute('disabled');
    // LISTENER REMOVE
    doStuff.removeEventListener('click', logger );
  }
// //
function addListenerToStuff(){
  // ON
    doStuff.removeAttribute('disabled');
    StopStuff.removeAttribute('disabled');
  // OFF
    AddStuff.setAttribute('disabled', true);
  // LISTENER ADD
    StopStuff.addEventListener('click', removeListenerFromStuff);
    doStuff.addEventListener('click', logger );
};

doStuff.addEventListener('click', logger );
StopStuff.addEventListener('click', removeListenerFromStuff);
AddStuff.addEventListener('click', addListenerToStuff);
