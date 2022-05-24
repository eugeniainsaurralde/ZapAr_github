/* Funcionalidad de cargar del producto */
const Clickbutton = document.querySelectorAll(".btn_agregar");
const tbody = document.querySelector(".cuerpo_de_tabla");
let carrito = [];

Clickbutton.forEach((btn_agregar) => {
  btn_agregar.addEventListener("click", cargarAlCarrito);
});

function cargarAlCarrito(e) {
  const button = e.target;
  const producto = button.closest(".zapas_unidad");
  const productoNombre = producto.querySelector(".nombre_producto").textContent;
  const productoPrecio = producto.querySelector(".precio_producto").textContent;
  const productoTalle = producto.querySelector(".talle").value;

  const newCompra = {
    nombre: productoNombre,
    precio: productoPrecio,
    talle: productoTalle,
    cantidad: 1,
  };

  agregarAlCarrito(newCompra);
}

function agregarAlCarrito(newCompra) {
  const cantidadProducto = tbody.getElementsByClassName("cantidad_productos");
  const talleProducto = tbody.getElementsByClassName("talle_productos");

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre.trim() === newCompra.nombre.trim()) {
      carrito[i].cantidad++;
      const cantidadProductoValue = cantidadProducto[i];
      cantidadProductoValue.value++;

      /*      talleProducto[i].innerText = carrito[i].talle + " / " + newCompra.talle; */

      carrito[i].talle = carrito[i].talle + "/ " + newCompra.talle;
      const talleProductovalue = talleProducto[i];
      talleProductovalue = carrito[i].talle;

      console.log(carrito);

      return null;
    }
  }

  carrito.push(newCompra);

  renderCarrito();
}

function renderCarrito() {
  tbody.innerHTML = "";
  carrito.map((compra) => {
    const tr = document.createElement("tr");
    tr.classList.add("productoCarrito");
    const content = `
    <th scope="row">1</th>
                <td class="table__modelos">${compra.nombre}</td>
                <td class="table__talle talle_productos">${compra.talle}</td>
                <td class="table__cantidad">
                <input type="number" min="1" value=${compra.cantidad} class="cantidad_productos">
                <button class="delete sombra">x</button>
                </td>
                <td class="table__precio"><p>${compra.precio}</p></td> 
                `;
    tr.innerHTML = content;
    tbody.append(tr);
  });
}
