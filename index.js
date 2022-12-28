//Section arrays
const beginners = ['https://wolfgame.fyi/starterpacks', 'https://www.wolfgame.guide/'];
const numbers = ['https://wolfgame.live/', 'https://www.wolfgame.tools/', 'https://wolfgame.bid/'];
const wolfgame = ['https://wolfgame.guru/', 'https://wolfland.live/', 'https://wg.metascraper.io/'];
const fun = ['https://wolfgame.xyz/', 'https://wolfgametimemachine.com/', 'https://wolfgame.wiki/'];

window.onload = function(event) {
    document.getElementById("year").innerHTML = new Date().getFullYear();

    function fillSections(array, index, id) {
        //console.log(id);
        var mydiv = document.getElementById(id);
        var aTag = document.createElement('a');
        aTag.setAttribute('href', array[index]);
        aTag.innerText = array[index];
        aTag.className = "w3-button w3-round-xlarge w3-theme-l1 w3-border link";
        aTag.target = "_blank";
        mydiv.appendChild(aTag);
    }

    //loop through arrays and add links to sub sections
    for (var b = 0; b < beginners.length; b++) {
        fillSections(beginners, b, 'beginner');
    }
    for (var n = 0; n < numbers.length; n++) {
        fillSections(numbers, n, 'numbers');
    }
    for (var w = 0; w < wolfgame.length; w++) {
        fillSections(wolfgame, w, 'wolfGame');
    }
    for (var f = 0; f < fun.length; f++) {
        fillSections(fun, f, 'fun');
    }

};