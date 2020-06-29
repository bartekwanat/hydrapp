import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {
 registerSW
} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀');

const addButton = document.querySelector(".button__container--plus-image");
const deleteButton = document.querySelector(".button__container--minus-image");
const counter = document.querySelector('.counter--js');

const infoIcon = document.querySelector(".fa-info");
const infoMenu = document.querySelector(".info__menu")
const menuWrapper = document.querySelector(".info__wrapper");

const key = new Date().toLocaleString().slice(0, 10);
console.log(`Today is ${key}`);


let numberOfGlass = 0;


const addGlass = function () {
 numberOfGlass++;
 counter.innerHTML = numberOfGlass
 localStorage.setItem(key, numberOfGlass);
};

const deleteGlass = function () {
 if (numberOfGlass > 0) {
  numberOfGlass--;
  counter.innerHTML = numberOfGlass;
  localStorage.setItem(key, numberOfGlass);
 } else {
  numberOfGlass = 0;
 }
};

// local storage 




let entry = localStorage.getItem(key);
if (entry) {
 numberOfGlass = parseInt(entry);
 let i = 0;
 const time = setInterval(function () {
  counter.innerHTML = `${i}`;

  if (i >= numberOfGlass) {
   clearInterval(time);
  }
  i++;
 }, 100);
} else {
 counter.innerHTML = `${numberOfGlass}`;
 localStorage.setItem(key, numberOfGlass);
}



// info-menu 

const infoMenuOpen = function () {
 menuWrapper.classList.toggle("open--info");
 infoMenu.classList.toggle("info--js");
 infoIcon.classList.toggle("info--js")
}


infoIcon.addEventListener("click", infoMenuOpen);
addButton.addEventListener("click", addGlass);
deleteButton.addEventListener("click", deleteGlass);