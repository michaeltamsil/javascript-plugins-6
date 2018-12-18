$(function(){
    $(document).on("click", '[name="edit"]',
    function() {
        const title = $(this).parents('tr').find('td[name="title"]');
        const changeTitle = window.prompt('change title',title.text())
        if (changeTitle){
            title.text(changeTitle);
        }
    });

    $(document).on( "click", '[name="delete"]', function() {
        const areYouSure = window.confirm('are you sure want to delete this?');
        if (areYouSure){
            $(this).parents('tr').remove();
        }
    });

    let no = `1`;
    const title = 'how to be hired as web design';
    const image = 'https://via.placeholder.com/600/6a0f83';
    let row = $(`<tr style="vertical-align:top">
        <td>${no}</td>
        <td name="title">${title}</td>
        <td><img width="100px" height="100px" src="${image}"</td>
        <td>
            <button class="btn btn-warning" name="edit"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger" name="delete"><i class="fas fa-trash-alt"></i></button>
    </tr>`)
    $('#photos > tbody').append(row);
})