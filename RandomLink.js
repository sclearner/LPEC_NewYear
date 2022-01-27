var sites = [
    'http://reddit.com',
    'http://www.google.com',
    'http://www.stackoverflow.com',
    'http://www.example.com',
    'http://www.youtube.com',
    'http://facebook.com'
];

function RandomSite() {
    var i = Math.floor(Math.random()*5000)+1
    if(i == 1410){
        var index = 0
    }
    else if(i<=4500){
        var index = 1
    }
    else if(i <=5000){
        var index = Math.floor(Math.random()*4)+2
    }
    location.href = sites[index];
}
