// create a search/submit function for the form #searchBar
$('#searchBar').submit(function(e){
    e.preventDefault(); // prevent auto-submission of the form

    var query = $('#searchInput').val() // assign user input to a variable
    var queryReplaced = query.replace(/ /g, '%20'); // replace any spaces with '%20'

    let result = ''

    // create a valid api url with the above variables + pagination and access key
    var url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryReplaced + '&maxResults=40&key=AIzaSyBBScIhEnsywXl2UrOg90Nd4DEaDRHSdzw'

    $.get(url,function(data){ //retrieve data from the api
        console.log(data);
        $('#searchResults').html('') // clear data when there is new user input (query)

        data.items.forEach(res => { // get a response

            result = ''
            if (res.volumeInfo.imageLinks != null) {
                result += `<img src=${res.volumeInfo.imageLinks.thumbnail}></img>`;
            } else {
                result += `<img src="images/default-thumbnail.png" alt="Default thumbnail image by Booksify" width="128px" height="183px"></img>`; // show default thumbnail if api's thumbnail does not exist
            }

            result += `<h1>${res.volumeInfo.title}</h1><p>${res.volumeInfo.authors}</p>`;
            if (res.searchInfo != null) {
                result += `<p>${res.searchInfo.textSnippet}</p>`;
            }

            $('#searchResults').append(result); // display retrieved data

        });
    });

});