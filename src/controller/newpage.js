import { service } from "./service.js";
const url = new URL(window.location);
const id = url.searchParams.get("id");

function itemList(value) {
  const item = document.getElementById("itembox");
  const itemTemplate = document.getElementById("template-item").content;
  const cloneItem = itemTemplate.cloneNode(true);

  const img = cloneItem.querySelector("img");
  const title = cloneItem.querySelector("h3");
  const price = cloneItem.querySelector("p");
  const link = cloneItem.querySelector("a");

  img.src = value.img;
  title.textContent = value.product;
  price.textContent = "$ " + value.price;
  link.href = `../screen/productos.html?id=${value.id}`;
  item.appendChild(cloneItem);
}

function product(value) {
  const product = document.getElementById("product");
  const productTemplate = document.getElementById("template-product").content;
  const cloneProduct = productTemplate.cloneNode(true);

  const img = cloneProduct.querySelector("img");
  const title = cloneProduct.querySelector("h2");
  const description = cloneProduct.querySelector("p");
  const price = cloneProduct.querySelector("span");

  img.src = value.img;
  title.textContent = value.product;
  price.textContent = "$ " + value.price;
  description.textContent = value.msg;

  product.appendChild(cloneProduct);
}
async function newProduct() {
  let item = [];
  const size = window.screen.width;
  const data = await service.getData(id);
  if (size >= 1144) {
    item = await service.getDataList(6);
  } else {
    item = await service.getDataList(4);
  }

  data.forEach((value) => {
    product(value);
  });

  item.forEach((item) => {
    itemList(item);
  });

  console.log(size);
}

newProduct();
