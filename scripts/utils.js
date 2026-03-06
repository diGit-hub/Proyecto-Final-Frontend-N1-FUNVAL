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
                <div class="rounded-2xl w-full max-w-[288px] h-47.5 overflow-hidden">
                    <img alt="Stay photography in ${stays[index].city}, ${stays[index].country}"
                    src="${stays[index].photo}" class="rounded-2xl w-full max-w-[288px] h-47.5 object-cover transition-transform duration-300 ease-in-out hover:scale-110" width="288px" height="190px">
                </div>
                <div class="flex flex-col p-2 gap-1">
                    <div class="flex justify-between">
                        <p class="text-type-and-beds-text text-xs cursor-default">${stays[index].type}. ${stays[index].beds ? stays[index].beds : "No"} beds</p>
                        <div class="flex">
                            <img alt="star icon" height="12px" width="12px" src="../images/icons/star.svg">
                            <p class="text-xs font-light cursor-default">${stays[index].rating}</p>
                        </div>
                    </div>
                    <p class="text-sm font-semibold cursor-default">${stays[index].title}</p>
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
                <div class="rounded-2xl w-full max-w-[288px] h-47.5 overflow-hidden">
                    <img alt="Stay photography in ${filtered[index].city}, ${filtered[index].country}"
                    src="${filtered[index].photo}" class="rounded-2xl w-full max-w-[288px] h-47.5 object-cover transition-transform duration-300 ease-in-out hover:scale-110" width="288px" height="190px">
                </div>

                <div class="flex flex-col p-2 gap-1">
                    <div class="flex justify-between">
                        <p class="text-type-and-beds-text text-xs cursor-default">${filtered[index].type}. ${filtered[index].beds ? filtered[index].beds : "No"} beds</p>
                        <div class="flex">
                            <img alt="star icon" height="12px" width="12px" src="../images/icons/star.svg">
                            <p class="text-xs font-light cursor-default">${filtered[index].rating}</p>
                        </div>
                    </div>
                    <p class="text-sm font-semibold cursor-default">${filtered[index].title}</p>
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

function showLocations(searchTerm){
    const locationList = document.querySelector("#location-list");
    const allLocations = [...new Set(stays.map(stay => `${stay.city}, ${stay.country}`))];

    const filteredLocations = allLocations.filter(loc => loc.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 4);

    locationList.innerHTML = filteredLocations.map(loc => `
        <div class="flex gap-2 items-center cursor-pointer selection-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="4" fill="white"/>
            </svg>
            <p>${loc}</p>
        </div>
    `).join("");

    document.querySelectorAll(".selection-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector("#location-popup").value = item.querySelector("p").innerText;
            locationList.innerHTML = "";
        });
    });
}

export { showAll, togglePopup, showStaysNumber, showFiltered, cleanCards, adjustGuests, showLocations };