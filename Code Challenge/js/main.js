function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

let btn = document.getElementById("randomColor");
btn.addEventListener("click", () => {
  let color = generateRandomColor();
  document.body.style.background = "none";
  document.body.style.backgroundColor = color;
  document.getElementById("hex").textContent = color;
  document.getElementById("colorOne").textContent = "";
  document.getElementById("colorTwo").textContent = "";
  document.getElementById("angle").textContent = "";
});

let btnGradient = document.getElementById("randomColorGradient");
btnGradient.addEventListener("click", () => {
  let colorOne = generateRandomColor();
  let colorTwo = generateRandomColor();
  let angle = Math.floor(Math.random() * 360) + "deg";
  document.body.style.background = `linear-gradient(${angle}, ${colorOne}, ${colorTwo})`;
  document.getElementById("colorOne").textContent = colorOne;
  document.getElementById("colorTwo").textContent = colorTwo;
  document.getElementById("angle").textContent = angle;
  document.getElementById("hex").textContent = "";
});
