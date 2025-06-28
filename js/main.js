let allProducts = [];

const containerCornice = document.getElementById("product-list-cornice");
const containerMoldings = document.getElementById("product-list-moldings");
const containerBaseboards = document.getElementById("product-list-baseboards");
const containerLighting = document.getElementById("product-list-lighting");
const containerDecorative = document.getElementById("product-list-decorative");
const containerGlues = document.getElementById("product-list-glues");
const searchInput = document.getElementById("search-input");

fetch("./data/products.json")
  .then((res) => res.json())
  .then((products) => {
    allProducts = products;
    renderProducts(allProducts);
  });

export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-img"/>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <strong>${product.price} грн</strong><br>
    <a href="/product.html?id=${product.id}">Детальніше</a>
  `;
  return card;
}

export function renderProducts(products) {
  containerCornice.innerHTML = "";
  containerMoldings.innerHTML = "";
  containerBaseboards.innerHTML = "";
  containerDecorative.innerHTML = "";
  containerLighting.innerHTML = "";
  containerGlues.innerHTML = "";

  if (products.length === 0) {
    containerCornice.innerHTML = "<p>Нічого не знайдено</p>";
    return;
  }

  products.forEach((product) => {
    if (product.category.toLowerCase().includes("карниз")) {
      containerCornice.appendChild(createProductCard(product));
    }
    if (product.category.toLowerCase().includes("молдинг")) {
      containerMoldings.appendChild(createProductCard(product));
    }
    if (product.category.toLowerCase().includes("плинтус")) {
      containerBaseboards.appendChild(createProductCard(product));
    }
    if (product.category.toLowerCase().includes("приховане освітлення")) {
      containerLighting.appendChild(createProductCard(product));
    }
    if (product.category.toLowerCase().includes("декоративні елементи")) {
      containerDecorative.appendChild(createProductCard(product));
    }
    if (product.category.toLowerCase().includes("клей")) {
      containerGlues.appendChild(createProductCard(product));
    }
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
