/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

import { stays } from "./stays";

function cleanCards(){
    const cards = document.querySelector("#cards");
    cards.innerHTML = ``;
}

function showAll() {
    cleanCards();
    const cards = document.querySelector("#cards");
    for(let index = 0; index < stays.length; index++){
        cards.innerHTML += `
            <div class="flex flex-col w-full card">
                <img alt="Stay photography in ${stays[index].city}, ${stays[index].country}"
                src="${stays[index].photo}" class="rounded-2xl w-full max-w-[288px] h-47.5 object-cover" width="288px" height="190px">

                <div class="flex flex-col p-2 gap-1">
                    <div class="flex justify-between">
                        <p class="text-type-and-beds-text text-xs">${stays[index].type}. ${stays[index].beds ? stays[index].beds : "No"} beds</p>
                        <div class="flex">
                            <img alt="star icon" height="12px" width="12px" src="../images/icons/star.svg">
                            <p class="text-xs font-light">${stays[index].rating}</p>
                        </div>
                    </div>
                    <p class="text-sm font-semibold">${stays[index].title}</p>
                </div>
            </div>
        `;
    }
}

function showStaysNumber(){
    const stays = document.querySelectorAll(".card");
    const staysNumber = document.querySelector("#stays-number");
    staysNumber.textContent = `+${stays.length} stays`;
}

function togglePopup(){
    document.querySelector("#popup").classList.toggle("hidden");
}

function showFiltered(){
    const cards = document.querySelector("#cards");
    const guests = document.querySelector("#guests-popup")
    const filtered = stays.filter(stay => stay.maxGuests >= guests.value )
    for (let index = 0; index < filtered.length; index++) {
        cards.innerHTML += `
            <div class="flex flex-col w-full card">
                <img alt="Stay photography in ${filtered[index].city}, ${filtered[index].country}"
                src="${filtered[index].photo}" class="rounded-2xl w-full max-w-[288px] h-47.5 object-cover" width="288px" height="190px">

                <div class="flex flex-col p-2 gap-1">
                    <div class="flex justify-between">
                        <p class="text-type-and-beds-text text-xs">${filtered[index].type}. ${filtered[index].beds ? filtered[index].beds : "No"} beds</p>
                        <div class="flex">
                            <img alt="star icon" height="12px" width="12px" src="../images/icons/star.svg">
                            <p class="text-xs font-light">${filtered[index].rating}</p>
                        </div>
                    </div>
                    <p class="text-sm font-semibold">${filtered[index].title}</p>
                </div>
            </div>
        `;
    }
}

function adjustGuests(){
    const adults = document.querySelector("#adults");
    const children = document.querySelector("#children");
    const guests = document.querySelector("#guests-popup");
    guests.value = Number(adults.value) + Number(children.value);
}

export { showAll, togglePopup, showStaysNumber, showFiltered, cleanCards, adjustGuests };