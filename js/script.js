
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

});
