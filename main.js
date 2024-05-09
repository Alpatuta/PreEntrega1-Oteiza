// Función para calcular las cuotas
function calcularCuotas(montoTotal, cuotasTotal, interes) {
  const interesTotal = montoTotal * (interes / 100);
  const valorTotal = montoTotal + interesTotal;
  const precioPorCuota = valorTotal / cuotasTotal;

  return {
      valorTotal,
      interesTotal,
      precioPorCuota
  };
}

// Función para calcular el préstamo
function calcularPrestamo(montoTotal, cuotasTotal) {
  const interes = 25; // Interés fijo del 25% para préstamos
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

// Agregar evento al botón de préstamo
btnPrestamos.addEventListener('click', function() {
  const montoTotal = parseInt(prestamoMonto.value);
  const cuotasTotal = parseInt(prestamoCuotas.value);
  const resultado = calcularPrestamo(montoTotal, cuotasTotal);
  guardarEnLocalStorage('prestamo', resultado);
  mostrarResultado(resultado);
});

// Agregar evento al botón de cuotas
btnCuotas.addEventListener('click', function() {
  const montoTotal = parseInt(cuotasMonto.value);
  const cuotasTotal = parseInt(cuotasCuotas.value);
  const interes = parseInt(cuotasInteres.value);
  const resultado = calcularCuotas(montoTotal, cuotasTotal, interes);
  guardarEnLocalStorage('cuotas', resultado);
  mostrarResultado(resultado);
});

// Función para mostrar resultados
function mostrarResultado(resultado) {
  resultadoDiv.innerHTML = '';

  for (let key in resultado) {
      const p = document.createElement('p');
      p.textContent = key + ': ' + resultado[key];
      resultadoDiv.appendChild(p);
  }
}
