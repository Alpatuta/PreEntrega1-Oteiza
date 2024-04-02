//Variables
let tasaInteres = 36;
//Variable para cprtar el bucle while
let cortaciclos = true;

//Funcion que calcula el interes anual
function calcularInteres(monto, tasaInteres) {
    return monto * (tasaInteres / 100);
}

while (cortaciclos) {
    let monto = prompt("Ingrese el monto total a pagar:");
    let cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desee: \n2 Cuotas \n4 cuotas \n6 Cuotas \n8 Cuotas \n10 Cuotas \n12 Cuotas"));
    let resultado = 0;
    
    
    if (cantidadDeCuotas % 2 != 0 || cantidadDeCuotas > 12) {
        console.log("Numero de cuotas invalido");
    
    }else{

        precioPorCuotas = calcularInteres(monto / cantidadDeCuotas, tasaInteres);
    
        resultado = cantidadDeCuotas * precioPorCuotas;
    
    
        console.log("El precio total es " + resultado);
    
        console.log("Y el precio por cuota es: " + precioPorCuotas);

        cortaciclos = false;

        console.log("Operación completada con exito");
    }
}






