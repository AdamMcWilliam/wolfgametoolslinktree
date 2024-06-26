//Section arrays
const beginners = ['https://shepslibrary.com/','https://wolfgame.fyi/starterpacks', 'https://www.wolfgame.guide/', 'https://www.youtube.com/playlist?list=PL7Ygof6kR_DQ7aRV-K0Tg2YhXE2RULbP1','https://www.youtube.com/watch?v=Kbp4DNkmpZo'];
const numbers = ['https://wolfgame.live/', 'https://www.wolfgame.tools/', 'https://wolfgame.bid/', 'https://www.feralflips.com/', 'https://plums.world/', 'https://burningwool.com/'];
const wolfgame = ['https://wolfgame.guru/', 'https://wolfland.live/', 'https://wg.metascraper.io/', 'https://wolfgame.page', 'https://wgstructures.com/', 'https://wgworld.net/', 'http://wolfgamers.xyz'];
const fun = ['https://wolfgame.xyz/', 'https://wolfgametimemachine.com/', 'https://wolfgame.wiki/', 'https://wgcustomizer.app/'];

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