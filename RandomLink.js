// Prefabs
var sites = {
    "rickroll": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "winner": "",
    "recursive": "RandomLink.html",
    "comeback": "https://www.facebook.com/LPECpage"
};
const range = 5000;
var prize = ["winner","rickroll","recursive","comeback"]
var prizeRange = {
    "rickroll": 0,
    "winner": 1410,
    "recursive": 2500,
    "comeback": 4500
}

function checkPrize(number, prizes) {
    var result = 0;
    for (var prize in prizes) {
        if (prize != "winner") result += (number > prizes[prize]);
    }
    return result;
}

//looting machine
function RandomSite() {
    var ranNumber = Math.random()*range + 1;
    // Detect prize whether the "winner" number showed or not
    var index = checkPrize(ranNumber, prizeRange);
    index = index * (ranNumber != prizeRange["winner"]); // Check "winner"
    console.log(index);
    location.href = sites[prize[index]]
}

//Made by LPEC with ❤️