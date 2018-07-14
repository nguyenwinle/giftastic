$(document).ready(function() {

    var topics = ["spiderman", "iron man", "thor", "guardians of the galaxy", "captain america", "black panther", "doctor strange"];
    

function gifInfo() {

    var gifImage = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=APcYrbFKCKhTApeLNz9YIsO6uPMqSgzL&q=" + gifImage + "&limit=10&offset=0&rating=G&rating=PG&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            $(".topic").empty();
    
            console.log(response);
            // Creating a div to hold the topic
        
        for (var i = 0; i < response.data.length; i++) {
            var image = response.data[i];

            var topicDiv = $("<div class='topic'>");
    
            // Storing the rating data
            var rate = image.rating;
        
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rate);
        
            // Displaying the rating
            topicDiv.append(pOne);
                
            // get image
            var photo = image.images.downsized.url;
    
        
            // Creating an element to hold the image
            var image = $("<img>").attr("src", photo);
        
            // Appending the image
            topicDiv.append(image);
        
            // Putting the entire topic above the previous topic
            $("#topic-view").append(topicDiv);
            

    }
    
        });
    }


      
      function renderButtons() {

         $("#topic-view").empty();

        for (var i = 0; i < topics.length; i++) {

            // Then dynamicaly generating buttons for each topic in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("gifs");
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

      $(document).on("click", ".gifs", gifInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

});
