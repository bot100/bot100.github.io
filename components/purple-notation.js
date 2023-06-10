export const generateNotation = () => {
  const purple_notation = document.querySelectorAll(".purple-notation");
  const array_links = [
    "../image/icons/purple-icon-2.png",
    "../image/icons/purple-icon-1.png",
    "../image/icons/purple-icon-3.png",
    "../image/icons/purple-icon-4.png",
  ];
  const array_text = [
    "v3.1 released.",
    "Why Qubly",
    "For Product Teams",
    "For Engineering Teams",
  ];
  const span = document.createElement("span");
  span.textContent = "Learn more";
  for (let i = purple_notation.length - 1; i >= 0; i--) {
    const img = document.createElement("img");
    const h5 = document.createElement("h5");
    img.src = array_links[i];
    h5.textContent = array_text[i];
    h5.appendChild(span);
    purple_notation[i].appendChild(img);
    purple_notation[i].appendChild(h5);
  }
};
