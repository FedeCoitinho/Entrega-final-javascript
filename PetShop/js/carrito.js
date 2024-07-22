const contendorCarritoVacio = document.querySelector("#carritoVacio");
const contendorCarritoArticulos = document.querySelector("#carritoArticulos");
const contendorCarritoAcciones = document.querySelector("#carritoAcciones");
const contendorCarritoComprado = document.querySelector("#carritoComprado");
let botonesBorrar;
const botonVaciar = document.querySelector("#carritoAccionesVaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar= document.querySelector("#carritoAccionesComprar");


let articulosEnCarrito = JSON.parse(localStorage.getItem("articulosEnCarrito")) || [];

function cargarArticulosCarrito() {

    contendorCarritoArticulos.innerHTML = '';

    if (articulosEnCarrito.length > 0) {
        contendorCarritoVacio.classList.add("oculto");
        contendorCarritoArticulos.classList.remove("oculto");
        contendorCarritoAcciones.classList.remove("oculto");
        contendorCarritoComprado.classList.add("oculto");

        articulosEnCarrito.forEach(articulo => {
            const div = document.createElement("div");
            div.classList.add("carritoArticulo");
            div.innerHTML = `
                <img class="carritoImg" src="${articulo.imagen}" alt="${articulo.nombre}">
                <div class="carritoArticuloNombre">
                    <small>Nombre</small>
                    <h3>${articulo.nombre}</h3>
                </div>
                <div class="carritoArticuloCantidad">
                    <small>Cantidad</small>
                    <p>${articulo.cantidad}</p>
                </div>
                <div class="carritoArticuloPrecio">
                    <small>Precio</small>
                    <p>${articulo.precio}</p>
                </div>
                <div class="carritoArticuloSubTotal">
                    <small>Subtotal</small>
                    <p>${articulo.precio * articulo.cantidad}</p>
                </div>
                <button class="carritoArticuloBorrar" id="${articulo.id}">Borrar</button>
            `;
            contendorCarritoArticulos.appendChild(div);
        });


        botonesBorrarNuevo();
        actualizarTotal();
    } else {
        contendorCarritoVacio.classList.remove("oculto");
        contendorCarritoArticulos.classList.add("oculto");
        contendorCarritoAcciones.classList.add("oculto");
        contendorCarritoComprado.classList.add("oculto");
    }
}


function botonesBorrarNuevo() {
    botonesBorrar = document.querySelectorAll(".carritoArticuloBorrar");
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", borrarDelCarrito);
    });
}


function borrarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = articulosEnCarrito.findIndex(articulo => articulo.id === idBoton);
    if (index !== -1) {
        articulosEnCarrito.splice(index, 1);

    
        localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito));

    
        cargarArticulosCarrito();
    }
}
cargarArticulosCarrito();

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    articulosEnCarrito.length = 0;
    localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito));
    cargarArticulosCarrito();
}

function actualizarTotal(){
    const totalCompra = articulosEnCarrito.reduce((acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
    total.innerText = `$${totalCompra}` 
}


botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito(){
    articulosEnCarrito.length = 0;
    localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito));

    contendorCarritoVacio.classList.add("oculto");
    contendorCarritoArticulos.classList.add("oculto");
    contendorCarritoAcciones.classList.add("oculto");
    contendorCarritoComprado.classList.remove("oculto");

}