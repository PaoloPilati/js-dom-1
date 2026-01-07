//https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/switch/examples/js/switch.js

//creare un collegamento allo switch (checkbox) che disattivi le classi lamp-off/lamp-on quando lo switch passa da 0 a 1 e viceversa

const lampSwitch = document.getElementById('lampCheckChecked');
const lampOff = document.getElementById('lamp-off');
const lampOn = document.getElementById('lamp-on');
const lampLabel = document.getElementById('lampLabel');
const switchCounter = document.querySelector('.counter-display');

let count = 0;


//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

function toggleSwitch() {
  const isOn = lampSwitch.checked;

// Lampadine
  lampOn.classList.toggle('turn-off', !isOn);
  lampOff.classList.toggle('turn-off', isOn);

  // Testo label
  lampLabel.textContent = isOn ? "Spegni" : "Accendi";

  // ARIA
  lampSwitch.setAttribute('aria-checked', isOn);

  // Contatore
  if (isOn) {
    count++;
    switchCounter.textContent =
      `Hai acceso la luce ${count} volt${count === 1 ? 'a' : 'e'}`;
  }
}

//Inizializzazione
toggleSwitch();

// Interazione
lampSwitch.addEventListener('change', toggleSwitch);