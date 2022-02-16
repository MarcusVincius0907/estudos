$(function(){

    console.log('hello');
    
    
    var title = $('.in1').attr('title');

    var input1 = $('.in1');

    var input2 = $('.in2');

    var input3 = $('.in3');

    var input4 = $('.in4');

    var div = $('#div');


    input1
        .val(title)
        .css('background-color','#e1dddd')
        .css('padding-left','10px')
        .focusin(function(){
            input1.css('background-color','white')
            if(input1.val() == title){
                input1.val('')
            }
        })
        .focusout(function(){
            input1.css('background-color','#e1dddd')
        })

    
    input2.keyup(function(){
        div.text(input2.val())
    })  

    input3.blur(function(){
        div.text('on blur ' + $(input3).attr('name'))
    })

    input4.change(function(){
        div.text('change happening')
    })
    



})