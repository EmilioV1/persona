$(document).ready(function () {

    var savedHeroesArray = [];

    function searchPersona(name) {

        // Querying the superheroapi.com api for the selected hero
        var queryURL = "https://www.superheroapi.com/api.php/3006715879341905/search/" + name;
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            $("#hero-div").html("");
            var heroCol = $("<div>").addClass("cards").attr("id", "heroCol");
            for (var i = 0; i < response.results.length; i++) {
                // Constructing HTML containing the hero information
                var thisCharacter = {};

                var res = response.results[i];
                thisCharacter.id = res.id;
                thisCharacter.fullname = res.biography["full-name"];
                thisCharacter.firstappearance = res.biography["first-appearance"];
                thisCharacter.publisher = res.biography.publisher;
                thisCharacter.alignment = res.biography.alignment;
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
                thisCharacter.name = res.name;
                thisCharacter.image = res.image.url;


                var heroImage = $("<img>").attr("src", thisCharacter.image);
                var heroName = $("<span>").addClass("card-titles").text(thisCharacter.name);
                var heroImageDiv = $("<div>").addClass("card-image");
                heroImageDiv.append(heroImage);
                heroImageDiv.append(heroName);


                var cardContentDiv = $("<div>").addClass("card-content");
                cardContentDiv.append(cardContent(thisCharacter));


                var saveButton = $("<a>").text("Save").addClass(
                    "saveButton btn-floating btn-large waves-effect waves-light red").attr("data-id", i);
                var cardActionDiv = $("<div>").addClass("card-action").append(saveButton);


                var heroCard = $("<div>").addClass("card heroCard");
                heroCard.append(heroImageDiv);
                heroCard.append(cardContentDiv);
                heroCard.append(cardActionDiv);

                $("#hero-div").append(heroCard);
                // heroCol.append(heroCard);

                savedHeroesArray.push(thisCharacter);
            };

            var heroRow = $("<div>").addClass("row").attr("id", "heroRow");
            heroRow.append(heroCol);


        });
    };

    $(document).on("click", ".saveButton", function () {
        var myID = $(this).data("id");
        console.log(myID);
        console.log(savedHeroesArray[myID]);
        var queryURL = "/api/superheros";
        $.ajax({
            url: queryURL,
            method: "POST",
            data: savedHeroesArray[myID]
        }).then(function (response) {
            console.log(response);
        })
        alert("Saved");
        callSavedHeroes();
    })

    function cardContent(data) {
        var cardContent =
            `<ul>
                <li><strong>Name:</strong> ${data.fullname}</li>
                <li><strong>Appearance:</strong> ${data.firstappearance}</li>
                <li><strong>Publisher:</strong> ${data.publisher}</li>
                <li><strong>Alignment:</strong> ${data.alignment}</li>
                <li><strong>Race:</strong> ${data.race}</li>
                <li><strong>Race:</strong> ${data.placeofbirth}</li>
                <li><strong>Gender:</strong> ${data.gender}</li>
                <li><strong>Height:</strong> ${data.height}</li>
                <li><strong>Weight:</strong> ${data.weight}</li>
                <li><strong>Intelligence:</strong> ${data.intelligence}</li>
                <li><strong>Strength:</strong> ${data.strength}</li>
                <li><strong>Speed:</strong> ${data.speed}</li>
                <li><strong>Durability:</strong> ${data.durability}</li>
                <li><strong>Power:</strong> ${data.power}</li>
                <li><strong>Combat:</strong> ${data.combat}</li>
                </ul>`;
        return cardContent;
    }

    // Event handler for user clicking the hero-search button
    $("#hero-search").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the hero name
        var inputHero = $("#hero-input").val().trim();
        savedHeroesArray = [];
        // Running searchPersona function(passing in the hero as an argument)
        searchPersona(inputHero);
    });

    function callSavedHeroes() {
        var queryURL = "/api/superheros";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            $("#savedHeros").html("");
            response.forEach(character => {
                $("#savedHeros").append(bookmarksLayout(character));
            });
        })
    }

    function bookmarksLayout(character) {
        var charInfo = $("<div>").addClass("character");

        var characterName = $("<p>").text(character.name);
        var heroImageDiv = $("<div>").addClass("heroImageBookmark");
        var heroImage = $("<img>").attr("src", character.image);
        heroImageDiv.append(heroImage);
        var button = $("<span>").addClass("deleteCharacter").attr("data-id", character.id).text("X");
        charInfo.append(heroImageDiv);
        charInfo.append(characterName);
        charInfo.append(button);

        return charInfo;
    }

    $(document).on("click", ".deleteCharacter", function () {
        var id = $(this).data("id");

        var queryURL = "/api/superheros/" + id;
        $.ajax({
            url: queryURL,
            method: "DELETE",
            data: savedHeroesArray[id]
        }).then(function (response) {
            callSavedHeroes();
        })
    })
});