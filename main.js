//Variables
let tasaInteres = 36;

//Variable para cortar el bucle while
let cortaciclos = true;

//Funcion que calcula el interes total
function calcularInteres(monto, tasaInteres) {
    return monto * (tasaInteres / 100);
}

function getMonto(){
  return prompt("Ingrese el monto total a pagar:");
}
function getCantidadDeCuotas(){
  return prompt("Ingrese la cantidad de cuotas que desee: \n2 Cuotas \n4 cuotas \n6 Cuotas \n8 Cuotas \n10 Cuotas \n12 Cuotas");
}

function isCuotasCorrect(cuotas){

  return typeof cuotas == "number" && (cantidadDeCuotas % 2 == 0 && cantidadDeCuotas <= 12) && typeof cuotas != "undefined";
}

function isMontoNumber(monto){
  return typeof monto == "number" && typeof monto != "undefined";
}


let monto = parseInt(getMonto());
let montoCorrect = isMontoNumber(monto);

  while(!montoCorrect){
      console.log("El monto debe ser un numero");
      monto = parseInt(getMonto());
      montoCorrect = isMontoNumber(monto);
  }


  let cantidadDeCuotas = parseInt(getCantidadDeCuotas());
  let cuotasCorrect = isCuotasCorrect(cuotas);

  while(!cuotasCorrect){
    console.log("La cantidad de cuotas debe ser un numero par y menor a 13");
    cantidadDeCuotas = parseInt(getCantidadDeCuotas());
    cuotasCorrect = isCuotasCorrect(cantidadDeCuotas);
  } 

    valorTotal = monto + calcularInteres(monto, tasaInteres);

    precioPorCuotas = valorTotal / cantidadDeCuotas;

    console.log("El total a pagar es " + valorTotal);

    console.log("El interes total es " + calcularInteres(monto, tasaInteres));

    console.log("Y el precio por cuota es: " + precioPorCuotas);

    cortaciclos = false;

    console.log("Operación completada con exito");





