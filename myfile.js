function sumAll(a,b){
    let suma = 0;
    for (let i=a; i <= b; i++) {
        suma += i;
    };
    
    console.log(suma);
    return suma;
};

sumAll(4,5);

const a = document.getElementById('a');
const b = document.getElementById('b');
const boton = document.querySelector("button");
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const valorA = parseInt(a.value, 10);
    const valorB = parseInt(b.value, 10);
    const result = sumAll(valorA, valorB);
    resultado.textContent = result;    
});