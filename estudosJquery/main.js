
//sintaxe diferente para  $(document).ready(function()
$(function(){
  
    var x = $('img').attr('src')


    setTimeout(function(){
        $('img').attr('src','./img/imgCorreto.png')
    },3000)
   
    

    if(!x)
        $('img').attr('src','./img/imgErro.png')

    console.log(x)

    

    $(window).resize(function(){
        console.log('mudou tamanho')
        var y = $(window).width()
        console.log(y)
    })

    $(window).scroll(function(){
        console.log('dando scroll')
    })

})

