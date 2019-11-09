$(document).ready(function() {

    function searchPersona(name) {

        // Querying the superheroapi.com api for the selected hero
        var queryURL = "https://www.superheroapi.com/api.php/3006715879341905/search/" + name;
        $.ajax({
          url: queryURL,
          method: "GET",
          dataType: "json"
        }).then(function(response) {
            $("#hero-div").empty();
            for(var i=0; i<response.results.length; i++) {
               // Constructing HTML containing the hero information
          var heroCard = $("<div>").addClass("heroCard")
          var heroImage = $("<img>").attr("src", response.results[i].image.url);
          var heroName = $("<h1>").text(response.results[i].name);
          var fullName = $("<h2>").text("Full Name:" + response.results[i].biography["full-name"]);
          var firstAppearance = $("<h2>").text("First Appearance: " + response.results[i].biography["first-appearance"]);
          var publisher = $("<h2>").text("Publisher: " + response.results[i].biography.publisher);
          var alignment = $("<p>").text("Alignment: " + response.results[i].biography.alignment);
          var gender = $("<p>").text("Gender: " + response.results[i].appearance.gender);
          var height = $("<p>").text("Height: " + response.results[i].appearance.height);
          var weight = $("<p>").text("Weight: " + response.results[i].appearance.weight);
          var intelligence = $("<p>").text("Intelligence: " + response.results[i].powerstats.intelligence);
          var strength = $("<p>").text("Strength: " + response.results[i].powerstats.strength);
          var speed = $("<p>").text("Speed: " + response.results[i].powerstats.speed);
          var durability = $("<p>").text("Durability: " + response.results[i].powerstats.durability);
          var power = $("<p>").text("Power: " + response.results[i].powerstats.power);
          var combat = $("<p>").text("Combat: " +  response.results[i].powerstats.combat);
          var saveButton = $("<button>").text("Save").addClass("saveButton");
    
          // Empty the contents of the hero-div, append the new hero content
         
          $("#hero-div").append(heroCard);
          $(".heroCard").append(heroImage,heroName,fullName,firstAppearance,publisher,alignment,gender,height,weight,intelligence,strength,speed,durability,power,combat,saveButton); 
         
            }
    
          // Printing the entire object to console
          console.log(response);
          console.log(response.results[0].biography)
    
          
        });
      }
    
      // Event handler for user clicking the hero-search button
      $("#hero-search").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the hero name
        var inputHero = $("#hero-input").val().trim();
    
        // Running searchPersona function(passing in the hero as an argument)
        searchPersona(inputHero);
        
      });

})
