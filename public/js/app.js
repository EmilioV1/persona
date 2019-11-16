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
            for(var i=0; i<response.results.length; i++) {
                // Constructing HTML containing the hero information
                var thisCharacter = {};
                id += 1;
                thisCharacter.id = i;
                var res = response.results[i];
                var fullName = res.biography["full-name"];
                var firstAppearance = res.biography["first-appearance"];
                var publisher = res.biography.publisher;
                var alignment = res.biography.alignment;
                var race = res.appearance.race;
                var birth = res.biography["place-of-birth"];
                var gender = res.appearance.gender;
                var height = res.appearance.height[0];
                var weight = res.appearance.weight[0];
                var intelligence = res.powerstats.intelligence;
                var strength = res.powerstats.strength;
                var speed = res.powerstats.speed;
                var durability = res.powerstats.durability;
                var power = res.powerstats.power;
                var combat = res.powerstats.combat;

                thisCharacter.fullname = res.biography["full-name"];          
                thisCharacter.firstappearance = res.biography["first-appearance"];
                thisCharacter.publisher = res.biography.publisher;
                thisCharacter.alignmnet = res.biography.alignment;               
                thisCharacter.race = res.appearance.race;               
                thisCharacter.placeofbirth = res.biography["place-of-birth"];               
                thisCharacter.gender = res.appearance.gender;
                thisCharacter.height = res.appearance.height[0];              
                thisCharacter.weight = res.appearance.weight[0];               
                thisCharacter.intelligence = res.powerstats.intelligence;               
                thisCharacter.strength = res.powerstats.strength;             
                thisCharacter.speed = res.powerstats.speed;               
                thisCharacter.durability = res.powerstats.durability;               
                thisCharacter.power = res.powerstats.power;
                thisCharacter.combat = res.powerstats.combat;
<<<<<<< HEAD
                thisCharacter.name = res.name;
                thisCharacter.image = res.image.url;
                

                var heroImage = $("<img>").attr("src", res.image.url);
                var heroName = $("<span>").addClass("card-title").text(res.name);
                var heroImageDiv = $("<div>").addClass("card-image");
                heroImageDiv.append(heroImage);
                heroImageDiv.append(heroName);
                

                var cardContent = 
                `<ul>
                <li><strong>Name:</strong> ${fullName}</li>
                <li><strong>Appearance:</strong> ${firstAppearance}</li>
                <li><strong>Publisher:</strong> ${publisher}</li>
                <li><strong>Alignment:</strong> ${alignment}</li>
                <li><strong>Race:</strong> ${race}</li>
                <li><strong>Race:</strong> ${birth}</li>
                <li><strong>Gender:</strong> ${gender}</li>
                <li><strong>Height:</strong> ${height}</li>
                <li><strong>Weight:</strong> ${weight}</li>
                <li><strong>Intelligence:</strong> ${intelligence}</li>
                <li><strong>Strength:</strong> ${strength}</li>
                <li><strong>Speed:</strong> ${speed}</li>
                <li><strong>Durability:</strong> ${durability}</li>
                <li><strong>Power:</strong> ${power}</li>
                <li><strong>Combat:</strong> ${combat}</li>
                </ul>`;
                
                var cardContentDiv = $("<div>").addClass("card-content");
                cardContentDiv.append(cardContent);
                

                var saveButton = $("<a>").text("Save").addClass(
                    "saveButton btn-floating btn-large waves-effect waves-light red").attr("data-id", thisCharacter.id);
                var cardActionDiv = $("<div>").addClass("card-action").append(saveButton);
                

                var heroCard = $("<div>").addClass("card heroCard");
                heroCard.append(heroImageDiv);
                heroCard.append(cardContentDiv);
                heroCard.append(cardActionDiv);
                
                
                var heroCol = $("<div>").addClass("col").attr("id", "heroCol");
                heroCol.append(heroCard);

                
                var heroRow = $("<div>").addClass("row").attr("id", "heroRow");
                heroRow.append(heroCol);
                 

                $("#hero-div").append(heroRow);
=======
                var saveButton = $("<button>").text("Save").addClass("saveButton").attr("data-id", thisCharacter.id).attr("type", "button");
                // Empty the contents of the hero-div, append the new hero content
                heroCard.append(heroImage,heroName,fullName,firstAppearance,publisher,alignment,race,birth,gender,height,weight,intelligence,strength,speed,durability,power,combat,saveButton);
                $("#hero-div").append(heroCard);
>>>>>>> 6e09be817ace56f09ffc241adf36f1852176ca27
                saveArray.push(thisCharacter);
            };
        });
    };

<<<<<<< HEAD
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
=======
$(document).on("click", ".saveButton", function() {
    event.preventDefault();
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
>>>>>>> 6e09be817ace56f09ffc241adf36f1852176ca27

    
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

