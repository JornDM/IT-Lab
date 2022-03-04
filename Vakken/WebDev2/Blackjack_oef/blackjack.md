# Oefening 1: Black Jack

## Beschrijving:

Black Jack (ook bekend als 21-en) is een populair casino spelletje.
Hier ga je onze vereenvoudigde variant implementeren.
Een speler start met twee kaarten met elks een waarde tussen 1 en 11.
De speler moet proberen een hogere score dan de bank te halen maar als zijn score hoger dan 21 is, is hij kapot en wint de bank.
De speler word elke ronde gevraagd of hij/zij nog een kaart wil trekken. Als hij stopt (afklopt) en hij heeft een score die *strikt* groter is dan de bank wint hij. Als de speler op 21 komt wint de speler *altijd*.
De Bank speelt het spelletje al buiten ons zicht en behaalt een score tussen 11 en 21.

## Gevraagd:

de functie blackJack() die een nieuw Black Jack spel opstart. Op het einde van het spel wordt de gebruiker gevraagd of hij/zij een nieuw potje wil spelen.
de functie speelSpel() waarin één potje black jack wordt gespeeld. De speler wordt telkens gevraagd of hij 'go' een nieuwe kaart wil of 'stop' afklopt. Op het einde van het spel worden de scores van de speler en de bank getoond en de winnaar.
de functie dealSpeler() die de speler zijn kaarten voor de start van het spel geeft.
de functie dealBank() die de bank zijn score berekend.
(hint: maak of zoek een hulp functie voor het berekenen)

## Extra:

Gebruik voor het bepalen van de uitslag slecht if .. else if .. else .. (hint: gebruik een ternaire operator)