const  articulos = [ 

{
    id: "Alimento-01", 
    nombre: "Equilibrio adulto 18kg",
    imagen: "./img/equilibrio-adulto-18-kg.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 3400,
},
{
    id: "Alimento-02", 
    nombre: "Equilibrio cachorro 8kg",
    imagen: "./img/equilibrio-cachorros.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 2300,
}
,{
    id: "Alimento-03", 
    nombre: "Equilibrio raza pequeña 8kg",
    imagen: "./img/equilibrio-razas-pq.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 2150,
},
{
    id: "Alimento-04", 
    nombre: "Pedigree adulto 8kg",
    imagen: "./img/pedigree-adulto-8kg.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 1550,
},
{
    id: "Alimento-05", 
    nombre: "Pedigree adulto 21kg",
    imagen: "./img/pedigree-adulto-21kg.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 2750,
},
{
    id: "Alimento-06", 
    nombre: "Pedigree cachorro 8kg",
    imagen: "./img/pedigree-cachorro-8kg.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 1640,
},
{
    id: "Alimento-07", 
    nombre: "Pedigree raza pequeña 8kg",
    imagen: "./img/pedigree-razas-pequenas-8kg.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 1640,
},
{
    id: "Alimento-08", 
    nombre: "Pedigree raza pequeña 21kg",
    imagen: "./img/pedigree-razas-pq-21k.jpg",
    categoria:{
    nombre: "Perros", 
    id: "perros"
    },
    precio: 3060,
},
{
    id: "Alimento-09", 
    nombre: "Equilibrio gato adulto 1.5kg",
    imagen: "./img/Equilibrio-gato-adulto-x-1.5-kg.jpeg",
    categoria:{
    nombre: "Gatos", 
    id: "gatos"
    },
    precio: 605,
},
{
    id: "Alimento-10", 
    nombre: "Equilibrio castrado 1,5kg",
    imagen: "./img/equilibrio-gato-castrado-1.5kg.jpg",
    categoria:{
        nombre: "Gatos", 
        id: "gatos"
        },
    precio: 860,
},
{
    id: "Alimento-11", 
    nombre: "Whiskas carne 1kg",
    imagen: "./img/WHISKAS-CARNE-1k.jpg",
    categoria:{
        nombre: "Gatos", 
        id: "gatos"
        },
    precio: 440,
},
{
    id: "Alimento-12", 
    nombre: "Whiskas pollo 1kg",
    imagen: "./img/WHISKAS-POLLO-X-10-KG.jpg",
    categoria:{
        nombre: "Gatos", 
        id: "gatos"
        },
    precio: 2140,
},
{
    id: "Alimento-13", 
    nombre: "Whiskas gato cachorro 10kg",
    imagen: "./img/whiskas-gatitios-10kg.jpg",
    categoria:{
    nombre: "Gatos", 
    id: "gatos"
    },
    precio: 2190,
},
]

const contenedorArticulos = document.querySelector("#contenedorArticulos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".articuloAgregar");

function cargarArticulos(articulosElegidos) {

    contenedorArticulos.innerHTML="";

    articulosElegidos.forEach(articulo => {

        
        const div = document.createElement("div");
        div.classList.add("articulo");
        div.innerHTML = `
        <img class="articuloImagen" src="${articulo.imagen}" alt="${articulo.nombre}">
        <div class="articuloDetalles">
        <h2 class="articuloTitulo">${articulo.nombre}</h2>
        <p class="articuloPrecio">${articulo.precio} </p>
        <button class= "articuloAgregar" id="${articulo.id}">Agregar</button>
        </div >
        `;

        contenedorArticulos.append(div)
    
    })

    botonAgregarNuevo();
}

cargarArticulos(articulos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todosLosArticulos") {
            const articuloCategoria = articulos.find(articulo => articulo.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = articuloCategoria.categoria.nombre;

        const articulosBoton = articulos.filter(articulo=> articulo.categoria.id === e.currentTarget.id);
        cargarArticulos(articulosBoton);
        } else {
            tituloPrincipal.innerText = "Toda la tienda";
            cargarArticulos(articulos);
        }
    })
});

function botonAgregarNuevo() {

    botonesAgregar = document.querySelectorAll(".articuloAgregar");
    botonesAgregar.forEach ( boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let articulosEnCarrito;
const articulosEnCarritoLS = JSON.parse(localStorage.getItem("articulosEnCarrito"));
if(articulosEnCarritoLS){
    articulosEnCarrito = articulosEnCarritoLS;
} else{
    articulosEnCarrito =[];
}


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const articuloSeleccionado = articulos.find (articulo => articulo.id === idBoton);

    if(articulosEnCarrito.some(articulo => articulo.id ===idBoton)){
        const index = articulosEnCarrito.findIndex (articulo => articulo.id === idBoton);
        articulosEnCarrito[index].cantidad++;
    } else{
        articuloSeleccionado.cantidad = 1;
    articulosEnCarrito.push(articuloSeleccionado);
    }

    console.log(articulosEnCarrito)
    
    localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito));
}



