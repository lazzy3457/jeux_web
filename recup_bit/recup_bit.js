
let div_conteneur_jeu = document.getElementById("conteneur_jeu"); // zone de jeux

class Game {

    constructor() {
        this.list_bits = [];
        this.ordinateur = null;
        this.isRunning = false; // a l'arret
    }

    init () {
        this.ordinateur = new Ordinateur("teste", this);
        this.list_bits.push(new Bit(this));
    }

    start () {
        this.init()
        this.isRunning = true;
        requestAnimationFrame((time) => this.mainLoop(time));
    }

    mainLoop () {
        this.update();
        this.draw();
        requestAnimationFrame((time) => this.mainLoop(time));
    }

    // mise ajour des données de la classe
    update () {
        this.ordinateur.update(mousse_x);
        let alleatoire = nombreAleatoire(1000);
        if (alleatoire > 900) {
        this.list_bits.push(new Bit(this));
            
        }
        for (let i = 0; i < this.list_bits.length; i++) {
            this.list_bits[i].update(1);
        }
    }

    // mets ajour l'affichage
    draw () {
        this.ordinateur.draw()
        for (let i = 0; i < this.list_bits.length; i++) {
            this.list_bits[i].draw();
        }
    }

}

// permet de gerer les collision entre les elements
class CollisionManager {

}

// Est le panier qui recup les bits qui tombes
class Ordinateur {

    constructor (name, game) {
        this.score = 0;
        this.vie = 3;
        this.game = game;
        this.name = name; // nom du panier (joueur)
        this.position_x = div_conteneur_jeu.clientWidth / 2; // mise au centre du panier
        this.position_y = 500; // pas tres utile normalement
        this.size = 100; // en pixels
        this.affichage =  document.createElement("img");

        this.init()
    }

    init () {
        this.affichage.style.width = this.size + "px"; // taille de l'image
        this.affichage.style.position = "absolute"; // mise en position absolute pour facilité le mouvement
        this.affichage.style.left = this.position_x + "px"; // positionement de l'image sur l'axe x
        this.affichage.style.top = this.position_y + "px"; // positionement de l'image sur l'axe y
        this.affichage.src = "poulet.jpg"; // image est ...
        div_conteneur_jeu.appendChild(this.affichage); // insertion de l'image (panier) a l'affichage
    }

    perdreVie (perte) {
        this.vie -= perte; // perde x point de vie
    }

    AjoutScore (points) {
        this.score += points; // mise ajour score
    }

    // mise ajour des données de la classe
    update (mousse_x) {
        this.position_x = mousse_x - (this.size / 2); // le mileu de l'image est au dessus de la souris
    }

    // mets ajour l'affichage
    draw () {
        this.affichage.style.left = this.position_x + "px"; // mise ajour affichage
    }


}  

// mise a jout des coordonée de la souris
let mousse_x = 0;
let mousse_y = 0;
document.addEventListener('mousemove', (e) => {
    mousse_x = e.clientX;
    mousse_y = e.clientY;
    // ordinateur.updateAffichage(e.clientX); 
});

class Bit {

    constructor (game) {
        this.position_x = nombreAleatoire(div_conteneur_jeu.clientWidth);  // fait apparaitre un bit dans une zone aleatoire de l'ecran  sur l'axe x
        this.position_y = 0;  // positionnement en haut de l'affichage
        this.size = 30;
        this.game = game;
        this.bit = Math.round(Math.random());
        this.time = 500; // 0.5s
        this.move = 10;

        this.affichage = document.createElement("p");
        this.init();
    }

    update (deplacement) {
        this.position_y += deplacement;
    }

    draw () {
        this.affichage.style.top = this.position_y + "px";
    }

    init () {
        this.affichage.style.width = this.size + "px";
        this.affichage.style.position = "absolute";
        this.affichage.style.left = this.position_x + "px";
        this.affichage.style.top = this.position_y + "px";
        this.affichage.textContent = this.bit;
        this.affichage.style.fontSize = this.size + "px";
        this.affichage.style.color = "green";
        div_conteneur_jeu.appendChild(this.affichage);
        console.log("je suis creer", this) // juste pour les verif
    }

}

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
    // retourne un nombre aleatoire compris entre 0 et nb
    return Math.round(Math.random() * (nb + 1))
}

console.log(toBinnaire(255));
console.log();


let game = new Game();
game.start();