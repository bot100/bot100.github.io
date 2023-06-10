export const generateIconsSocialMedias = () => {
  const social_medias = document.querySelector(".social-medias");
  const array_links = [
    "../image/icons/facebook-icon.png",
    "../image/icons/twitter-3.png",
    "../image/icons/instagram-2016.png",
  ];
  for (let i = 0; i < array_links.length; i++) {
    const img = document.createElement("img");
    img.src = array_links[i];
    social_medias.appendChild(img);
  }
};
