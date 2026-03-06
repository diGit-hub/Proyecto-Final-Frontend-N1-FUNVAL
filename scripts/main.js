/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { togglePopup, showAll, showStaysNumber, showFiltered, cleanCards,
    adjustGuests, showLocations } from "./utils";

// Show every stay at website opening
showAll();
showStaysNumber();


// Logic for opening and closing the form all the ways possible
const closeButton = document.querySelector("#close");
closeButton.addEventListener("click", togglePopup);

const clickableBar = document.querySelectorAll(".clickable-bar");
clickableBar.forEach(element => {
    element.addEventListener("click", togglePopup);
});

const backdrop = document.querySelector("#backdrop");
backdrop.addEventListener("click", togglePopup);


// Logic for increasing and decreasing the number of children-adults in the form
const adults = document.querySelector("#adults");
const children = document.querySelector("#children");

document.querySelector("#adults-increase").addEventListener("click", () => {
    adults.value = Number(adults.value) + 1;
    adjustGuests();
})
document.querySelector("#adults-decrease").addEventListener("click", () => {
    if(Number(adults.value) > 0){
        adults.value = Number(adults.value) - 1;
        adjustGuests();
    }
})
document.querySelector("#children-increase").addEventListener("click", () => {
    children.value = Number(children.value) + 1;
    adjustGuests();
})
document.querySelector("#children-decrease").addEventListener("click", () => {
    if(Number(children.value) > 0){
        children.value = Number(children.value) - 1;
        adjustGuests();
    }
})


// Logic for submitting the form and reloading cards
document.querySelector('#popup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    cleanCards();
    showFiltered();
    togglePopup();
    showStaysNumber();
});


//Logic for updating locations list while the user types
const locationInput = document.querySelector("#location-popup");
locationInput.addEventListener("input", (e) => {
    showLocations(e.target.value);
});


//Logic for hiding/showing options dynamically in the form
const locationInputPopup = document.querySelector("#location-popup");
const guestsInputPopup = document.querySelector("#guests-popup");
const guestControls = document.querySelectorAll(".people");
const locationList = document.querySelector("#location-list");

locationInputPopup.addEventListener("click", () => {
    showLocations("")
    locationList.classList.remove("hidden");
    guestControls.forEach(item => item.classList.add("hidden"));
});

guestsInputPopup.addEventListener("click", () => {
    locationList.classList.add("hidden");
    guestControls.forEach(item => item.classList.remove("hidden"));
});

locationInputPopup.addEventListener("input", (e) => {
    showLocations(e.target.value);
});


// Logic for synchronizing the 2 forms
document.querySelector('#popup-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const locationValue = document.querySelector("#location-popup").value;
    const guestsValue = document.querySelector("#guests-popup").value;

    document.querySelector("#location").value = locationValue;
    document.querySelector("#guests").value = guestsValue ? `${guestsValue} guests` : "";

    cleanCards();
    showFiltered();
    togglePopup();
    showStaysNumber();
});