// create a search/submit function for the form #searchBar
// code reference: https://www.youtube.com/watch?v=C3yHhdsiWH0
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

        result = ''

        if (data.totalItems == 0) {
            // for unmatched user queries, the result will show the following:
            result += `
            <p>We couldn't find anything for your search – <b>${query}</b></p>
            <ul>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
            </ul>
            `
        } 
        else {
            data.items.forEach(res => { // get a response
    
                if (res.volumeInfo.imageLinks != null) {
                    result += `<img src=${res.volumeInfo.imageLinks.thumbnail}></img>`;
                } else {
                    result += `<img src="images/default-thumbnail.png" alt="Default thumbnail image by Booksify" width="128px" height="183px"></img>`; // show default thumbnail if api's thumbnail does not exist
                }
    
                result += `
                <a href="book.html"><h1>${res.volumeInfo.title}</h1></a>
                <p>${res.volumeInfo.authors}</p>
                `
    
                if (res.searchInfo != null) {
                    result += `<p>${res.searchInfo.textSnippet}</p>`;
                }

                selfLink = res.selfLink;
                console.log(selfLink);

            });
        }

        $('#searchResults').append(result); // display retrieved data
        
    });

});
