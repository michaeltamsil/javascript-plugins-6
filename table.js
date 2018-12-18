$(function(){
    console.log('helo');    
    let no = `1`;
    const title = 'how to be hired as web design';
    const image = 'https://via.placeholder.com/600/6a0f83';
    let row = $(`<tr style="vertical-align:top">
        <td>${no}</td>
        <td>${title}</td>
        <td><img width="100px" height="100px" src="${image}"</td>

    </tr>`)
    $('#photos > tbody').append(row);
})