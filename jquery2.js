$(function(){
    $('[name="clickme"]').click(function(e){
        
        if ($(this).hasClass('btn-success')){
            $(this).removeClass('btn-success').addClass('btn-warning');
        } else {
            $(this).removeClass('btn-warning').addClass('btn-success');
        }
    })

    $('[name="addRemoveElement"]').click(function(){
        
        
    })
})