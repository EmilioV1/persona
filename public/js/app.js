$(document).ready(function() {

    var saveArray = [];
    function searchPersona(name) {
        var id = 0;
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
                var thisCharacter = {};
                id += 1;
                thisCharacter.id = i;
                var res = response.results[i];
                var heroCard = $("<div>").addClass("heroCard");
                var heroImage = $("<img>").attr("src", res.image.url);
                thisCharacter.image =res.image.url;
                var heroName = $("<h1>").text(res.name);
                thisCharacter.name = res.name;
                var fullName = $("<h2>").text("Full Name:" + res.biography["full-name"]);
                thisCharacter.fullname = res.biography["full-name"];
                var firstAppearance = $("<h2>").text("First Appearance: " + res.biography["first-appearance"]);
                thisCharacter.firstappearance = res.biography["first-appearance"];
                var publisher = $("<h2>").text("Publisher: " + res.biography.publisher);
                thisCharacter.publisher = res.biography.publisher;
                var alignment = $("<p>").text("Alignment: " + res.biography.alignment);
                thisCharacter.alignmnet = res.biography.alignment;
                var race = $("<p>").text("Race: " + res.appearance.race);
                thisCharacter.race = res.appearance.race;
                var birth = $("<p>").text("Place of Birth: " + res.biography["place-of-birth"]);
                thisCharacter.placeofbirth = res.biography["place-of-birth"];
                var gender = $("<p>").text("Gender: " + res.appearance.gender);
                thisCharacter.gender = res.appearance.gender;
                var height = $("<p>").text("Height: " + res.appearance.height[0]);
                thisCharacter.height = res.appearance.height[0];
                var weight = $("<p>").text("Weight: " + res.appearance.weight[0]);
                thisCharacter.weight = res.appearance.weight[0];
                var intelligence = $("<p>").text("Intelligence: " + res.powerstats.intelligence);
                thisCharacter.intelligence = res.powerstats.intelligence;
                var strength = $("<p>").text("Strength: " + res.powerstats.strength);
                thisCharacter.strength = res.powerstats.strength;
                var speed = $("<p>").text("Speed: " + res.powerstats.speed);
                thisCharacter.speed = res.powerstats.speed;
                var durability = $("<p>").text("Durability: " + res.powerstats.durability);
                thisCharacter.durability = res.powerstats.durability;
                var power = $("<p>").text("Power: " + res.powerstats.power);
                thisCharacter.power = res.powerstats.power;
                var combat = $("<p>").text("Combat: " +  res.powerstats.combat);
                thisCharacter.combat = res.powerstats.combat;
                var saveButton = $("<button>").text("Save").addClass("saveButton").attr("data-id", thisCharacter.id);
                // Empty the contents of the hero-div, append the new hero content
                heroCard.append(heroImage,heroName,fullName,firstAppearance,publisher,alignment,race,birth,gender,height,weight,intelligence,strength,speed,durability,power,combat,saveButton);
                $("#hero-div").append(heroCard);
                saveArray.push(thisCharacter);
                console.log(thisCharacter);
            };
        });
    }; //searchPersona() --- END ---

$(document).on("click", ".saveButton", function() {
    var myID = $(this).data("id");
   console.log(myID);
   console.log(saveArray[myID]);
   var queryURL = "/api/superheros";
   $.ajax({
    url: queryURL,
    method: "POST",
    data: saveArray[myID]
}).then(function(response) {
    console.log(response);
})
})

    
    // Event handler for user clicking the hero-search button
    $("#hero-search").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the hero name
        var inputHero = $("#hero-input").val().trim();

        // Running searchPersona function(passing in the hero as an argument)
        searchPersona(inputHero);  
    });

});
