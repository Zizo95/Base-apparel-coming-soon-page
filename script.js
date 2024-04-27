const iconEl = document.querySelector(".error-img");
const messageEl = document.querySelector(".message");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", function(){
  iconEl.style.display = "inline"
  messageEl.style.display = "block"
})