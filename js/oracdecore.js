import { renderProducts } from "./main.js";

const searchInput = document.getElementById("search-input");

let oracDecoreProducts = [];

fetch("./data/products.json")
  .then((res) => res.json())
  .then((products) => {
    oracDecoreProducts = products.filter((product) =>
      product.name.toLowerCase().includes("orac")
    );
    renderProducts(oracDecoreProducts);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = oracDecoreProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
