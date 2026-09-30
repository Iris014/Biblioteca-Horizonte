console.log("Conexión con js");

let video = document.querySelector(".banner");
let videoActual = "static/videos/Virtual Tour - VMC Library - Vaughan Public Libraries";
video.onclick = function() {
    if (videoActual === "static/videos/Virtual Tour - VMC Library - Vaughan Public Libraries"){
        video.src = "static/videos/La Biblioteca Deichman Bjørvika de Oslo, Noruega.mp4";
        videoActual = "static/videos/La Biblioteca Deichman Bjørvika de Oslo, Noruega.mp4";
    } else {
        video.src = "static/videos/Virtual Tour - VMC Library - Vaughan Public Libraries";
        videoActual = "static/videos/Virtual Tour - VMC Library - Vaughan Public Libraries";
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
