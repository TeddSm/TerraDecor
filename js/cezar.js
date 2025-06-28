import { renderProducts } from "./main.js";

const searchInput = document.getElementById("search-input");

let cezarProducts = [];

fetch("./data/products.json")
  .then((res) => res.json())
  .then((products) => {
    cezarProducts = products.filter((product) =>
      product.name.toLowerCase().includes("cezar")
    );
    renderProducts(cezarProducts);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cezarProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
