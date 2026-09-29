console.log("Conexión con js");

let imagen = document.querySelector(".banner");

imagen.onclick = function() {
    if (imagen.src = "static/video/Virtual Tour - VMC Library - Vaughan Public Libraries (1080p, h264)"){
        imagen.src = "static/images/Biblioteca_Tromso_Noruega_Trabalibros";
    } else if (imagen.src = "static/images/Imágenes/comida-mexicana2.jpg"){
        imagen.src = "static/images/Imágenes/comida-mexicana2.jpg";
    } 
};


let correo = document.getElementById("barra-busqueda");
let ingresar = document.querySelector(".ingresar");
ingresar.onclick = function() {
    alert(`Bienvenido/a ${correo.value}`);
}


let libros = document.querySelector(".n-libros");
let mas1 = document.getElementById("boton1");
mas1.onclick = function () {
    let vlrActual = parseInt(libros.innerText);
    let vlrUsuario = vlrActual + 1;
    libros.innerText = vlrUsuario;
};
let mas2 = document.getElementById("boton2");
mas2.onclick = function () {
    let vlrActual = parseInt(libros.innerText);
    let vlrUsuario = vlrActual + 1;
    libros.innerText = vlrUsuario;
};
