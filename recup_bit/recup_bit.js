
let div_conteneur_jeu = document.getElementById("conteneur_jeu"); // zone de jeux


// Est le panier qui recup les bits qui tombes
class Ordinateur {

    constructor (name) {
        this.score = 0;
        this.vie = 3;
        this.name = name; // nom du panier (joueur)
        this.position_x = div_conteneur_jeu.clientWidth / 2; // mise au centre du panier
        this.position_y = 500; // pas tres utile normalement
        this.size = 100; // en pixels
        this.affichage =  document.createElement("img");

        this.initialisationAffichage()
    }

    perdreVie (perte) {
        this.vie -= perte; // perde x point de vie
    }

    AjoutScore (points) {
        this.score += points; // mise ajour score
    }

    updateAffichage (mousse_x) {
        this.position_x = mousse_x - (this.size / 2); // le mileu de l'image est au dessus de la souris
        this.affichage.style.left = this.position_x + "px"; // mise ajour affichage

    }

    initialisationAffichage () {
        this.affichage.style.width = this.size + "px"; // taille de l'image
        this.affichage.style.position = "absolute"; // mise en position absolute pour facilité le mouvement
        this.affichage.style.left = this.position_x + "px"; // positionement de l'image sur l'axe x
        this.affichage.style.top = this.position_y + "px"; // positionement de l'image sur l'axe y
        this.affichage.src = "poulet.jpg"; // image represantant le panier
        div_conteneur_jeu.appendChild(this.affichage); // insertion de l'image (panier) a l'affichage
    }
}  

const ordinateur = new Ordinateur("C moi"); // creation du panier

// mise a jout des coordonée de la souris
document.addEventListener('mousemove', (e) => {
    ordinateur.updateAffichage(e.clientX); 
});

class Bit {

    static liste_bits = []; // finalement inutile actuellement

    constructor () {
        this.position_x = nombreAleatoire(div_conteneur_jeu.clientWidth);  // fait apparaitre un bit dans une zone aleatoire de l'ecran  sur l'axe x
        this.position_y = 0;  // positionnement en haut de l'affichage
        Bit.liste_bits.push(this); 
        this.size = 30;
        this.bit = Math.round(Math.random());
        this.time = 500; // 0.5s
        this.move = 10;

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
        console.log("je suis creer", this) // juste pour les verif

        // fait bouger le bit de this.move toutes les this.time seconde
        setInterval(() => {
            this.updateAffichage(this.move); 
            console.log('je me suis deplacer de ', this.move)
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

