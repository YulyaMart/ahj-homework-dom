!function(){"use strict";function e(){const e=[...document.querySelectorAll(".cell")],t=document.querySelector(".goblin"),l=e.indexOf(t),o=Math.floor(Math.random()*e.length);l!==o&&(e[l].classList.remove("goblin"),e[o].classList.add("goblin"))}new class{constructor(){this.size=4;const e=document.querySelector(".field");for(let t=0;t<this.size*this.size;t+=1){const t=document.createElement("div");t.classList.add("cell"),e.appendChild(t)}}},function(){const t=[...document.querySelectorAll(".cell")];t[Math.floor(Math.random()*t.length)].classList.add("goblin"),setInterval(e,2e3,t)}()}();