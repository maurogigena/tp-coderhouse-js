let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  actualizarCarrito();
  guardarCarritoEnLocalStorage();
}

function quitarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
  guardarCarritoEnLocalStorage();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElemento = document.getElementById('total');

  listaCarrito.innerHTML = '';
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.producto} - $${item.precio} <button onclick="quitarDelCarrito(${index})">Quitar</button>`;
    listaCarrito.appendChild(li);
  });

  totalElemento.textContent = total;
}

function finalizarCompra() {
  // Crear un Evento - elemento div - para mostrar el mensaje de confirmación
  const confirmacionDiv = document.createElement('div');
  confirmacionDiv.innerHTML = '¿Estás seguro de que quieres finalizar la compra?<br><button id="confirmarCompra">Aceptar</button> <button id="cancelarCompra">Cancelar</button>';
  confirmacionDiv.style.position = 'fixed';
  confirmacionDiv.style.top = '50%';
  confirmacionDiv.style.left = '50%';
  confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(0)';  // Inicialmente escala a cero
  confirmacionDiv.style.transition = 'transform 0.3s ease-in-out';  // Agregar transición de transformación
  confirmacionDiv.style.padding = '20px';
  confirmacionDiv.style.backgroundColor = 'white';
  confirmacionDiv.style.border = '1px solid #ccc';
  confirmacionDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
  document.body.appendChild(confirmacionDiv);

  // Agregar estilos a los botones de confirmar y cancelar
  const confirmarBtn = document.getElementById('confirmarCompra');
  const cancelarBtn = document.getElementById('cancelarCompra');

  confirmarBtn.style.marginRight = '10px';  // Añadir espacio entre los botones
  confirmarBtn.style.cursor = 'pointer';    // Cambiar el cursor al pasar sobre el botón
  cancelarBtn.style.cursor = 'pointer';     // Cambiar el cursor al pasar sobre el botón

  confirmarBtn.addEventListener('click', function() {
    // Si el usuario hace clic en "Aceptar"
    alert('Compra finalizada. ¡Gracias por elegirnos! Hood\'99.');
    carrito = [];
    total = 0;
    actualizarCarrito();
    guardarCarritoEnLocalStorage();

    // Aplicar transformación para desaparecer el div de confirmación después de realizar la compra
    confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
      document.body.removeChild(confirmacionDiv);
    }, 300);  // Esperar a que termine la animación (300ms)
  });

  cancelarBtn.addEventListener('click', function() {
    // Si el usuario hace clic en "Cancelar"
    // Aplicar transformación para desaparecer el div de confirmación sin realizar ninguna acción
    confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
      document.body.removeChild(confirmacionDiv);
    }, 300);  // Esperar a que termine la animación (300ms)
  });

  // Agregar efectos hover a los botones
  confirmarBtn.addEventListener('mouseover', function() {
    confirmarBtn.style.backgroundColor = '#e0e0e0';
  });

  confirmarBtn.addEventListener('mouseout', function() {
    confirmarBtn.style.backgroundColor = 'white';
  });

  cancelarBtn.addEventListener('mouseover', function() {
    cancelarBtn.style.backgroundColor = '#e0e0e0';
  });

  cancelarBtn.addEventListener('mouseout', function() {
    cancelarBtn.style.backgroundColor = 'white';
  });

  // Aplicar transformación para hacer zoom al div de confirmación
  setTimeout(() => {
    confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 0);
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Iniciar el carrito al cargar la página
window.addEventListener('load', () => {
  actualizarCarrito();
});