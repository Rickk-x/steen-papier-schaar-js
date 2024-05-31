let p1keuze = null;
let p2keuze = null;

let steen = "steen";
let papier = "papier";
let schaar = "schaar";

let actionDiv = document.getElementById('action');

actionDiv.innerHTML = "Player one please make a choice";
let buttonContainer = document.getElementById('buttonContainer');

function handleChoice(keuze) {
    if (keuze == null) {
    actionDiv.innerHTML = "Player one please make a choice";
    }

    if (p1keuze == null) {
        p1keuze = keuze;
        actionDiv.innerHTML = " player two please make your choice";
    } else if (p2keuze == null) {
        p2keuze = keuze;
    }

    if (p2keuze !== null) {
        buttonContainer.style.visibility = 'hidden';
        if (p1keuze == p2keuze) {
            actionDiv.innerHTML = "gelijk spel!";
        } else if (p1keuze == papier && p2keuze == 'steen') {
            actionDiv.innerHTML = "speler 1 heeft gewonen!";
        } else if (p1keuze == schaar && p2keuze == papier) {
            actionDiv.innerHTML = "speler 1 heeft gewonen!";
        } else if (p1keuze == steen && p2keuze == schaar) {
            actionDiv.innerHTML = "speler 1 heeft gewonen!";
        } else {
            actionDiv.innerHTML = "speler 2 heeft gewonen!";
        }
    }
}



function reset() {
    buttonContainer.style.visibility = 'visible';
    p1keuze = null;
    p2keuze = null;
    actionDiv.innerHTML = "Player one please make a choice";


    // handleChoice();
}
