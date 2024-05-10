let cantidadArticulo = parseInt(prompt('ingrese la cantidad de productos'));
let precio = parseInt(prompt('ingrese la cantidad de lo que cuesta el producto'));
let total = cantidadArticulo * precio
let descuento;

switch (true) {
    case cantidadArticulo >= 10 && total > 20000:
        let descuento = total - (total * 0.15);
        total = descuento;
        console.log("Se aplicó un descuento del 15%", total);
        break;
    case cantidadArticulo < 10:
        console.log("No se supero la cantidad mínima de artículos para aplicar el descuento", total);
        break;
    case total <= 20000:
        console.log("No se superó el monto minimo para aplicar el descuento", total);
        break;
    default:
        console.log("Error: No se pudo calcular el descuento");

}
    