//https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/switch/examples/js/switch.js

//creare un collegamento allo switch (checkbox) che disattivi le classi lamp-off/lamp-on quando lo switch passa da 0 a 1 e viceversa

const lampSwitch = document.getElementById('lampCheckChecked');
const lampOn = document.querySelector('.lamp-on');
const lampOff = document.querySelector('.lamp-off');


//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
function toggleLight (on, off) {
    on.classList.toggle('lamp-on', lampSwitch.checked);
    on.classList.toggle('lamp-off', !lampSwitch.checked);

    off.classList.toggle('lamp-off', lampSwitch.checked);
    off.classList.toggle('lamp-on', !lampSwitch.checked);

}
toggleLight(lampOn, lampOff);

lampSwitch.addEventListener('change', () => {
    toggleLight(lampOn, lampOff);
});


