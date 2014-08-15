(function(){
  'use strict';

  $(document).ready(function(){
    //alert('Colors Page is Ready!');
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);
  });

  function paintBackground(){
    var color = $(this).css('background-color');
    $('body').css('background-color', color);
  }

  function addBoxes(){
    var count = $('input[name=count]').val()*1;
    for(var i=0; i<count; i++){
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', randomColor());
      $('#boxes').prepend($box);
    }
  }

  function randomColor(){
    var red   = Math.floor(Math.random()*256),
        green = Math.floor(Math.random()*256),
        blue  = Math.floor(Math.random()*256),
        alpha = Math.random(),
        str = 'rgba('+red+','+green+','+blue+','+alpha+')';
    return str;
  }

})();

