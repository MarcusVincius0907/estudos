$(function(){
    console.log('hello')

    var box = $('#box');

    var hide = $('#hide');

    var show = $('#show');

    var toggle = $('#toggle');


    hide.click(function(){
        box.hide('slow');
    })

    show.click(function(){
        box.show('slow');
    })

    toggle.click(function(){
        box.toggle('fast');
    })
})