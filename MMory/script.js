/*////////////////////////
/ jeu de memory - Script /
/     2025 Quentin GP    /
////////////////////////*/

//Variables
var listeEmoji = ["A","B","C","D","E","F","G","H"];
var chrono = 0.00;
var mode = "Normal";

// Fonctions
// Démarrage
function boot(){
    console.log("Démarrage du jeu...");
    let tab = document.getElementById("main");

    // Création des tuiles
    for (var i = 0; i <= 8; i++) {
        console.log("i = " + i);

        // Création d'une tuile
        let testMsg = document.createTextNode(i);
        tab.appendChild(testMsg);

    };
};

boot();

// Création d'une tuile 
function creationTuile() {
    //Lorem ipsum
}

// Retournement d'une tuile
function retourner(n) {
    //Lorem ipsum
}