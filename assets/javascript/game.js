

// CHARACTER OBJECTS
var characters = {
    char1: {
        name: "Artus Cimber",
        maxHp: 100,
        currentHp: 100,
        baseAttack: 6,
        scalingAttack: 6,
        counter: 5,
        status: "active"
    },
    char2: {
        name: "Drizzt Do'Urden",
        maxHp: 120,
        currentHp: 120,
        baseAttack: 8,
        scalingAttack: 8,
        counter: 10,
        status: "active"
    },
    char3: {
        name: "Xanathar",
        maxHp: 150,
        currentHp: 150,
        baseAttack: 10,
        scalingAttack: 10,
        counter: 20,
        status: "active"
    },
    char4: {
        name: "Elminster",
        maxHp: 180,
        currentHp: 180,
        baseAttack: 12,
        scalingAttack: 12,
        counter: 25,
        status: "active"
    },
    filler: {
        name: "filler"
    }
}
var yourChar = "filler";
var defenderChar = "filler";
var gameStatus = "ongoing";
// Initializing
$("#attack").hide();
// Applying character attributes
$("#char1-box").append("<p class='hp-display' id='char1-hp'>" + characters.char1.currentHp + "/" + characters.char1.maxHp + "</p>");
$("#char2-box").append("<p class='hp-display' id='char2-hp'>" + characters.char2.currentHp + "/" + characters.char2.maxHp + "</p>");
$("#char3-box").append("<p class='hp-display' id='char3-hp'>" + characters.char3.currentHp + "/" + characters.char3.maxHp + "</p>");
$("#char4-box").append("<p class='hp-display' id='char4-hp'>" + characters.char4.currentHp + "/" + characters.char4.maxHp + "</p>");

// When player clicks a character
$(".choose-char").on("click", function (e) {
    var classString = e.currentTarget.getAttribute("class");
    var idString = e.currentTarget.getAttribute("id");
    // Choose your character and move others to enemy section
    if (classString.includes("choose-char") && gameStatus === "ongoing") {
        $("#your-char-title").html("<h2>Your Character</h2>");
        $("#enemy-char-title").html("<h2>Choose An Enemy to Attack</h2>");
        $("#choose-char-title").remove();
        $("#" + idString + "-name").hide().appendTo("#your-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#your-box").show("fast");
        $("#" + idString).hide().appendTo("#your-box").show("fast");
        $("#" + idString).attr("class", "your-char portrait");
        $("#choose-col").hide().appendTo("#enemies-row").show("fast");
        $("#choose-col").attr("id", "enemies-col");
        $(".choose-char").attr("class", "enemy-char portrait");
        $("#alert-2").text("");
        characters[idString].status = "complete";
        yourChar = [idString];
    }
    // Choose your defender and lock other enemies
    if (classString.includes("enemy-char") && gameStatus === "ongoing") {
        $("#defender-char-title").html("<h2>Defender</h2>");
        $("#enemy-char-title").html("<h2>Enemies Available To Attack</h2>");
        $("#attack").show();
        $("#" + idString + "-name").hide().appendTo("#defender-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#defender-box").show("fast");
        $("#" + idString).hide().appendTo("#defender-box").show("fast");
        $("#" + idString).attr("class", "defender-char portrait");
        $(".enemy-char").attr("class", "locked-enemy portrait");
        $("#alert-1").text("Click The Attack Button to Fight");
        $("#alert-2").text("Click The Defender to Choose A New Enemy");
        defenderChar = [idString];
    }
    // Deselects defender and unlocks all enemies
    if (classString.includes("defender-char") && gameStatus === "ongoing") {
        $("#enemy-char-title").html("<h2>Choose An Enemy to Attack</h2>");
        $("#defender-char-title").html("<h2></h2>");
        $("#attack").hide();
        $("#" + idString + "-name").hide().appendTo("#" + idString + "-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#" + idString + "-box").show("fast");
        $("#" + idString).hide().appendTo("#" + idString + "-box").show("fast");
        $(".locked-enemy").attr("class", "enemy-char portrait");
        $("#" + idString).attr("class", "enemy-char portrait");
        $("#alert-1").text("");
        $("#alert-2").text("");
        defenderChar = "filler";
    }
});
// Attack button adjusts hp and alerts damage numbers
$("#attack").on("click", function (event) {
    characters[defenderChar].currentHp = (characters[defenderChar].currentHp - characters[yourChar].scalingAttack);
    $("#" + defenderChar + "-hp").text(characters[defenderChar].currentHp + "/" + characters[defenderChar].maxHp);
    characters[yourChar].currentHp = (characters[yourChar].currentHp - characters[defenderChar].counter);
    $("#" + yourChar + "-hp").text(characters[yourChar].currentHp + "/" + characters[yourChar].maxHp);
    $("#alert-1").text("You attacked " + characters[defenderChar].name + " for " + characters[yourChar].scalingAttack + " hp!");
    $("#alert-2").text(characters[defenderChar].name + " counter attacked you for " + characters[defenderChar].counter + " hp!");
    characters[yourChar].scalingAttack = characters[yourChar].scalingAttack + characters[yourChar].baseAttack;
    // Determines if you lost and alerts
    if (characters[yourChar].currentHp < 1) {
        $("#" + yourChar + "-hp").text("0/" + characters[yourChar].maxHp);
        gameStatus = "lost";
        $("#end-box").append("<div id='end-screen'></div>");
        $("#end-screen").append("<h2 id='win-lose'>You Lost</h2>");
        $("#" + defenderChar).appendTo("#end-screen");
        $("#" + defenderChar).attr("class", "your-char portrait end-port");
        $("#end-screen").append("<h2 id='defeated'>You Have Been Defeated By " + characters[defenderChar].name + "</h2>")
        $("#alert-2").text("");
    }
    // Determines if you defeated the defender, alerts, and unlocks enemies
    if (characters[defenderChar].currentHp < 1) {
        $("#alert-1").text("You defeated " + characters[defenderChar].name + "!");
        $("#enemy-char-title").html("<h2>Choose An Enemy to Attack</h2>");
        $("#defender-char-title").html("<h2></h2>");
        $("#attack").hide();
        characters[defenderChar].status = "complete";
        $("#" + defenderChar).remove();
        $("#" + defenderChar + "-hp").remove();
        $("#" + defenderChar + "-name").remove();
        $(".locked-enemy").attr("class", "enemy-char portrait");
    }
    if (characters.char1.status === "complete" && characters.char2.status === "complete" && characters.char3.status === "complete" && characters.char4.status === "complete") {
        gameStatus = "won";
        $("#end-box").append("<div id='end-screen'></div>");
        $("#end-screen").append("<h2 id='win-lose'>You Win!</h2>");
        $("#" + yourChar).appendTo("#end-screen");
        $("#" + yourChar).attr("class", "your-char portrait end-port");
        $("#end-screen").append("<h2 id='defeated'>All Enemies Have Been Defeated</h2>")
        $("#alert-2").text("");
    }
})




















