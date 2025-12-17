//https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/switch/examples/js/switch.js

//creare un collegamento allo switch (checkbox) che disattivi le classi lamp-off/lamp-on quando lo switch passa da 0 a 1 e viceversa

const lampSwitch = document.getElementById('lampCheckChecked');
const lampOn = document.querySelector('.lamp-on');
const lampOff = document.querySelector('.lamp-off');

function toggleLight (on, off) {
    lampSwitch.addEventListener('change', () => {
    on.classList.toggle('lamp-on');
    on.classList.toggle('lamp-off');

    off.classList.toggle('lamp-off');
    off.classList.toggle('lamp-on');
});
}

console.log(toggleLight(lampOn, lampOff));

