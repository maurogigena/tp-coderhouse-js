document.addEventListener('DOMContentLoaded', function () {
  // Crear el overlay
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Crear el popup
  let popup = document.createElement('div');
  popup.classList.add('popup');
  popup.style.animation = 'zoomIn 0.5s'; // Agregar animación de zoom
  popup.style.margin = '7px';

  // Crear leyenda
  let welcomeMessage = document.createElement('div');
  welcomeMessage.innerText = "¡Bienvenido a Hood'99! Ingrese un nombre y un email, por favor:";
  welcomeMessage.style.marginBottom = '10px';

  // Crear los elementos del popup
  let nameInput = document.createElement('input');
  nameInput.placeholder = 'Nombre';
  nameInput.style.marginBottom = '10px'; // Añadir margen inferior

  let emailInput = document.createElement('input');
  emailInput.placeholder = 'Email';
  emailInput.style.marginBottom = '10px'; // Añadir margen inferior

  let submitButton = document.createElement('button');
  submitButton.innerText = 'Enviar';
  submitButton.style.marginBottom = '10px'; // Añadir margen inferior
  submitButton.addEventListener('click', function () {
      // Aquí puedes realizar acciones con los datos ingresados
      // Por ejemplo, almacenarlos en variables o enviarlos al servidor
      overlay.style.display = 'none';
  });

  // Agregar elementos al popup
  popup.appendChild(welcomeMessage);
  popup.appendChild(nameInput);
  popup.appendChild(document.createElement('br')); // Agregar un salto de línea
  popup.appendChild(emailInput);
  popup.appendChild(document.createElement('br')); // Agregar otro salto de línea
  popup.appendChild(submitButton);
  nameInput.style.width = '205px';
  emailInput.style.width = '205px';
  submitButton.style.width = '150px';
  // hover del botón "Enviar"
  submitButton.style.transition = 'background-color 0.3s ease-in-out';

  submitButton.addEventListener('mouseenter', function () {
    submitButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Oscurecer levemente
  });

  submitButton.addEventListener('mouseleave', function () {
    submitButton.style.backgroundColor = ''; // Volver al color original
  });

  // Agregar popup al overlay
  overlay.appendChild(popup);

  // Mostrar overlay en la página con un lapso de 2 segundos
  setTimeout(function () {
    document.body.appendChild(overlay);
  }, 300);

  // Crear confirm popup después de enviar los datos
  submitButton.addEventListener('click', function () {
      let confirmPopup = document.createElement('div');
      confirmPopup.classList.add('overlay');
      
      let confirmContent = document.createElement('div');
      confirmContent.classList.add('popup', 'confirm-popup');
      
      confirmContent.innerHTML = '¿Deseas recibir promociones al email?<br>';
      
      let confirmButton = document.createElement('button');
      confirmButton.innerText = 'Sí';
      confirmButton.addEventListener('click', function () {
          // Acciones si el usuario selecciona Sí
          confirmPopup.style.display = 'none';
      });
      
      let cancelButton = document.createElement('button');
      cancelButton.innerText = 'No';
      cancelButton.addEventListener('click', function () {
          // Acciones si el usuario selecciona No
          confirmPopup.style.display = 'none';
      });
      
      // Aumentar la separación entre los botones "Sí" y "No"
      confirmButton.style.marginRight = '10px';
      confirmContent.style.margin = '7px'; 
      
      confirmContent.appendChild(confirmButton);
      confirmContent.appendChild(cancelButton);
      confirmPopup.appendChild(confirmContent);
      document.body.appendChild(confirmPopup);
  });
});


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
    // Crear un div para la confirmación
    let confirmacionDiv = document.createElement('div');
    confirmacionDiv.innerHTML = 'Compra finalizada con éxito. ¡Gracias por elegirnos! Hood\'99.';
    confirmacionDiv.style.backgroundColor = '#fefefe';  // Color de fondo de confirmación (verde)
    confirmacionDiv.style.border = '1px solid #c7c7c7';  // Borde de confirmación
    confirmacionDiv.style.borderRadius = '8px';  // Bordes redondeados
    confirmacionDiv.style.color = '#000000';  // Color del texto
    confirmacionDiv.style.padding = '16px';  // Relleno de confirmación
    confirmacionDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';  // Sombra para resaltar
    confirmacionDiv.style.position = 'fixed';
    confirmacionDiv.style.top = '50%';
    confirmacionDiv.style.left = '50%';
    confirmacionDiv.style.animation = 'zoomIn 0.5s';
    confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(0)';
    confirmacionDiv.style.transition = 'transform 0.5s ease-in-out';

    // Agregar el div al cuerpo del documento
    document.body.appendChild(confirmacionDiv);

    // Limpiar carrito, total, y realizar otras acciones
    carrito = [];
    total = 0;
    actualizarCarrito();
    guardarCarritoEnLocalStorage();

    // Aplicar transformación para mostrar el div
    setTimeout(() => {
      confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);  // Pequeño retraso para asegurar que la transformación se aplique correctamente

    // Después de un tiempo, eliminar la confirmación
    setTimeout(() => {
      confirmacionDiv.style.transform = 'translate(-50%, -50%) scale(0)';
      setTimeout(() => {
          document.body.removeChild(confirmacionDiv);
      }, 500);  // Esperar a que termine la animación (500ms)
    }, 3000);  // Esperar 3 segundos antes de empezar a desvanecer (ajusta según tus necesidades)
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