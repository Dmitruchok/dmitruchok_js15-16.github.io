
function GoogleCallback( jqueryObj, data ) {
  console.log( data );
}

$(function() {

var $findInform = $('form .enter_text');

 $findInform.click(function () {
  $findInform.removeClass('enter_text');
  $findInform.addClass('on_outline');
  $( '#overlay' ).css( 'display', 'block' );
  $( 'input' ).css( 'z-index', '5' );
});

$( '#overlay' ).click(function () {
 $findInform.removeClass( 'on_outline' );
 $findInform.addClass( 'enter_text' );
 $( '#overlay' ).css( 'display', 'none' );
});

$.ajax({
  url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg=large&q=&callback=GoogleCallback&context=?',

  data: {
    abc: 123 //отправка на сервер
  },

  mathod: 'POST',//Отправить Get чтобы получить данные

  dataType: 'jsonp',

  success: function (data) {
  },

  error: function () {

  }
});

function Human() {
  this.name = 'Andrei';
  this.age = 25;
  this.sex = 'male';
  this.weight = 84;
  this.height = 174;
}

function Worker() {
  this.placeWork = 'Radischeva 10/14';
  this.salary = '1300$';
  this.work = function () {
    console.log('Работать');
  }
}

Worker.prototype = new Human();
var newWorker = new Worker(),
workerLast = new Worker(),
workerSay = new Worker();
console.log( 'newWorker.age - ', newWorker.age );
console.log( 'workerLast.sex - ', workerLast.sex );
console.log( 'workerSay - ', workerSay.work());

function Student() {
  this.placeStudy = 'M. Pechersky';
  this.scholarship = '150$';
  this.see = function () {
    console.log( 'Смотреть фильмы' );
  }
}

Student.prototype = new Human();
var newStudent = new Student(),
studentLast = new Student(),
studentScholarship = new Student();

console.log( 'newStudent.height - ', newStudent.height );
console.log( 'studentLast.name - ', studentLast.name );
console.log( 'studentScholarship.scholarship  - ', studentScholarship.scholarship );
});
