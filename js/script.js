
function GoogleCallback(jqueryObj, data) {
console.log(data);
}

$(function() {

var $form = $('.wrapper');
var $findInform = $('form .enter_text');
var $borderLight = false;

 $findInform.click(function () {
     $findInform.removeClass('enter_text');
     $findInform.addClass('on_outline');

});

$form.click(function () {
 $findInform.removeClass('on_outline');
 $findInform.addClass('enter_text');
});

$.ajax({
  url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=your-key&q=PHP&callback=GoogleCallback&context=?',

  data: {
    abc: 123 //отправка на сервер
  },

  mathod: 'POST',//Отправить Get чтобы получить данные

  dataType: 'jsonp',

  success: function () {

  },

  error: function () {

  }
});

});
