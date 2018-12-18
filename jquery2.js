$(function(){
    $('[name="changeClass"]').click(function(){
        
        if ($(this).hasClass('btn-success')){
            $(this).removeClass('btn-success').addClass('btn-warning');
        } else {
            $(this).removeClass('btn-warning').addClass('btn-success');
        }
    })

    $('[name="addRemoveElement"]').click(function(){
        const isHaveChild = ( $('#content').children().length );
        if (isHaveChild){
            $('#content').empty();
        }else{
            $('#content').append(`
            <span class="text-danger">Danger, do not delete this words</span>
            `)
        }
    })
})