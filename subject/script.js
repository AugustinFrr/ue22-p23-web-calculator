// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

window.addEventListener("load", () => {
    let buttons = document.querySelectorAll("button");
    let screen = document.getElementsByClassName("calculator__display") [0]; // écran de la calculatrice (il n'y a qu'un div dans cette classe)

    let valeur1 = null ;
    let valeur2 = null ;
    let operateur = null ;


    for (let button of buttons) {
        button.addEventListener("click", (evenement) => {
            const bouton = evenement.target;
            const action = bouton.getAttribute("data-action");
            const contenu = bouton.textContent;

            if (!action) { //vérifie que le bouton cliqué n'a pas d'attribut data-action, çàd qu'on clique sur un chiffre
                if (screen.textContent === "0" || operateur) { //valeur non "null" pour opérateur, 0 affiché
                    screen.textContent = contenu; 
                } else { 
                    screen.textContent += contenu; //traite le cas à plusieurs chiffres
                }

                if (operateur) { //opérateur est défini : l'utilisateur rentre la 2ème valeur
                    valeur2 = screen.textContent;
                } else {
                    valeur1 = screen.textContent;
                }
            } else if (action ==="add") {
                operateur = "+";
            } else if (action ==="subtract") {
                operateur = "-";
            } else if (action ==="multiply") {
                operateur = "*";
            } else if (action ==="divide") {
                operateur = "/";
            } else if (action ==="calculate") {
                if (operateur === "+") {
                    screen.textContent = Number(valeur1) + Number(valeur2);
                    valeur1 = null ;
                    valeur2 = null ;
                    operateur = null ; //réinitialisation des variables après chaque calcul 
                                        //(NB : on n'a alors pas de mémoire/historique accessible mais ça serait une étape suivante)
                } else if (operateur === "-") {
                    screen.textContent = Number(valeur1) - Number(valeur2);
                    valeur1 = null ;
                    valeur2 = null ;
                    operateur = null ;
                } else if (operateur === "*") {
                    screen.textContent = Number(valeur1) * Number(valeur2);
                    valeur1 = null ;
                    valeur2 = null ;
                    operateur = null ;
                } else if (operateur === "/") {
                    screen.textContent = Number(valeur1) / Number(valeur2);
                    valeur1 = null ;
                    valeur2 = null ;
                    operateur = null ;
                }
            } else if (action === "clear") {
                screen.textContent = "0";
                valeur1 = null ;
                valeur2 = null ;
                operateur = null ;
            }
            
        });
    };
});

