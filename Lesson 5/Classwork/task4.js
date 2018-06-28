/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.
    */
    document.getElementById
   document.getElementById('c');
   document.getElementById('in').oninput = function() {
        // const OFFSET = 3;
        let str = this.value;
        let out = '';
        let offset = +c.value;
        // из кода в символ 
        // из символа в код
        
        for(let i = 0; i < str.length; i++) {
          let code = str.charCodeAt(i)
          code += offset;
          out += String.fromCharCode(code);
        }
        document.getElementById('out').innerText = out;
        console.log(out);
      } 

      document.getElementById('din').oninput = function() {
        // const OFFSET = 3;
        let offset = +c.value;
        let str = this.value;
        let out = '';
        // из кода в символ 
        // из символа в код
        
        for(let i = 0; i < str.length; i++) {
          let code = str.charCodeAt(i)
          code -= offset;
          out += String.fromCharCode(code);
        }
        document.getElementById('dout').innerText = out;
        console.log(out);
      }  
    
    
   
   /*

    Написать функцию дешефратор которая вернет слово в изначальный вид.
*/
   function decryptCesar( word , n ) {
    
   }

   
/*
    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.

    Например:
      encryptCesar('Word', 3);
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1('Sdwq', 3);
      decryptCesar1(...)
      ...
      decryptCesar5(...)

*/
