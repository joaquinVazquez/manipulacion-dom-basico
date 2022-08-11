const h1 = document.querySelector('h1');     //Para seleccionar por el nombre de la etiqueta
const parrafo = document.querySelector('p'); //Para seleccionar por el nombre de la etiqueta
const parrafito = document.querySelector('.parrafito'); //Para seleccionar una clase
const pid = document.querySelector('#pid'); //Para seleccionar un id
const input = document.querySelector('input'); //Para seleccionar por el nombre de la etiqueta

console.log(input.value);

console.log({
    h1,
    parrafo,
    parrafito,
    pid,
    input,
})

// h1.innerHTML = "Patito  <br> bonito";
// h1.innerText = "Patito <br> bonito";
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "234";

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);