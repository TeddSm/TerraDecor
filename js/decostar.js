import { renderProducts } from "./main.js";

const searchInput = document.getElementById("search-input");

let decoStarProducts = [];

fetch("./data/products.json")
  .then((res) => res.json())
  .then((products) => {
    decoStarProducts = products.filter((product) =>
      product.name.toLowerCase().includes("deco")
    );
    renderProducts(decoStarProducts);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = decoStarProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
