import { service } from "../controller/service.js";
const form = document.querySelector("[data-form]");

const fields = document.querySelectorAll("[data-input]");

const url = new URL(window.location);
const id = url.searchParams.get("id");

async function addElement() {
  const producList = await service.getData(id);
  producList.forEach((product) => {
    fields.forEach((field) => {
      const data = field.dataset.input;
      field.value = product[data];
    });
  });
}
addElement();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tar = e.target;
  const img = tar.image.value;
  const category = tar.category.value;
  const product = tar.product.value;
  const price = tar.price.value;
  const msg = tar.description.value;

  console.log(img, category, price, product, msg, id);

  service.updateData(img, category, price, product, msg, id);
});
