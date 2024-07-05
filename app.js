

// handles the giph request 
async function giphReq(q) {
    const api_key = '05NWgkkSoCZQp7H9u7oaaAos47hZo8I5';
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: 
        {
            q,
            api_key
        }
    });
    // console.log(res.data.data[0]);
    //console.log(res.data[0].images.original.url);

    // $('#giph-container').append(`<img src="${res.data.data[0].images.original.url}">`); 
    return res;
}

// appends the giph to the page
async function appendGiph(res) {
    
    const data = await res.data.data;

    const randomGiph = Math.floor(Math.random() * ( data.length + 1));


    $('#giph-container').append(`<img class="giph" src="${data[randomGiph].images.original.url}">`); 
    console.log(randomGiph);
}

// handles the form on submiting the form
$('form').on('submit', async function (e) {
    e.preventDefault();
    const searchWord = $('#search-form').val();
    const res = await giphReq(searchWord);
    appendGiph(res);

    console.log(searchWord);
    
    $(e.target).children('input').val('');


});

// handles click on the delte button and delets all giphs in the giph div
$('#delete').on('click', function (e) {
    $('#giph-container').html('');

})

