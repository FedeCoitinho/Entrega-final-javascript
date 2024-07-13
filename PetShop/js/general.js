const  articulos = [ 

{
    id: "Alimento-01", 
    nombre: "equilibrio adulto 13kg",
    imagen: "./img/equilibrio-adulto-18-kg.jpg",
    categoria:{
    nombre: "perros", 
    id: "perros"
    },
    precio: 2500,
},
{
    id: "Alimento-01", 
    nombre: "equilibrio adulto 13kg",
    imagen: "./img/equilibrio-adulto-18-kg.jpg",
    categoria:{
    nombre: "perros", 
    id: "perros"
    },
    precio: 2500,
}
,{
    id: "Alimento-01", 
    nombre: "equilibrio adulto 13kg",
    imagen: "./img/equilibrio-adulto-18-kg.jpg",
    categoria:{
    nombre: "perros", 
    id: "perros"
    },
    precio: 2500,
},
]

const contenedorArticulos = document.querySelector("#contenedorArticulos");

function cargarArticulos() {

    articulos.forEach(articulo => {
        
        const div = document.createElement("div");
        div.classList.add("articulo");
        div.innerHTML = `
        <img class="articuloImagen" src="${articulo.imagen}" alt="${articulo.nombre}">
            <div class="articuloDetalles">
            <h3 class="articuloNombre">${articulo.nombre}</h3>
            <p class="artiucloPrecio">${articulo.precio}</p>
            <button class="articuloAgregar" id="${articulo.id}>Enviar al carrito</button>
        </div>
        `;
        contenedorArticulos.append(div)
        
    });

};

cargarArticulos();