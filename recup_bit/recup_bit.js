// Est le panier qui recup les bits qui tombes
class Ordinateur {

    constructor (name) {
        this.score = 0;
        this.vie = 3;
        this.name = name;
        this.position_x = 200;
        this.position_y = 500; // pas tres utile normalement
        this.size = 100; // en pixels
    }

    perdreVie (perte) {
        this.vie -= perte;
    }

    AjoutScore (points) {
        this.score += points;
    }
}   

class Bit {

    static liste_bits = [];

    constructor () {
        this.position_x = 0;
        this.position_y = 0;
        Bit.liste_bits.push(this);
        this.size = 20;
    }

}



let nombre = 255;

function toBinnaire (score) {
    let binnaire = "";
    while (score > 1) {
        binnaire += String(score % 2);
        score = Math.floor(score / 2);
        console.log('je suis une etape', binnaire);
    }
    return binnaire + String(score);
}

console.log(toBinnaire(255));
console.log();

const ordinateur = new Ordinateur("C moi");
let div_conteneur_jeu = document.getElementById("conteneur_jeu");
let pc_affichage = document.createElement("img");
pc_affichage.src = "poulet.jpg";
div_conteneur_jeu.appendChild(pc_affichage);

pc_affichage.style.width = ordinateur.size + "px"
pc_affichage.style.top = ordinateur.position_y + "px";
pc_affichage.style.left = ordinateur.position_x + "px";

pc_affichage.style.position = "absolute";

// mise a jout des coordonée de la souris
document.addEventListener('mousemove', (e) => {
    ordinateur.position_x = e.clientX; // Position X de la souris dans la fenêtre
    pc_affichage.style.left = ordinateur.position_x + "px";
    const y = e.clientY; // Position Y de la souris dans la fenêtre
    
    // console.log(`Souris en X: ${x}, Y: ${y}`);
});