$(document).ready(function () {
    console.log("ready!");
    // Array For Chosen Query

    //var subjects = ['cat', 'crash', 'new york']

    var topics = ['cat', 'crash', 'new york']
    // Function for rendering buttons
    function renderButtons() {
        $('#topics').empty();
        for (var i = 0; i < topics.length; i++) {
            var buttons = $('<button type="button" id="gifButton" class="btn btn-primary">' + topics[i] + '</button>').attr("data-query",topics[i]);
            buttons.appendTo('#topics');
        }
    }
    // Function for adding queries to buttons array
    function getNewQuery() {
        event.preventDefault();
        var newQuery = $('#newTopic').val();
        $.trim(newQuery);
        topics.push(newQuery);
        renderButtons();
        console.log(topics);
    }
    // Function for generation of gifs from button click
    function makeGifs() {
    }
    $( "#submit" ).click(function() {
        getNewQuery();
      });


    // Render GIFS from button click
     // Event listener for all button elements
     $('#gifButton').on("click", function() {
        // In this case, the "this" keyword refers to the button that was clicked
        // Assign to window (document) and class not ID
        var query = $(this).attr('.buttons');
        console.log("Button Query: " + query);
    });


// First run of button rendering
    renderButtons();







    
});