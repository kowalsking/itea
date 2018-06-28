/*
  Asynchronous Javascript And Xml
*/

var getUsersUrl = "http://www.json-generator.com/api/json/get/bTvshRCyPS?indent=2";

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Настраиваем метод open
// xhr.open(method, URL, async, user, password)
xhr.open('GET', getUsersUrl, false);
// 3. Отсылаем запрос
xhr.send();
// Нас интересует 3 параметра: xhr.status, xhr.statusText, xhr.responseText
// 4. Если код ответа сервера не 200, то это скорее всего ошибка
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
if (xhr.status != 200) {
  // Обработаем ошибку
  console.log( xhr.status, xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  var myResponse = JSON.parse(xhr.responseText);
  console.log(xhr, myResponse ); // responseText -- текст ответа.
}
