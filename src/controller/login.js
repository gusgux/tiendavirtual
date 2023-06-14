const form = document.querySelector("[data-form]");
const inputFields = document.querySelectorAll("[data-input]");
const urlRedirect = "../screen/lista-productos.html";
const urlapi = "  http://localhost:3000/users";

async function getData(url, email, password) {
  const response = await fetch(`${url}?email=${email}&password=${password}`);
  const data = await response.json();
  return data;
}
/* 

fetch(`${urlapi}?email=${email}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ id, name, email, password }) => {
      console.log(id, name, email, password);
    });
  });

 */

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const password = e.target.password.value;
    const email = e.target.email.value;
    const data = await getData(urlapi, email, password);

    if (password && email && data.length > 0) {
      data.forEach((input) => {
        if (!(email === input.email)) {
          throw new Error("email malo");
        }
        if (!password === input.password) {
          console.log(input.password);

          throw new Error("password malo");
        }
        console.log(input.email, input.password, email === input.email);
      });
      window.location.href = urlRedirect;
    } else {
      throw new Error("soy un loquillo");
    }
  } catch (error) {
    console.log(error);
  }
});

const file = new File(["foo"], "foo.txt", {
  type: "text/html",
});
console.log(file);
/* const valores = {
  email: "example@gmail.com",
  password: "1234569gux",
};
inputFields.forEach((field) => {
  const data = field.dataset.input;
  field.value = valores[data];
});
 */
