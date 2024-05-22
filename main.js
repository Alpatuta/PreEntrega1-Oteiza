function calcularCuotas(montoTotal, cuotasTotal, interes) {
  const interesTotal = Math.round(montoTotal * (interes / 100));
  const valorTotal = Math.round(montoTotal + interesTotal);
  const precioPorCuota = Math.round(valorTotal / cuotasTotal);

  return {
      valorTotal,
      interesTotal,
      precioPorCuota
  };
}

// Función para calcular el préstamo
function calcularPrestamo(montoTotal, cuotasTotal) {
  const interes = 25; 
  return calcularCuotas(montoTotal, cuotasTotal, interes);
}

// Función para guardar en LocalStorage
function guardarEnLocalStorage(nombre, valor) {
  localStorage.setItem(nombre, JSON.stringify(valor));
}

// Función para obtener de LocalStorage
function obtenerDeLocalStorage(nombre) {
  const valor = localStorage.getItem(nombre);
  return JSON.parse(valor);
}

// Obtener referencias a elementos HTML
const prestamoMonto = document.getElementById('prestamo_monto');
const prestamoCuotas = document.getElementById('prestamo_cuotas');
const cuotasMonto = document.getElementById('cuotas_monto');
const cuotasCuotas = document.getElementById('cuotas_cuotas');
const cuotasInteres = document.getElementById('cuotas_interes');
const btnPrestamos = document.querySelector('.btn-prestamos');
const btnCuotas = document.querySelector('.btn-cuotas');
const resultadoDiv = document.getElementById('resultado');


function limpiarCamposPrestamo() {
  prestamoMonto.value = '';
  prestamoCuotas.value = '';
}

function limpiarCamposCuotas() {
  cuotasMonto.value = '';
  cuotasCuotas.value = '';
  cuotasInteres.value = '';
}


btnPrestamos.addEventListener('click', function() {
  const montoTotal = parseInt(prestamoMonto.value);
  const cuotasTotal = parseInt(prestamoCuotas.value);
  const resultado = calcularPrestamo(montoTotal, cuotasTotal);
  guardarEnLocalStorage('prestamo', resultado);
  mostrarResultadoEnAlerta(resultado, limpiarCamposPrestamo);
});


btnCuotas.addEventListener('click', function() {
  const montoTotal = parseInt(cuotasMonto.value);
  const cuotasTotal = parseInt(cuotasCuotas.value);
  const interes = parseInt(cuotasInteres.value);
  const resultado = calcularCuotas(montoTotal, cuotasTotal, interes);
  guardarEnLocalStorage('cuotas', resultado);
  mostrarResultadoEnAlerta(resultado, limpiarCamposCuotas);
});

// Función para mostrar resultados en una alerta
function mostrarResultadoEnAlerta(resultado, callback) {
  let mensaje = '';

  for (let key in resultado) {
      mensaje += key + ': ' + resultado[key] + '\n';
  }

  Swal.fire({
    title: 'Resultado',
    text: mensaje,
    icon: 'info',
    confirmButtonText: 'Ok'
  }).then(() => {
    callback();
  });
}


