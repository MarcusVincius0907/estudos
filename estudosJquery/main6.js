$(function(){
    console.log('hello')

    var box = $('#box')

    box.addClass('boxSquare');

    $(window).scroll(function(){

        

        var top = $(window).scrollTop()

        console.log(top)

        if(top >= 500)
            box.addClass('boxCircle');
        else{
            box.removeClass('boxCircle')
            box.addClass('boxSquare');  
        }
        
             
    })
})