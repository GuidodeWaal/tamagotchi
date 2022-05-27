//VARIABLES//

var status = "normaal";
var voedsel = 0;
var rest = document.querySelector(".rest");
var poke = document.querySelector(".poke");
var feed = document.querySelector(".feed");
var bake = document.querySelector(".bake");
var restart = document.querySelector(".restart");
var image = document.querySelector(".gudetama");
var text = document.querySelector(".text");


//FUNCTIES//

function restbutton() {
    if (status == "normaal") { //als de variabele "status" "normaal" is, voert hij onderstaande lijnen uit.
        image.src = "images/slapend.png"; //veranderd de tekst van de image source in html. Waardoor de image op de site veranderd.
        status = "slapend"; //veranderd de status variabele.
        feed.disabled = true; //disabled de "feed" button in html.
        poke.disabled = true; //disabled de "poke" button in html.
        text.textContent = "Wake Up"; //veranderd de tekst in de button.
        voedsel = 0; // de voedsel variabele wordt gereset.
    } else { //is de status variabele niet "normaal" dan voert javascript onderstaande lijnen uit.
        image.src = "images/normaal.png";
        status = "normaal";
        feed.disabled = false;
        poke.disabled = false;
        text.textContent = "Rest";
    }
}

function pokebutton() {
    if (status == "normaal") { //als de variabele "status" "normaal" is, voert hij onderstaande lijnen uit.
        image.src = "images/poke.png";
        setTimeout(backtonormal, 1000);
    } else { //is de status variabele niet "normaal" dan voert javascript onderstaande lijnen uit.
        image.src = "images/fatpoke.png";
        setTimeout(dying, 1000); //hiermee zet javascript een timer van een aantal miliseconden. Is de timer afgelopen dan voert javascript automatisch de genoemde functie uit.
    }
}

function feedbutton() {
    if (voedsel < 5) { //als de variabele voedsel groter is dan 5, voert hij onderstaande lijnen uit.
        image.src = "images/etend1.png";
        setTimeout(etend2, 500);
    } else { //als de variabele voedsel kleiner is dan 5, voert hij onderstaande lijnen uit.
        image.src = "images/etend1.png";
        setTimeout(etend3, 500);
    }
}

function bakebutton() {
    image.src = "images/eibakken.jpg";
    bake.disabled = true;
    bake.classList.remove("anders"); //met de "classList" kun je een extra css blok toewijden of verwijderen van een element. 
}

function restartbutton() {
    //VAN INTERNET bron: https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
    window.location.reload(); //zorgt ervoor dat de pagina refreshed.
    //VAN INTERNET 
}

function etend2() {
    image.src = "images/etend2.png";
    setTimeout(backtonormal, 500);
    voedsel = voedsel + 1; //bij elke uitvoering van deze functie wordt er "1" opgetelt bij de voedsel variabele.
}

function etenddik() {
    image.src = "images/fat.png";
    status = "fat"; //veranderd de status variabele.
    feed.disabled = true;
    rest.disabled = true;
}

function gebroken() {
    image.src = "images/gebrokendooier.jpg";
    feed.disabled = true;
    rest.disabled = true;
    poke.disabled = true;
    bake.classList.toggle("anders"); //hiermee voegt javascript het css blok .anders toe de bakebutton.
}

function backtonormal() {
    image.src = "images/normaal.png";
    status = "normaal"; //veranderd de status variabele.
}


//FUNCTIES VOOR ANIMATIES//

function etend3() {
    image.src = "images/etend2.png";
    setTimeout(etenddik, 500);
}

function dying() {
    image.src = "images/fatdying.png";
    setTimeout(gebroken, 500);
}


//EVENTS//

rest.addEventListener("click", restbutton); //hiermee maak ik de button klikbaar met een muisklik.
poke.addEventListener("click", pokebutton);
feed.addEventListener("click", feedbutton);
bake.addEventListener("click", bakebutton);
restart.addEventListener("click", restartbutton);