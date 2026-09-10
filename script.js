// ==============================
// MENÚ HAMBURGUESA
// ==============================

const botonMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("activo");

});


// Cerrar el menú cuando se selecciona una opción

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("activo");

    });

});


// ==============================
// BARRAS DE HABILIDADES
// ==============================

const barras = document.querySelectorAll(".progreso");

function animarBarras() {

    barras.forEach(function (barra) {

        const porcentaje = barra.getAttribute("data-porcentaje");

        barra.style.width = porcentaje + "%";

    });

}


// Ejecutamos la animación cuando cargue la página

window.addEventListener("load", animarBarras);


// ==============================
// MODAL DE PROYECTOS
// ==============================

const botonesProyecto = document.querySelectorAll(".detalles");

const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");

const tituloModal = document.getElementById("modal-titulo");
const textoModal = document.getElementById("modal-texto");


// Información de los proyectos

const proyectos = {

    dulces: {
        titulo: "Emprendimiento de dulces",
        texto: "Este proyecto consiste en crear y vender productos como gomitas, brownies y otros dulces. La idea combina creatividad, emprendimiento y mensajes positivos."
    },

    huerto: {
        titulo: "Huerto automatizado",
        texto: "Este proyecto busca utilizar sensores para controlar diferentes condiciones de un cultivo y facilitar el cuidado de las plantas mediante tecnología."
    },

    datos: {
        titulo: "Análisis de datos",
        texto: "Este proyecto analiza cómo las plataformas digitales recopilan información de sus usuarios y cómo pueden utilizar esos datos para mejorar sus servicios."
    }

};


// Abrir modal

botonesProyecto.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const proyectoSeleccionado = boton.getAttribute("data-proyecto");

        tituloModal.textContent = proyectos[proyectoSeleccionado].titulo;

        textoModal.textContent = proyectos[proyectoSeleccionado].texto;

        modal.classList.add("mostrar");

    });

});


// Cerrar modal

cerrarModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});


// Cerrar modal al hacer clic fuera

modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        modal.classList.remove("mostrar");

    }

});


// ==============================
// VALIDACIÓN DEL FORMULARIO
// ==============================

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorMensaje = document.getElementById("error-mensaje");

const mensajeFormulario = document.getElementById("mensaje-formulario");


// Validar nombre

function validarNombre() {

    if (nombre.value.trim() === "") {

        errorNombre.textContent = "Escribe tu nombre.";

        return false;

    }

    errorNombre.textContent = "";

    return true;
}


// Validar email

function validarEmail() {

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        errorEmail.textContent = "Escribe tu correo.";

        return false;

    }

    if (!formatoEmail.test(email.value)) {

        errorEmail.textContent = "Escribe un correo válido.";

        return false;

    }

    errorEmail.textContent = "";

    return true;
}


// Validar mensaje

function validarMensaje() {

    if (mensaje.value.trim() === "") {

        errorMensaje.textContent = "Escribe un mensaje.";

        return false;

    }

    if (mensaje.value.trim().length < 10) {

        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        return false;

    }

    errorMensaje.textContent = "";

    return true;
}


// VALIDACIÓN EN TIEMPO REAL

nombre.addEventListener("input", validarNombre);

email.addEventListener("input", validarEmail);

mensaje.addEventListener("input", validarMensaje);


// ENVIAR FORMULARIO

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const mensajeValido = validarMensaje();


    if (
        nombreValido &&
        emailValido &&
        mensajeValido
    ) {

        mensajeFormulario.textContent =
            "¡Mensaje enviado correctamente! 💙";

        formulario.reset();

    } else {

        mensajeFormulario.textContent =
            "Por favor, revisa los campos.";

    }

});