/*
  FETCH
*/

function FetchDemo(){
  let url = 'http://test.api.com.ua';
  let options = {
    // Все опции:
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    method: 'POST', // GET, PUT, DELETE etc.
    headers: headers,
    /*
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
      Сюда можно передать любые http headers как просто обьектом:
      {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
      Или через конструктор

      var myHeaders = new Headers();
          myHeaders.append("Content-Type", "text/plain");
          myHeaders.append("Content-Length", 255);
          myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

      https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    */
    body: body, // Любые данные для вашего запроса
    mode: 'no-cors',
    /*
      CORS: Cross-Origin Resourse Shairing
      Если просто: то в каком режиме кросс-доммености будет сделан запрос
      Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
  };
  fetch( url,
    {method: 'POST', header: {"Content-type": "application/x-www-form-urlencoded"} )
  .then( function( res ){

  }
    // promise stuff
  );
}
