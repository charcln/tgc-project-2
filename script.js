$.getJSON(
    "https://www.googleapis.com/books/v1/volumes?q=search+terms",
    function(data){
        console.log(data);

        // Retrieve specific data from the api end-point

        var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
        console.log(thumbnail);
        
        var title = data.items[0].volumeInfo.title;
        console.log(title);

        var author = data.items[0].volumeInfo.authors[0];
        console.log(author);

        var category = data.items[0].volumeInfo.categories[0];
        console.log(category);

        var country = data.items[0].saleInfo.country;
        console.log(country);

        var price = data.items[0].saleInfo.saleability;
        console.log(price);

        var format = data.items[0].volumeInfo.printType;
        console.log(format);

        var description = data.items[0].volumeInfo.description;
        console.log(description);

        $(".thumbnail").attr("src", thumbnail);
        $(".title").append(title);
        $(".author").append(author);
        $(".category").append(category);
        $(".country").append(country);
        $(".price").append(price);
        $(".format").append(format);
        $(".description").append(description);
    
    })