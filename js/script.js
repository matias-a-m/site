// Variables globales
let currentSectionIndex = 0;
const secciones = document.querySelectorAll('.section');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// Función para desplazar la vista suavemente a la sección
function navegarASeccion(index) {
  if (index >= 0 && index < secciones.length) {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
    currentSectionIndex = index;
    actualizarBotones();
  }
}

// Función para mostrar u ocultar los botones en función de la sección activa
function actualizarBotones() {
  btn1.classList.remove('visible');
  btn2.classList.remove('visible');

  if (currentSectionIndex === 0) {
    btn1.classList.add('visible');
  } else if (currentSectionIndex === 1) {
    btn2.classList.add('visible');
  }
}

// Configurar los clics en los botones para moverse entre secciones
btn1.addEventListener('click', () => navegarASeccion(1));
btn2.addEventListener('click', () => navegarASeccion(2));

// Configurar visibilidad de botones inicial al cargar
actualizarBotones();

// Opcional: detectar automáticamente el scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const seccionActual = Math.round(scrollPos / window.innerHeight);

  if (seccionActual !== currentSectionIndex) {
    currentSectionIndex = seccionActual;
    actualizarBotones();
  }
});
