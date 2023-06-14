const form = document.querySelector("[data-form]");
const inputsFields = document.querySelectorAll("[data-input]");
const urlapi = "  http://localhost:3000/products";

async function sendData(url, img, category, price, product, msg, id) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, category, price, product, msg, id }),
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tar = e.target;
  const img = tar.image.value;
  const category = tar.category.value;
  const product = tar.product.value;
  const price = tar.price.value;
  const msg = tar.description.value;

  sendData(img, category, price, product, msg);
});

/* const valores = {
  imagen: "../../public/img/productos/diversos/diversos-1.jpg",
  category: "camisa",
  product: "camisa-1",
  price: "65",
  description: "soy una de las camisa-1",
};

inputsFields.forEach((field) => {
  const data = field.dataset.input;
  field.value = valores[data];
});
 */
