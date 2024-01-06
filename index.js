let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  actualizarCarrito();
}

function quitarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
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
  // Confirmar compra
  const confirmacion = confirm('¿Estás seguro de que quieres finalizar la compra?');

  // Si el usuario oprime "Aceptar" en el cuadro de diálogo de confirmación...
  if (confirmacion) {
    alert('Compra finalizada. ¡Gracias por elegirnos! Hood\'99.');
    carrito = [];
    total = 0;
    actualizarCarrito();
  }
  // Si el usuario hace clic en "Cancelar", no se ejecuta el resto de la función
}
