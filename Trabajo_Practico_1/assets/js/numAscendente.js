let numero1 = parseInt(prompt("Introduce el primer número:"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))
let numero3 = parseInt(prompt("ingrese el tecer numero"));

let menor, medio, mayor

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = num1;
    if (numero2 <= numero3) {
        medio = numero2;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero2;
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
    if (numero1 <= numero3) {
        medio = numero1;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero1;
    }
} else {
    menor = numero3;
    if (numero1 <= numero2) {
        medio = numero1;
        mayor = numero2;
    } else {
        medio = numero2;
        mayor = numero1;
    }
} console.log("Los números en orden ascendente son:", menor, medio, mayor);