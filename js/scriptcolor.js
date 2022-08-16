console.log("Hello");

let button = document.querySelector(".button");
let photo = document.querySelector(".photo");

button.addEventListener("click", () => {
  if (photo.classList.contains("hide")) {
    photo.classList.remove("hide");
    button.innerText = "Ukryj zdjęcie!";
  } else {
    photo.classList.add("hide");
    button.innerText = "Pokaż zdjęcie!";
  }
});