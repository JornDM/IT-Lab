'use strict';

function blackJack() {
    let keuze1 = prompt("Spel spelen? Y/N");
    while ( keuze1 !== "N") {
        if (keuze1 === "Y") {
            speelSpel();
        } else {
            alert("Ongeldige invoer!");
        }

        keuze1 = prompt("Spel spelen? Y/N");
    }

}

function speelSpel() {
    let spelerAantal = dealSpeler();
    let bankAantal = dealBank();
    let keuze2 = "Y";
    while (spelerAantal < 21 && keuze2 !== "N") {
        keuze2 = prompt(`Je hebt in totaal: ${spelerAantal}\nKaart trekken? Y/N`);
        if (keuze2 === "Y") {
            spelerAantal += getRandomIntInclusive(1,11);
        } else if (keuze2 !== "N") {
            alert("Ongeldige invoer!");
        }
    }
    if ( spelerAantal > 21 ) {
        alert(`Je hebt in totaal: ${spelerAantal}\nJe bent kapot!`);
    } else if (spelerAantal === 21) {
        alert(`Je hebt in totaal: ${spelerAantal}\nJe bent gewonnen`);
    } else {
        alert(`Je hebt in totaal: ${spelerAantal}\nDe bank heeft: ${bankAantal}\n${spelerAantal>bankAantal ? "Jij bent gewonnen" : "De bank is gewonnen"}`);
    }
}

function dealSpeler() {
    return getRandomIntInclusive(1, 11) + getRandomIntInclusive(1, 11);
}

function dealBank() {
    return getRandomIntInclusive(11, 21);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  blackJack();