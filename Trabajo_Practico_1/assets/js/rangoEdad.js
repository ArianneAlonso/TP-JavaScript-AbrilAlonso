let edad = prompt ("Introduce una edad:");

if (edad >= 0 && edad <= 12) {
    console.log ("niño");
} else if (edad >= 13 && edad <= 19) {
    console.log ("adolescente");
} else if (edad >= 20 && edad <= 59) {
    console.log ("adulto");
} else {
    console.log ("adulto mayor")
}