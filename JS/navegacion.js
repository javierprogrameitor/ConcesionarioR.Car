// Obtener referencias a los elementos del DOM
const indexButton = document.getElementById('index');
const crearCuentaButton = document.getElementById('crearCuenta');
const inicioButton = document.getElementById('inicio');
const registroButton = document.getElementById('registro');

const catalogoButton = document.getElementById('catalogo');
const botonGuardar = document.getElementById('guardar');

const catalogoButtonD = document.getElementById('catalogoD');
const botonGuardarD = document.getElementById('guardarD');

const catalogoButtonInicio = document.getElementById('inicioCatalogo');
const catalogoButtonGuardar = document.getElementById('guardarCatalogo');
const catalogoButtonRegistro = document.getElementById('registroCatalogo');

const guardarButtonInicio = document.getElementById('inicioGuardar');
const guardarButtonCatalogo = document.getElementById('catalogoGuardar');

//const catalogoButtonRegistro = document.getElementById('registroCatalogo');
const botonCatalogo = document.getElementById('botonCatalogo');

const botonCatalogoP1 = document.getElementById('botonCatalogoP1');
const botonCatalogoC1 = document.getElementById('botonCatalogoC1');

const botonCatalogoP2 = document.getElementById('botonCatalogoP2');
const botonCatalogoC2 = document.getElementById('botonCatalogoC2');


const botonCatalogoP3 = document.getElementById('botonCatalogoP3');
const botonCatalogoC3 = document.getElementById('botonCatalogoC3');

const botonCatalogoP4 = document.getElementById('botonCatalogoP4');
const botonCatalogoC4 = document.getElementById('botonCatalogoC4');

const botonesExtras1 = document.getElementById('extras1');
const botonesExtras2 = document.getElementById('extras2');
const botonesExtras3 = document.getElementById('extras3');

//Desde Extra.html
const botonesExtrasCatalogo = document.getElementById('extrasCatalogo');
const botonesExtrasIncio = document.getElementById('extrasInicio');
//----------
// Funciones de manejo de eventos
function irAPrincipal(event) {
  event.preventDefault();
  window.location.href = '../index.html';
}
function irACrearCuenta(event) {
  event.preventDefault();
  window.location.href = '../index.html';
}
function irAIndex(event) {
  event.preventDefault();
  window.location.href = '../index.html';
}
function irACatalogo(event) {
  event.preventDefault();
  window.location.href = 'Catalogo.html';
}
//Desde el index.html
function irAInicio(event) {
  event.preventDefault();
  window.location.href = 'HTML/Principal.html';
}
function irARegistro(event) {
  event.preventDefault();
  window.location.href = 'HTML/Login.html';
}
function irCatalogo(event) {
  event.preventDefault();
  window.location.href = 'HTML/Catalogo.html';
}
function irCInicio(event) {
  event.preventDefault();
  window.location.href = 'Principal.html';
}
function irCRegistro(event) {
  event.preventDefault();
  window.location.href = 'Login.html';
}
//Desde detalles
function irADetalle1Index(event) {
  event.preventDefault();
  window.location.href = 'HTML/Detalle1.html';
}
function irADetalle2Index(event) {
  event.preventDefault();
  window.location.href = 'HTML/Detalle2.html';
}
function irADetalle3Index(event) {
  event.preventDefault();
  window.location.href = 'HTML/Detalle3.html';
}
function irADetalle4Index(event) {
  event.preventDefault();
  window.location.href = 'HTML/Detalle4.html';
}

//Desde Catalog.html
function irADetalle1(event) {
  event.preventDefault();
  window.location.href = 'Detalle1.html';
}
function irADetalle2(event) {
  event.preventDefault();
  window.location.href = 'Detalle2.html';
}
function irADetalle3(event) {
  event.preventDefault();
  window.location.href = 'Detalle3.html';
}
function irADetalle4(event) {
  event.preventDefault();
  window.location.href = 'Detalle4.html';
}
function irAGuardar(event) {
  event.preventDefault();
  window.location.href = 'HTML/Guardar.html';
}
//Desde Detalle
function irCatalogoD(event) {
  event.preventDefault();
  window.location.href = 'Catalogo.html';
}
function irAGuardarD(event) {
  event.preventDefault();
  window.location.href = 'Guardar.html';
}
function irCGuardar(event) {
  event.preventDefault();
  window.location.href = 'Guardar.html';
}
//Desde index.html a Extras.html
function irAExtras(event) {
  event.preventDefault();
  window.location.href = 'HTML/Extras.html';
}
// Asignar eventos a los botones
if (indexButton) {
  indexButton.addEventListener('click', irAPrincipal);
}
if (crearCuentaButton) {
  crearCuentaButton.addEventListener('click', irACrearCuenta);
}
if (inicioButton) {
  inicioButton.addEventListener('click', irAInicio);
}
if (registroButton) {
  registroButton.addEventListener('click', irARegistro);
}
if (catalogoButton) {
  catalogoButton.addEventListener('click', irCatalogo);
}
//Destalle
if (catalogoButtonD) {
  catalogoButtonD.addEventListener('click', irCatalogoD);
}
if (botonGuardarD) {
  botonGuardarD.addEventListener('click', irAGuardarD);
}
if (catalogoButtonGuardar) {
  catalogoButtonGuardar.addEventListener('click', irCGuardar);
}
if (catalogoButtonInicio) {
  catalogoButtonInicio.addEventListener('click', irCInicio);
}
if (catalogoButtonRegistro) {
  catalogoButtonRegistro.addEventListener('click', irCRegistro);
}
if (botonCatalogoP1) {
  botonCatalogoP1.addEventListener('click', irADetalle1Index);
}
if (botonCatalogoC1) {
  botonCatalogoC1.addEventListener('click', irADetalle1);
}
if (botonCatalogoP2) {
  botonCatalogoP2.addEventListener('click', irADetalle2Index);
}
if (botonCatalogoC2) {
  botonCatalogoC2.addEventListener('click', irADetalle2);
}
if (botonCatalogoP3) {
  botonCatalogoP3.addEventListener('click', irADetalle3Index);
}
if (botonCatalogoC3) {
  botonCatalogoC3.addEventListener('click', irADetalle3);
}
if (botonCatalogoP4) {
  botonCatalogoP4.addEventListener('click', irADetalle4Index);
}
if (botonCatalogoC4) {
  botonCatalogoC4.addEventListener('click', irADetalle4);
}

if (botonGuardar) {
  botonGuardar.addEventListener('click', irAGuardar);
}
if (guardarButtonInicio) {
  guardarButtonInicio.addEventListener('click', irAIndex);
}
if (guardarButtonCatalogo) {
  guardarButtonCatalogo.addEventListener('click', irACatalogo);
}

if (botonesExtras1) {
  botonesExtras1.addEventListener('click', irAExtras);
}

if (botonesExtras2) {
  botonesExtras2.addEventListener('click', irAExtras);
}

if (botonesExtras3) {
  botonesExtras3.addEventListener('click', irAExtras);
}
if (botonesExtrasCatalogo) {
  botonesExtrasCatalogo.addEventListener('click', irACatalogo);
}
if (botonesExtrasIncio) {
  botonesExtrasIncio.addEventListener('click', irAIndex);
}

/*Navegaciń del detalle*/
document.getElementById('start').addEventListener('click', function () {
  // Oculta el contenedor del texto
  let textContainer = document.getElementById('text-container');
  textContainer.classList.add('hidden');
  // Oculta la imagen original y el fondo oscuro
  let originalImage = document.querySelector('.hero figure img');
  originalImage.classList.add('opacity-0');
  let darkOverlay = document.querySelector('.hero figure .bg-black');
  darkOverlay.classList.add('opacity-0');

  // Muestra la nueva imagen y ajusta su tamaño y posición
  let newImageContainer = document.getElementById('new-image-container');
  newImageContainer.classList.remove('hidden');
  newImageContainer.classList.add('justify-evenly');
  let newImage = document.getElementById('new-image');
  newImage.classList.remove('hidden');
});
/*Navegación del filtro*/
function filterCards(brand) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = card.querySelector('.card-title').innerText.includes(brand) ? 'block' : 'none';
  });
}
function showAll() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = 'block';
  });
}