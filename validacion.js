import { mensajes, tiposError } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("input", () => verificarCampo(campo));
  campo.addEventListener("invalid", (envento) => envento.preventDefault());
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    
    tiposError.forEach((error) => {
        if (campo.validity[error]) {
          mensaje = mensajes[campo.name][error];
          console.log(mensaje);
        }
      });
      const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    
      const validarInputCheck = campo.checkValidity();
      if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
      } else {
        mensajeError.textContent = "";
      }
}

//Boton enviar mensaje ---------------------------------
const botonEnviar = document.getElementById("boton-enviar");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("input", () => {
        verificarCampos();
    });
});

function verificarCampos() {
    let todosCamposValidos = true;

    camposDeFormulario.forEach((campo) => {
        if (!campo.checkValidity()) {
            todosCamposValidos = false;
            console.log(todosCamposValidos);
        }
    });

    botonEnviar.disabled = !todosCamposValidos;
}

//Verificar envio-----------------------------------------
