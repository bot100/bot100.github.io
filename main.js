const burger = document.querySelector(".burger-menu");
// Events
burger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("nav").classList.toggle("open");
});

import { generateBrends } from "./components/brends.js";
import { generateNotation } from "./components/purple-notation.js";
import { generateIconsSocialMedias } from "./components/social-medias.js";
import "./components/list-ul-li.js";

generateNotation();
generateBrends();
generateIconsSocialMedias();
