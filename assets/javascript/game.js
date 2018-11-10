

// CHARACTER OBJECTS
var characters = {
    char1: {
        name: "char1",
        hp: 100,
        attack: 6,
        counter: 5,
        status: "choosing"
    },
    char2: {
        name: "char2",
        hp: 120,
        attack: 8,
        counter: 10,
        status: "choosing"
    },
    char3: {
        name: "char3",
        hp: 150,
        attack: 10,
        counter: 20,
        status: "choosing"
    },
    char4: {
        name: "char4",
        hp: 180,
        attack: 12,
        counter: 25,
        status: "choosing"
    }
}
var yourChar;
var defenderChar;
// Initializing
$("#alert-1").text("Choose Your Character");
// Applying character attributes
$("#char1-box").append("<p class='name-display' id='char1-name'>" + characters.char1.name + "</p>");
$("#char1-box").append("<p class='hp-display' id='char1-hp'>" + characters.char1.hp + "</p>");
$("#char2-box").append("<p class='name-display' id='char2-name'>" + characters.char2.name + "</p>");
$("#char2-box").append("<p class='hp-display' id='char2-hp'>" + characters.char2.hp + "</p>");
$("#char3-box").append("<p class='name-display' id='char3-name'>" + characters.char3.name + "</p>");
$("#char3-box").append("<p class='hp-display' id='char3-hp'>" + characters.char3.hp + "</p>");
$("#char4-box").append("<p class='name-display' id='char4-name'>" + characters.char4.name + "</p>");
$("#char4-box").append("<p class='hp-display' id='char4-hp'>" + characters.char4.hp + "</p>");

// When player clicks a character
$(".choose-char").on("click", function (e) {
    var classString = e.currentTarget.getAttribute("class");
    var idString = e.currentTarget.getAttribute("id");
    characters[idString].status = "not choosing"
    // Choose your character and move others to enemy section
    if (classString.includes("choose-char")) {
        $("#" + idString + "-name").hide().appendTo("#your-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#your-box").show("fast");
        $("#" + idString).hide().appendTo("#your-box").show("fast");
        $("#" + idString).attr("class", "your-char");
        $("#choose-col").hide().appendTo("#enemies-row").show("fast");
        $("#choose-col").attr("id", "enemies-col");
        $(".choose-char").attr("class", "enemy-char ");
        $("#alert-1").text("Choose An Enemy to Fight");
        characters[idString].status = "your";        
        yourChar = [idString];
        for (var key in characters) {
            if (characters[key].status === "choosing") {
                characters[key].status = "enemy";
            }
        }
    }
    // Choose your defender and lock other enemies
    if (classString.includes("enemy-char")) {
        $("#" + idString + "-name").hide().appendTo("#defender-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#defender-box").show("fast");
        $("#" + idString).hide().appendTo("#defender-box").show("fast");
        $("#" + idString).attr("class", "defender-char");
        $(".enemy-char").attr("class", "locked-enemy");
        $("#alert-1").text("Click The Attack Button to Fight");
        $("#alert-2").text("Click The Defender to Choose A New Enemy");
        characters[idString].status = "defender";
    }
    // Deselects defender and unlocks all enemies
    if (classString.includes("defender-char")) {
        $("#" + idString + "-name").hide().appendTo("#" + idString + "-box").show("fast");
        $("#" + idString + "-hp").hide().appendTo("#" + idString + "-box").show("fast");
        $("#" + idString).hide().appendTo("#" + idString + "-box").show("fast");
        $(".locked-enemy").attr("class", "enemy-char");
        $("#" + idString).attr("class", "enemy-char");
        $("#alert-1").text("Choose An Enemy to Fight");
        $("#alert-2").text("");
        characters[idString].status = "enemy";
    }
})














