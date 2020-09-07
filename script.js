// $.getJSON(
//     "https://www.googleapis.com/books/v1/volumes?q=search+terms", // load the api
//     function(data){

//         // retrieve specific data

//         var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
//         console.log(thumbnail);
        
//         var title = data.items[0].volumeInfo.title;
//         console.log(title);

//         var author = data.items[0].volumeInfo.authors[0];
//         console.log(author);

//         var category = data.items[0].volumeInfo.categories[0];
//         console.log(category);

//         var country = data.items[0].saleInfo.country;
//         console.log(country);

//         var price = data.items[0].saleInfo.saleability;
//         console.log(price);

//         var format = data.items[0].volumeInfo.printType;
//         console.log(format);

//         var description = data.items[0].volumeInfo.description;
//         console.log(description);

//         // display retrieved data

//         $("#thumbnail").attr("src", thumbnail);
//         $("#title").append(title);
//         $("#author").append(author);
//         $("#category").append(category);
//         $("#country").append(country);
//         $("#price").append(price);
//         $("#format").append(format);
//         $("#description").append(description);

//     });

    // create a search/submit function for the form #searchBar
    $('#searchBar').submit(function(e){
        e.preventDefault(); // prevent auto-submission of the form

        var query = $('#searchInput').val() // assign user input to a variable
        var queryReplaced = query.replace(/ /g, '%20'); // replace any spaces with '%20'

        let result = ''

        // create a valid api url with the above variables + access key
        var url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryReplaced + '&key=AIzaSyBBScIhEnsywXl2UrOg90Nd4DEaDRHSdzw'

        $.get(url,function(data){ //retrieve data from the api
            console.log(data);
            $('#searchResults').html('') // clear data when there is new user input (query)

            data.items.forEach(res => { // get a response
                // backtick to allow html format
                result = `
                    <img src=${res.volumeInfo.imageLinks.thumbnail}></img>
                    <h1>${res.volumeInfo.title}</h1>
                    <p>${res.volumeInfo.authors}</p>
                    <p>${res.searchInfo.textSnippet}</p>
                `

                // error caught: "TypeError: Cannot read property of undefined"

                $('#searchResults').append(result); // display retrieved data

            });
        });

    });