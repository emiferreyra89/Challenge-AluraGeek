const listCards = document.querySelector(".products")

const productos = [
  {
    id: 1,
    name:"Game Boy Classic",
    price:30,
    image:"../img/gameboy.jpg"
  },
  {
    id: 2,
    name:"StormTrooper",
    price:60,
    image:"../img/stormtrooper.jpg"
  },
  {
    id: 3,
    name:"Game Boy Classic",
    price:90,
    image:"../img/gameboy.jpg"
  },
  {
    id: 4,
    name:"StormTrooper",
    price:120,
    image:"../img/stormtrooper.jpg"
  }
]

function printCard(area,lista) {
  lista.forEach(element => {
    area.innerHTML = `<div class="product">
          <img src="${element.image}" alt="Foto del producto ${element.name}">
          <p class="product__name">${element.name}</p>
          <div class="product__info">
          <p class="product__info__price">$ ${element.price}</p>
          <i class="fa-solid fa-trash-can"></i>
          </div>`
  });
}

printCard(listCards,productos)

