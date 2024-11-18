import { conexionAPI } from "./conexionApi.js";
import { eliminarProducto } from "./eliminarProducto.js";

const lista = document.querySelector("[data-lista]");

export function crearCard(name, price, image, id) {
  const divProduct = document.createElement("div");
  divProduct.className = "product";
  divProduct.innerHTML = `
          <img src="${image}" alt="Foto del producto ${name}">
          <p class="product__name">${name}</p>
            <div class="product__info">
              <p class="product__info__price">$ ${price}</p>
              <i class="fa-solid fa-trash-can" data-action="delete" data-id=${id}></i>
            </div>
          `;
  // Escuchar evento click en el ícono de la papelera
  const deleteIcon = divProduct.querySelector('[data-action="delete"]');
  deleteIcon.addEventListener("click", (event) => {
    const productId = event.target.getAttribute("data-id");
    eliminarProducto(productId, divProduct);
  });

  return divProduct;
}

export async function listarProductos() {
  const listaProductos = await conexionAPI.conectPoint();
  listaProductos.forEach((element) =>
    lista.appendChild(
      crearCard(element.name, element.price, element.image, element.id)
    )
  );
}

listarProductos();
