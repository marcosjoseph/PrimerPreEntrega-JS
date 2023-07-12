function calculadoraPies () {
    let cantidad = prompt("Por favor ingrese la cantidad de listones");
    let largo = prompt("Ingrese el largo en cm");
    let ancho = prompt("Ingrese el ancho en cm");
    let grosor = prompt("Ingrese el grosor en cm");
    const pie = 30;
    const pulgada = 2.54;
    const pies = parseFloat(cantidad * (largo/pie) * (ancho/pulgada) * (grosor/pie));
    const total = pies.toFixed(2);

    if (isNaN(total)) {
        alert ("Por favor, ingresar valores numéricos.");}
    
    else { 
        return alert (`La cantidad de pies de madera que necesitas son ${total} pies.`);}
}

let bienvenida = alert("Bienvenido al calculador de pies de madera!");

calculadoraPies();

while (true) {
    let agregar = confirm ("¿Queres calcular otra medida?");
    if (agregar==true) {
        calculadoraPies();}
    else { 
        alert ("Muchas gracias!") 
        break}
}