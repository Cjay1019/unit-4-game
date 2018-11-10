

// CHARACTER OBJECTS
var char1 = {
    name: "char1",
    hp: 100,
    attack: 6,
    counter: 5,
    status: "choosing"
}
var char2 = {
    name: "char2",
    hp: 120,
    attack: 8,
    counter: 10,
    status: "choosing"
}
var char3 = {
    name: "char3",
    hp: 150,
    attack: 10,
    counter: 20,
    status: "choosing"
}
var char4 = {
    name: "char4",
    hp: 180,
    attack: 12,
    counter: 25,
    status: "choosing"
}

// Initializing
$("#alert-1").text("Choose Your Character");

// When player clicks a character
$(".choose-char").on("click", function (e) {
    var classString = e.currentTarget.getAttribute("class");
    var idString = e.currentTarget.getAttribute("id");

    // Choose your character and move others to enemy section
    if (classString.includes("choose-char")) {
        $("#" + idString).hide().appendTo("#your-box").show("fast");
        $("#" + idString).attr("class", "your-char");
        $("#choose-col").hide().appendTo("#enemies-row").show("fast");
        $("#choose-col").attr("id", "enemies-col");
        $(".choose-char").attr("class", "enemy-char ");
        $("#alert-1").text("Choose An Enemy to Fight");
        window[idString].status = "your";
    }

    // Choose your defender and lock other enemies
    if (classString.includes("enemy-char")) {
        $("#" + idString).hide().appendTo("#defender-box").show("fast");
        $("#" + idString).attr("class", "defender-char");
        $(".enemy-char").attr("class", "locked-enemy");
        $("#alert-1").text("Click The Attack Button to Fight");
        $("#alert-2").text("Click The Defender to Choose A New Enemy");
        window[idString].status = "defender";
    }

    // Deselects defender and unlocks all enemies
    if (classString.includes("defender-char")) {
        $("#" + idString).hide().appendTo("#" + idString + "-box").show("fast");
        $(".locked-enemy").attr("class", "enemy-char");
        $("#" + idString).attr("class", "enemy-char");
        $("#alert-1").text("Choose An Enemy to Fight");
        $("#alert-2").text("");
        window[idString].status = "enemy";
    }
})














