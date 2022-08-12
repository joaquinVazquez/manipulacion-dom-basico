const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnS = document.querySelector('#btncalcularSuma');
const btnR = document.querySelector('#btncalcularResta');
const btnM = document.querySelector('#btncalcularMultiplicacion');
const btnD = document.querySelector('#btncalcularDivision');
const pResult = document.querySelector('#result');

btnS.addEventListener('click', btnOnClickSuma);
function btnOnClickSuma(){
    const sumaInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerText = "El resultado es: " + sumaInputs; 
}

btnR.addEventListener('click', btnOnClickResta);
function btnOnClickResta(){
    const restaInputs = (Number(input1.value) - Number(input2.value));
    pResult.innerText = "El resultado es: " + restaInputs;
}

btnM.addEventListener('click', btnOnClickMultiplicacion);
function btnOnClickMultiplicacion(){
    const multiplicacionInputs = (Number(input1.value) * Number(input2.value));
    pResult.innerText = "El resultado es: " + multiplicacionInputs;
}

btnD.addEventListener('click', btnOnClickDivision);
function btnOnClickDivision(){
    const divisionInputs = (Number(input1.value) / Number(input2.value));
    pResult.innerText = "El resultado es: " + divisionInputs;
}