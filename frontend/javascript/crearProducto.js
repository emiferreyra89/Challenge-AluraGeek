import { conexionAPI } from "./conexionApi.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(event) {
  event.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  await conexionAPI.createPoint(nombre, precio, imagen);
}

formulario.addEventListener("submit", (event) => {
  crearProducto(event);
});
