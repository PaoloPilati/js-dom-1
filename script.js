//https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/switch/examples/js/switch.js

//creare un collegamento allo switch (checkbox) che disattivi le classi lamp-off/lamp-on quando lo switch passa da 0 a 1 e viceversa

const lampSwitch = document.getElementById('lampCheckChecked');
const lampOn = document.querySelector('.lamp-on');
const lampOff = document.querySelector('.lamp-off');


//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
function toggleLight (on, off) {

    off.classList.toggle('lamp-off', lampSwitch.checked);
    off.classList.toggle('lamp-on', !lampSwitch.checked);

    on.classList.toggle('lamp-on', lampSwitch.checked);
    on.classList.toggle('lamp-off', !lampSwitch.checked);

}
toggleLight(lampOn, lampOff);

lampSwitch.addEventListener('change', () => {
    toggleLight(lampOn, lampOff);
});

//display counter
const switchCounter = document.querySelector ('.counter-display');

let count = 0;

lampSwitch.addEventListener("change", () => {
    //essendo uno switch è possibile contare quando è acceso
    if (lampSwitch.checked) {
        count++;
    switchCounter.textContent = `Hai acceso la luce ${count} volt${count === 1 ? 'a' : 'e'}`;
}
});

