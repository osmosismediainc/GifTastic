$(document).ready(function () {
    console.log("ready!");
    // Array For Chosen Query

    //var subjects = ['cat', 'crash', 'new york']

    var topics = ['cat', 'crash', 'new york']
    // Function for rendering buttons
    function renderButtons() {
        $('#topics').empty();
        for (var i = 0; i < topics.length; i++) {
            var buttons = $('<button type="button" id="gifButton" class="gifButton btn btn-primary">' + topics[i] + '</button>').attr("data-id",topics[i]);
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
    // Function for generation of gifs from button click
    function makeGifs() {
    }
    $( "#submit" ).click(function() {
        getNewQuery();
      });


    // Render GIFS from button click
     // Event listener for all button elements
     //$('.buttons').on("click", function() {
        
        $(document).on('click', '.gifButton', function(){
        
        // In this case, the "this" keyword refers to the button that was clicked
        // Assign to window (document) and class not ID

        
     var query = $(this).data("id");
    console.log("Button Query: " + query);

    // const a = document.querySelectorAll.this('.gifButton').innerHtml;
    // console.log("Button Query: " + a);
    });


// First run of button rendering
    renderButtons();







    
});