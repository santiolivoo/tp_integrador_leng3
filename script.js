let libros = [];
let carrito = [];
let total = 0;

function agregarLibro() {
  const titulo = document.getElementById("titulo").value.trim();
  const precio = parseFloat(document.getElementById("precio").value.trim());

  if (titulo === "" || isNaN(precio) || precio <= 0) {
    alert("Por favor, ingrese un título válido y un precio numérico mayor que 0.");
    return;
  }

  const libro = { titulo, precio };
  libros.push(libro);
  mostrarLibros();
  document.getElementById("titulo").value = "";
  document.getElementById("precio").value = "";
}

function mostrarLibros() {
  const contenedor = document.getElementById("librosDisponibles");
  contenedor.innerHTML = "";

  libros.forEach((libro, index) => {
    const div = document.createElement("div");
    div.className = "libro";
    div.innerHTML = `${libro.titulo} - $${libro.precio.toFixed(2)} 
                     <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>`;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(index) {
  const libro = libros[index];
  carrito.push(libro);
  total += libro.precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  carrito.forEach((libro, i) => {
    const div = document.createElement("div");
    div.className = "carrito-item";
    div.textContent = `${libro.titulo} - $${libro.precio.toFixed(2)}`;
    contenedor.appendChild(div);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}
