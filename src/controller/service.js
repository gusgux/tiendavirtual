const urlapi = "  http://localhost:3000/products";

async function getData(id) {
  const list = await fetch(urlapi + "?id=" + id);
  const response = await list.json();
  return response;
}

async function getDataList(limit = 100) {
  const list = await fetch(urlapi + "?_sort=id&_order=desc&_limit=" + limit);
  const response = await list.json();
  return response;
}

async function sendData(img, category, price, product, msg, id) {
  return fetch(urlapi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, category, price, product, msg, id }),
  });
}

async function updateData(img, category, price, product, msg, id) {
  return fetch(urlapi + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, category, price, product, msg }),
  });
}

async function deleteData(id) {
  return fetch(urlapi + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export const service = {
  getData,
  getDataList,
  sendData,
  updateData,
  deleteData,
};
