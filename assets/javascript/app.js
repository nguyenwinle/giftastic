$(document).ready(function() {

    var topics = ["spiderman", "iron man", "thor", "guardians of the galaxy", "captain america", "black panther", "doctor strange"];
    

    var gifImage = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=APcYrbFKCKhTApeLNz9YIsO6uPMqSgzL&q=" + gifImage + "&limit=25&offset=0&rating=G&lang=en";

    function gifInfo() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
    
            console.log(response);
            // Creating a div to hold the topic
            

                     
            var image = response.data[i];
    
            var topicDiv = $("<div class='topic'>");
    
            // Storing the rating data
            var rate = image.rating;
        
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rate);
        
            // Displaying the rating
            topicDiv.append(pOne);
                
            // get image
            var photo = image.images.original.url;
    
        
            // Creating an element to hold the image
            var image = $("<img>").attr("src", photo);
        
            // Appending the image
            topicDiv.append(image);
        
            // Putting the entire topic above the previous topic
            $("#topic-view").prepend(topicDiv);
    
        
    
        });
    }


      
      function renderButtons() {

        $("#topic-view").empty();

        for (var i = 0; i < topics.length; i++) {

            // Then dynamicaly generating buttons for each topic in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("topic");
            // Adding a data-attribute with a value of the topic at index i
            a.attr("data-name", topics[i]);
            // Providing the button's text with a value of the topic at index i
            a.text(topics[i]);
            // Adding the button to the HTML
            $("#topic-view").append(a);

            //loop through the array
            // for each of the elements, create a button for it
      }
    }

    // This function handles events where one button is clicked
    $("#add-topic").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var topic = $("#topic-input").val().trim();
        // The topic from the textbox is then added to our array
        topics.push(topic);

        // calling renderButtons which handles the processing of our topics array
        renderButtons();

      });

      $(document).on("click", ".topic", gifInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


    //   $(".topic").on("click", function() {
    //     $(this).
    //   });
// when user adds an item
// add it to our array

//when user presses on that item
// loop through array
// and display it on the page


// Instructions



// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.


// We chose animals for our theme, but you can make a list to your own liking.



// Your app should take the topics in this array and create buttons in your HTML.


// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.

});
