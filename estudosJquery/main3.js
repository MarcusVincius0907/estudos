$(function(){
    console.log('hello')
    $('.p1').click(()=>$('.content').text('evento click'))

    $('.p2').dblclick(()=>$('.content').text('evento duplo click'))
    
    $('.p3').focusin(()=>$('.content').text('foco no input'))
    $('.p3').focusout(()=>$('.content').text('perda de foco no input'))
})