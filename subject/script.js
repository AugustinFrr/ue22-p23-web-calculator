// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

window.addEventListener("load", () => {
    let buttons = document.querySelectorAll("button");
    let screen = document.getElementsByClassName("calculator__display") [0]; // écran de la calculatrice (il n'y a qu'un div dans cette classe)

    for (let button of buttons) {
        button.addEventListener("click", (evenement) => {
            const bouton = evenement.target;
            if (bouton.getAttribute("data-action") === "clear") {
                screen.textContent = "0";
            } else {
            screen.textContent = button.textContent; // affiche la valeur du outn clické
            }
        });
    };
});

