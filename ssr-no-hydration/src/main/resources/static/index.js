const btn = document.querySelector("button");
let count = 1;
btn.addEventListener("click", () => {
  count++;
  btn.textContent = count;
});
