import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const addButton = document.querySelector(".button__container--plus-image");
const deleteButton = document.querySelector(".button__container--minus-image");
const counter = document.querySelector('.counter--js');


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




addButton.addEventListener("click", addGlass);
deleteButton.addEventListener("click", deleteGlass);



console.log(counter);



console.log("lalalal");