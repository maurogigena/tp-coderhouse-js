// Login Usuario 
Swal.fire({
  title: "Bienvenido a Hood'99",
  text: "Ingrese un nombre de usuario para poder continuar:",
  input: "text",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  },
  confirmButtonText: "Continuar",
  preConfirm: (username) => {
    if (!username) {
      Swal.showValidationMessage("Por favor, ingrese un nombre de usuario");
    }
  }
}).then((result) => {
  if (result.value) {
    const username = result.value;
    Swal.fire({
      title: `Hola, ${username}! Bienvenido a Hood'99`,
      icon: "success"
    });
  }
});

// Desea recibir notificaciones?
setTimeout(function() {
  Swal.fire({
    title: "Deseas recibir notificaciones?",
    text: "Cuando haya nuevas promociones serás el primero en enterarte!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, quiero!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Muy bien!",
        text: "Cuando haya nuevas promociones te llegará una notificación. 😉",
        icon: "success"
      });
    }
  });
}, 8000);

// Toastify
setTimeout(function() {
  Toastify({
    text: "El piluso te quedaría cheto mal! 😎",
    duration: 5000,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true, // Detener el temporizador cuando el usuario hace clic en la notificación
    style: {
      background: "#ad8b57",
      color: "#ffffff",
      'font-size': '16px',
      'margin-top': '50px',
      'font-weight': '600',
      'box-shadow': '0 4px 8px #00000070',
    }
  }).showToast();
}, 18000);

// Carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  actualizarCarrito();
  guardarCarritoEnLocalStorage();
  
  // Mensaje de alerta al usuario
  Swal.fire({
    title: "Producto Agregado al carrito correctamente!",
    text: "Al final de la página verás el carrito con todos tus productos.",
    icon: "success"
  });
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
  const carritoBadge = document.getElementById('carrito-badge');

  listaCarrito.innerHTML = '';
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.producto} - $${item.precio} <button onclick="quitarDelCarrito(${index})">Quitar</button>`;
    listaCarrito.appendChild(li);
  });

  totalElemento.textContent = total;
  // Actualizar el badge del carrito con la cantidad de productos
  carritoBadge.textContent = carrito.length;
}

function finalizarCompra() {
  // Verificar si el carrito está vacío
  if (carrito.length === 0) {
    Swal.fire("No hay productos en el carrito", "Comprá Pilcha Posta ;)", "info");
  } else {
    // Continuar con el proceso de compra SI HAY productos en el carrito
    Swal.fire({
      title: "¿Estás seguro que deseas finalizar la compra?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      denyButtonText: `Boton de Arrepentimiento`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Compra exitosa! Gracias por elegirnos.", "Hood'99", "success");
        // Limpiar carrito y total, y realizar otras acciones necesarias
        carrito = [];
        total = 0;
        actualizarCarrito();
        guardarCarritoEnLocalStorage();
      } else if (result.isDenied) {
        Swal.fire("Uh! Te arrepentiste?", "Dale! Comprá pilcha posta ;)", "question");
      }
    });
  }
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Iniciar el carrito al cargar la página
window.addEventListener('load', () => {
  actualizarCarrito();
});

//API de perritos con ropa
async function fetchDogImages() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?query=dog%20clothes&count=5&client_id=zr40iZoyXmRLqV7v752J6A4DX6cjhqxuoSEiAKYNHmc');
    const data = await response.json();

    const imageContainer = document.getElementById('imageContainer');

    data.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo.urls.regular;
      imgElement.alt = photo.alt_description;
      imageContainer.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error fetching dog images:', error);
  }
}

// Llama a la función al cargar la página
fetchDogImages();
