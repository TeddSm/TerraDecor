const container = document.getElementById("product-container");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("../data/products.json")
  .then((res) => res.json())
  .then((products) => {
    const product = products.find((p) => p.id === productId);

    if (!product) {
      container.innerHTML = `<p>Товар не знайдено</p>`;
      return;
    }

    container.innerHTML = `
      <h1>${product.name}</h1>
      <img src="${product.image}" alt="${product.name}" />
      <p>${product.description}</p>
      <p>${product.price} грн</p>
    `;
  })
  .catch((error) => {
    container.innerHTML = `<p>Помилка при завантаженні товару</p>`;
    console.error(error);
  });
