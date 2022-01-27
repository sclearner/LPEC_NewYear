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

//looting machine
function RandomSite() {
    var ranNumber = Math.random()*range + 1;
    // Detect prize whether the "winner" number showed or not
    var index = (ranNumber > prizeRange["rickroll"]) + (ranNumber > prizeRange["recursive"]) + (ranNumber > prizeRange["comeback"]);
    index = index * (ranNumber != prizeRange["winner"]); // Check "winner"
    console.log(index);
    location.href = sites[prize[index]]
}

//Made by LPEC with ❤️