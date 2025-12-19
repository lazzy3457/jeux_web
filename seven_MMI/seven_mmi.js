
// AFFICHAGE DES ERREURS ET GESTION
let liste_id = ["erreur1", "erreur2","erreur3", "erreur4"];
let div_erreur_trouver = document.getElementById("erreur_trouver");
let liste_trouver  = [];

liste_id.forEach(id => {
    let area = document.getElementById(id);
    area.style.backgroundColor = "green";
    area.style.backgroundColor = "solid 2px black";
    area.addEventListener("click", () => {
        console.log(id);
        if (!liste_trouver.includes(id)) {
            let p = document.createElement("p");
            div_erreur_trouver.appendChild(p);
            p.textContent = id;
            liste_trouver.push(id);
        }
    })
});


//MISE EN PLACE DU TIMER
let p_timer = document.getElementById("timer");
let timer = 0;
let interval = 100;
setInterval(() => {
    timer += 0.1;
    p_timer.textContent = Math.floor(timer*10)/10;
}, interval)