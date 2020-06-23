import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const addButton = document.querySelector(".button__container--plus-image");
const deleteButton = document.querySelector(".button__container--minus-image");
const counter = document.querySelector('.counter--js');

const infoIcon = document.querySelector(".fa-info");
const infoMenu = document.querySelector(".menu__wrapper");


let numberOfGlass = 0;


const addGlass = function () {
 numberOfGlass += 200;
 counter.innerHTML = numberOfGlass
};

const deleteGlass = function () {
 if (numberOfGlass > 0) {
  numberOfGlass -= 200;
  counter.innerHTML = numberOfGlass;
 } else {
  numberOfGlass = 0;
 }
};

//

const infoMenuOpen = function () {
 infoMenu.classList.toggle("open--info");
}

infoIcon.addEventListener("click", infoMenuOpen);







addButton.addEventListener("click", addGlass);
deleteButton.addEventListener("click", deleteGlass);