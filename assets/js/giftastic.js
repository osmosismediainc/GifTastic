$(document).ready(function () {
    console.log("ready!");
    // Array For Chosen Query

    //var subjects = ['cat', 'crash', 'new york']

    var topics = ['Cat', 'Crash', 'New York']
    // Function for rendering buttons
    function renderButtons() {
        $('#topics').empty();
        for (var i = 0; i < topics.length; i++) {
            var buttons = $('<button type="button" id="gifButton" class="gifButton btn btn-primary">' + topics[i] + '</button>').attr("data-id", topics[i]);
            buttons.appendTo('#topics');
        }
    }
    // Function for adding queries to buttons array
    function getNewQuery() {
        event.preventDefault();
        var newQuery = $('#newTopic').val().trim();
        topics.push(newQuery);
        renderButtons();
        console.log(topics);
    }
    // Function for generation of gifs from button clickMaking new buttons 
    function makeGifs() {
    }
    $("#submit").click(function () {
        getNewQuery();
    });
    // Function for getting the query from the buttons
    function getQuery() {

    }

    // Render GIFS from button click
    // Event listener for query buttons
    $(document).on('click', '.gifButton', function () {
        var query = $(this).data("id"); // Grab the data-id from this button
        console.log("Button Query: " + query); // Confirm the setting of the variable
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            query + "&api_key=sW3YM86CXwhhQAr9Gboj3SjindqphpzB&limit=10";
        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After the data comes back from the API
        .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
  
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var giphyGif = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                giphyGif.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and giphyGif we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(giphyGif);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifsAppearHere").prepend(gifDiv);
              }
            }
          });
    });


    // First run of button rendering
    renderButtons();








});