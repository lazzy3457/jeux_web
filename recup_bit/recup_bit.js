
let div_conteneur_jeu = document.getElementById("conteneur_jeu"); // zone de jeux

// Est le panier qui recup les bits qui tombes
class Ordinateur {

    constructor (name) {
        this.score = 0;
        this.vie = 3;
        this.name = name;
        this.position_x = 200;
        this.position_y = 500; // pas tres utile normalement
        this.size = 100; // en pixels
        this.affichage =  document.createElement("img");

        this.initialisationAffichage()
    }

    perdreVie (perte) {
        this.vie -= perte;
    }

    AjoutScore (points) {
        this.score += points;
    }

    updateAffichage (mousse_x) {
        this.position_x = mousse_x - (this.size / 2);
        this.affichage.style.left = this.position_x + "px";

    }

    initialisationAffichage () {
        this.affichage.style.width = this.size + "px";
        this.affichage.style.position = "absolute";
        this.affichage.style.left = this.position_x + "px";
        this.affichage.style.top = this.position_y + "px";
        this.affichage.src = "poulet.jpg";
        div_conteneur_jeu.appendChild(this.affichage);
    }

}  

const ordinateur = new Ordinateur("C moi"); // creation du panier

// mise a jout des coordonée de la souris
document.addEventListener('mousemove', (e) => {
    ordinateur.updateAffichage(e.clientX); 
});

class Bit {

    static liste_bits = [];

    constructor () {
        this.position_x = nombreAleatoire(div_conteneur_jeu.clientWidth);
        this.position_y = 0;
        Bit.liste_bits.push(this);
        this.size = 30;
        this.bit = Math.round(Math.random());
        this.time = 500; // 0.5s

        this.affichage = document.createElement("p");
        this.initialisationAffichage();
    }

    updateAffichage (deplacement) {
        this.position_y += deplacement;
        this.affichage.style.top = this.position_y + "px";

    }

    initialisationAffichage () {
        this.affichage.style.width = this.size + "px";
        this.affichage.style.position = "absolute";
        this.affichage.style.left = this.position_x + "px";
        this.affichage.style.top = this.position_y + "px";
        this.affichage.textContent = this.bit;
        this.affichage.style.fontSize = this.size + "px";
        this.affichage.style.color = "green";
        div_conteneur_jeu.appendChild(this.affichage);
        console.log("je suis creer", this)

        setInterval(() => {
            this.updateAffichage(10); 
            console.log('je me suis deplacer de ', 10)
        }, this.time);
    }

}

const first_bit = new Bit();

function toBinnaire (score) {
    let binnaire = "";
    while (score > 1) {
        binnaire += String(score % 2);
        score = Math.floor(score / 2);
        console.log('je suis une etape', binnaire);
    }
    return binnaire + String(score);
}

function nombreAleatoire(nb) {
    return Math.round(Math.random() * (nb + 1))
}


// let interval = 500; // 0.3s
// console.log(Bit.liste_bits);
// setInterval(() => {
//     if (nombreAleatoire(1000) <= 200) {
//         let new_bit = new Bit();
//     }
//     Bit.liste_bits.forEach(bit_element => {
//         bit_element.updateAffichage(10); 
//         console.log('je me suis deplacer de ', 10)
//     });
// }, interval);

console.log(toBinnaire(255));
console.log();

// TIMEUR JEU
let interval = 500; // 0.5s
setInterval (() => {
    if (nombreAleatoire(1000) <= 400) {
        let new_bit = new Bit();
    }
}, interval)

