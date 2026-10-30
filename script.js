// Busca en la página el botón y la ofrenda completa
const boton = document.querySelector('#boton-vela');
const ofrenda = document.querySelector('#ofrenda');

// Esta función se ejecuta cada vez que alguien selecciona el botón
boton.addEventListener('click', () => {
  // TODO 5: Quita los // de las tres líneas de abajo para encender la vela.
  const encendida = ofrenda.classList.toggle('encendida');
  boton.setAttribute('aria-pressed', encendida);
  boton.textContent = encendida ? 'Apagar la vela' : 'Encender la vela';
});

// Extra: contador de visitas al estilo 1999 (solo vive en tu navegador)
const contador = document.querySelector('#contador');
const visitas = Number(localStorage.getItem('visitas-ofrenda') || 1336) + 1;
localStorage.setItem('visitas-ofrenda', visitas);
contador.textContent = String(visitas).padStart(6, '0');

// Extra: el último alert() que nos queda
document.querySelector('#boton-alert').addEventListener('click', () => {
  alert('Esta página web dice: ¡Feliz Día de Muertos! 💀🌼');
});

console.log('%c💀 Aquí yacen var, jQuery y Flash. Gracias por todo el spaghetti. 🌼', 'color:#FF9F1C;font-size:16px');
