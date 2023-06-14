import fetch from "node-fetch";

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(typeof json.sprites))
  .catch((err) => console.error("error:" + err));

const objectos = { uno: 1, dos: 2 };
const arreglo = [1, 2, 3, 4, 5, 6];
console.log(objectos.hasOwn("uno"));
