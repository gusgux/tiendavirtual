import { service } from "./service.js";
const box = document.getElementById("item");

const newItem = ({ img, category, price, product, msg, id }) => {
  const item = document.createElement("div");
  item.className = "product__item";
  item.dataset.id = id;
  const box = `
  <div class="product__imgbox" >  
    <img src=${img} alt=${product}
      class="product__img"> 
      <div class="product__crud">
      <a href="./editar.html?id=${id}" class="product__link">
      <button class="product__btn">editar</button></a>
      
      <button type="button" class="product__btn" data-id="${id}" >eliminar</button>
      </div>  
      </div>  
  <h3 class="product__name">${product}</h3>
  <p class="product__price">$${price}</p>
  <a href="../screen/productos.html?id=${id}" class="product__show">Ver producto</a>
  `;
  item.innerHTML = box;
  return item;
};

async function addElement() {
  const producList = await service.getDataList();
  producList.forEach((product) => {
    box.appendChild(newItem(product));
  });

  const btnDelete = document.querySelectorAll(["[type='button']"]);

  btnDelete.forEach((btn) => {
    btn.addEventListener("click", (input) => {
      const idBtn = input.target.dataset.id;
      service.deleteData(idBtn);
    });
  });
}

addElement();
