const AlterThemeButton = document.getElementById("alter-theme");
console.log("AlterThemeButton");

// grab from JS an HTML element corresponding to body
const body = document.querySelector("body");
const SunButton = document.querySelector(".sun");

// Identify an event, clicking in this case
AlterThemeButton.addEventListener("click", () => {

// verify if dark mode is active
const DarkModeActive = body.classList.contains("dark-mode");

body.classList.toggle("dark-mode");

if (DarkModeActive) {
    SunButton.setAttribute("src", "./src/imagens/sun.png");
} else {
    SunButton.setAttribute("src", "./src/imagens/moon.png");
}

})

// Shiny toggle



function shiny(){

    var img = document.getElementById('bulbasaur');
    img.src = './src/imagens/bulbasaur (2).gif'

    var img = document.getElementById('Ivysaur');
    img.src = './src/imagens/ivysaur (2).gif'

    var img = document.getElementById('Venusaur');
    img.src = './src/imagens/venusaur (2).gif'

    var img = document.getElementById('Charmander');
    img.src = './src/imagens/charmander (2).gif'

    var img = document.getElementById('Charmeleon');
    img.src = './src/imagens/charmeleon (2).gif'

    var img = document.getElementById('Charizard');
    img.src = './src/imagens/charizard (2).gif'

    var img = document.getElementById('Squirtle');
    img.src = './src/imagens/squirtle (2).gif'

    var img = document.getElementById('Wartortle');
    img.src = './src/imagens/wartortle (2).gif'

    var img = document.getElementById('Blastoise');
    img.src = './src/imagens/blastoise (2).gif'

    var img = document.getElementById('eevee');
    img.src = './src/imagens/eevee (2).gif'

    var img = document.getElementById('vaporeon');
    img.src = './src/imagens/vaporeon (2).gif'

    var img = document.getElementById('jolteon');
    img.src = './src/imagens/jolteon (2).gif'

    var img = document.getElementById('flareon');
    img.src = './src/imagens/flareon (2).gif'

    var img = document.getElementById('espeon');
    img.src = './src/imagens/espeon (2).gif'
}


function pokeball(){
    
    var img = document.getElementById('bulbasaur');
    img.src = './src/imagens/bulbasaur (1).gif'

    var img = document.getElementById('Ivysaur');
    img.src = './src/imagens/ivysaur.gif'

    var img = document.getElementById('Venusaur');
    img.src = './src/imagens/venusaur.gif'

    var img = document.getElementById('Charmander');
    img.src = './src/imagens/charmander.gif'

    var img = document.getElementById('Charmeleon');
    img.src = './src/imagens/charmeleon.gif'

    var img = document.getElementById('Charizard');
    img.src = './src/imagens/charizard.gif'

    var img = document.getElementById('Squirtle');
    img.src = './src/imagens/squirtle.gif'

    var img = document.getElementById('Wartortle');
    img.src = './src/imagens/wartortle.gif'

    var img = document.getElementById('Blastoise');
    img.src = './src/imagens/blastoise.gif'

    var img = document.getElementById('eevee');
    img.src = './src/imagens/eevee.gif'

    var img = document.getElementById('vaporeon');
    img.src = './src/imagens/vaporeon.gif'

    var img = document.getElementById('jolteon');
    img.src = './src/imagens/jolteon.gif'

    var img = document.getElementById('flareon');
    img.src = './src/imagens/flareon.gif'

    var img = document.getElementById('espeon');
    img.src = './src/imagens/espeon.gif'


}



