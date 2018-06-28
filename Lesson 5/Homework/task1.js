/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);
 */
 

  function Comment( name, text, ava ) {
    this.name = name;
    this.text = text;
    this.avatarUrl = ava || this.constImage;

    this.likes = 0;
  }
  
  Comment.prototype.increaseLikes = function() {
    this.likes++;
  }; 
  
  Comment.prototype.constImage = 'img/1.jpg';
  
  function Comments( arr ) {
    this.arr = arr;
  }

  let myCommend = document.getElementById('myComment');

  Comments.prototype.render = function() {
    myCommend.innerHTML = '';

    const list = this.arr.forEach(element => {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.src = element.avatarUrl;

      let text = document.createElement('p');
      text.innerText = element.text;

      let span = document.createElement('span');
      span.innerText = element.likes;
      
      let btnLike = document.createElement('input');
      btnLike.type = 'button';
      btnLike.value = 'Like';
      btnLike.addEventListener('click', () => {
        element.increaseLikes();
        this.render();
      });
      
      div.appendChild(img);
      div.appendChild(text);
      div.appendChild(span);
      span.appendChild(btnLike);

      myCommend.appendChild(div);
    });

  }; 
  
  
  let pervonah =  new Comment( 'Vasya', 'Privet people');
  let pervonah1 =  new Comment( 'sanya', '321', 'img/1.jpg');
  let pervonah2 =  new Comment( 'valya', '123', 'img/2.png');
  let pervonah3 =  new Comment( 's', 'Privet people');
  let pervonah4 =  new Comment( 'Va123sya', 'qwe');
  let pervonah5 =  new Comment( 'Vasadsya', 'Pewople', 'img/4.jpg');

  let CommentsArray = [pervonah, pervonah1, pervonah2, pervonah3];

  const comments = new Comments(CommentsArray);

  comments.render();

  console.log(CommentsArray);

 /*
    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>

*/
