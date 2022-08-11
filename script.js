const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcularSuma');
const pResult = document.querySelector('#result');

function btnOnClickSuma(){
    const sumaInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerText = "El resultado es: " + sumaInputs; 
}

function btnOnClickResta(){
    const restaInputs = (Number(input1.value) - Number(input2.value));
    pResult.innerText = "El resultado es: " + restaInputs;
}

function btnOnClickMultiplicacion(){
    const multiplicacionInputs = (Number(input1.value) * Number(input2.value));
    pResult.innerText = "El resultado es: " + multiplicacionInputs;
}

function btnOnClickDivision(){
    const divisionInputs = (Number(input1.value) / Number(input2.value));
    pResult.innerText = "El resultado es: " + divisionInputs;
}