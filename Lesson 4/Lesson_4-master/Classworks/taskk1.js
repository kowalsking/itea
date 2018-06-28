document.addEventListener('DOMContentLoaded', function(){
     var myForm = document.forms.MyValidateForm;
     var agree = document.getElementById('agree');
    //  console.log(myForm.elements);
      
      function ChangeStatus( element, status){
        if(status){
          element.classList.add('OK');
          element.classList.remove('error');
        } else {
          element.classList.add('error');
          element.classList.remove('OK');
        }
      }

      
      myForm.addEventListener("submit", function ( event ) {

      event.preventDefault();
      
      var myFormElements = myForm.elements;
      var myArrayCollection = Array.from(myForm.elements);
      var error = false;

        for(var i = 0; i < myArrayCollection.length; i++){
          var item = myArrayCollection[i];
          // console.log(myArrayCollection[i].type, myArrayCollection[i].value !== '', myArrayCollection[i].type !== 'submit')
          
          if( item.type !== 'submit' && item.type !== 'checkbox'){
              if( item.value !== ''){
                ChangeStatus( item, true );
              } else {
                ChangeStatus( item, false );
                error = true;
              }
          }
        }

        if( !error ){
          console.log(myFormElements.pas1.value, myFormElements.pas2.value );
          if(myFormElements.pas1.value !== myFormElements.pas2.value){
            ChangeStatus( myFormElements.pas1, false );
            ChangeStatus( myFormElements.pas2, false );
          } else {
            ChangeStatus( myFormElements.pas1, true );
            ChangeStatus( myFormElements.pas2, true );
          }
        }
        
      });
      
      agree.addEventListener('click', function(e){
        if( e.target.checked ){
          submit.removeAttribute('disabled');
        } else {
          submit.setAttribute('disabled', true);
        }
      })

    })
