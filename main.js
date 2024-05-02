//Funciones
function calcularInteres(monto, tasaInteres) {
  return monto * (tasaInteres / 100);
}

function getMonto() {
  return prompt("Ingrese el monto total a pagar:");
}

function getCantidadDeCuotas() {
  return prompt("Ingrese la cantidad de cuotas que desee: \n2 Cuotas \n4 cuotas \n6 Cuotas \n8 Cuotas \n10 Cuotas \n12 Cuotas");
}

function getTasaInteres() {
  return prompt("Ingrese la tasa de interés (%):");
}

function isCuotasCorrect(cuotas) {
  return !isNaN(cuotas) && cuotas % 2 === 0 && cuotas <= 12;
}

function isMontoNumber(monto) {
  return !isNaN(monto);
}

function isTasaCorrect(tasa) {
  return !isNaN(tasa) && tasa > 0;
}

class Compra {
  tasaInteres;
  montoTotal;
  cantidadDeCuotas;

  constructor(tasa, monto, cuotas) {
    this.tasaInteres = tasa;
    this.montoTotal = monto;
    this.cantidadDeCuotas = cuotas;
  }

  toString() { // paso a string los parametros
    return `Monto Total: ${this.montoTotal}, Tasa de Interés: ${this.tasaInteres}%, Cantidad de Cuotas: ${this.cantidadDeCuotas}`;
  }
}

const compras = []; //lista de objetos tipo compra

let salir = false;

while (!salir) {
  let monto = parseInt(getMonto());
  while (!isMontoNumber(monto)) {
    console.log("El monto debe ser un número");
    monto = parseInt(getMonto());
  }

  let cantidadDeCuotas = parseInt(getCantidadDeCuotas());
  while (!isCuotasCorrect(cantidadDeCuotas)) {
    console.log("La cantidad de cuotas debe ser un número par y menor a 13");
    cantidadDeCuotas = parseInt(getCantidadDeCuotas());
  }

  let tasaInteres = parseFloat(getTasaInteres());
  while (!isTasaCorrect(tasaInteres)) {
    console.log("La tasa de interés debe ser un número positivo");
    tasaInteres = parseFloat(getTasaInteres());
  }

  let interesTotal = calcularInteres(monto, tasaInteres);
  let valorTotal = monto + interesTotal;
  let precioPorCuota = valorTotal / cantidadDeCuotas;

  console.log("El total a pagar es " + valorTotal);
  console.log("El interes total es " + interesTotal);
  console.log("Y el precio por cuota es: " + precioPorCuota);

  
  compras.push(new Compra(tasaInteres, monto, cantidadDeCuotas));

  console.log("se registro la compra");

  let decision = prompt("¿Desea imprimir todas las compras? Responda con 'si' o con 'no'");
if (decision === "si") {
    for (let i = 0; i < compras.length; i++) {
        console.log(compras[i].toString());
    }
}


  let saleUsuario = prompt("¿Desea salir? Responda con 'si' o con 'no'");
  if (saleUsuario == "si") {
    salir = true;
  } else if (saleUsuario == "no") {
    salir = false;
  } else {
    alert("Respuesta no valida, responda con 'si' o con 'no'.");
  }
}

