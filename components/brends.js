export const generateBrends = () => {
  const container_brends = document.querySelector(".container-brends");
  const array_links = [
    "../image/Tonkean.png",
    "../image/BigSpring.png",
    "../image/Clearbit.png",
    "../image/Mine.png",
    "../image/Shake.png",
  ];
  for (let i = 0; i < array_links.length; i++) {
    const img = document.createElement("img");
    img.src = array_links[i];
    container_brends.appendChild(img);
  }
};
