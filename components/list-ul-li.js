const array_product = [
  "Product",
  "Connections",
  "Protocols",
  "Personas",
  "Integrations ",
  "Catalog",
  "Pricing",
  "Security",
  "GDPR",
];

const array_developers = [
  "For Developers",
  "Docs",
  "API",
  "Open Source",
  "Engineering Team",
];

const array_company = ["Company", "Careers", "Blog", "Press"];

const array_support = [
  "Support",
  "Help Center",
  "Contact Us",
  "Security",
  "Bulletins ",
  "Documentation",
  "Partner",
  "Portal",
];

const col_2_f = document.querySelector(".col-2-f");
const col_3_f = document.querySelector(".col-3-f");
const col_4_f = document.querySelector(".col-4-f");
const col_5_f = document.querySelector(".col-5-f");

const generateUlLi = (array, col) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.appendChild(li);
  }
  col.appendChild(ul);
};

generateUlLi(array_product, col_2_f);
generateUlLi(array_developers, col_3_f);
generateUlLi(array_company, col_4_f);
generateUlLi(array_support, col_5_f);
