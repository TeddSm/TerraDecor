import { renderProducts } from "./main.js";

const searchInput = document.getElementById("search-input");

let nmcProducts = [];

fetch("./data/products.json")
  .then((res) => res.json())
  .then((products) => {
    nmcProducts = products.filter((product) =>
      product.name.toLowerCase().includes("nmc")
    );
    renderProducts(nmcProducts);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = nmcProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
