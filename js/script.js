
$(function() {

var $findInform = $('form .enter_text');

 $findInform.click(function () {
  $findInform.removeClass('enter_text');
  $findInform.addClass('on_outline');
  $( '#overlay' ).css( {
    display: 'block' ,
    'z-index': 2,
  });
  $( 'input' ).css( {
    position: 'relative',
    'z-index': 5
  });
});

$( '#overlay' ).click(function () {
 $findInform.removeClass( 'on_outline' );
 $findInform.addClass( 'enter_text' );
 $( '#overlay' ).css( 'display', 'none' );
});

function loadPicture() {
  var $inputText = $( '#txt' ).val();
  $.ajax({
    url: 'https://pixabay.com/api/?key=3630931-670473688b01fdf5a6341f310&q=yellow+flowers&image_type=photo&cat=&min_width=&min_height=&q='+$inputText+'&order=popular',
    mathod: 'POST',//Отправить Get чтобы получить данные
    dataType: 'jsonp',
    success: function (data) {
      console.log('Load information');
    },
    error: function () {
      console.log('Appired problem!!');
    }
  }).done(function Callback( data ) {
    $('.wrapper').append('<div class="result"></div>')
    $.each( data.hits, function ( i, hits ) {
      $( '<img/>' ).attr( 'src', hits.previewURL ).appendTo( '.result' );
    })
  });
};

$( '#find' ).click(function (){
    $('.result').remove('.result');
    loadPicture();
  });

$( '#txt' ).keypress(function enterPush(e) {
  if(e.keyCode == 13) {
    $('.result').remove('.result');
    event.preventDefault();
    loadPicture();
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
workerSay.work();

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
studentScholarship = new Student(),
studentSay = new Student();

console.log( 'newStudent.height - ', newStudent.height );
console.log( 'studentLast.name - ', studentLast.name );
console.log( 'studentScholarship.scholarship  - ', studentScholarship.scholarship );
studentSay.see();
});
