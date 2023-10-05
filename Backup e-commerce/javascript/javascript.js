//Funcion para el desplazamiento de la barra nav
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector("header");

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-150px"; // Puedes ajustar este valor según sea necesario
    }

    prevScrollPos = currentScrollPos;
};

// JavaScript para agregar productos al carrito

const listaProductos = document.getElementById('lista-productos');
const botonAgregar = document.getElementById('agregar-producto');

botonAgregar.addEventListener('click', () => {
    // Crear un nuevo elemento de lista (producto)
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Producto agregado';
    
    // Agregar el nuevo producto a la lista
    listaProductos.appendChild(nuevoProducto);
});
