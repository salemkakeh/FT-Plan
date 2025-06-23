let move = document.getElementById("move");


window.onscroll = function () {
  if(window.scrollY >= 500) {
    move.style.display = "flex";

  } else {
    move.style.display = "none";
  }
}


move.onclick = function () {
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth",
  })
}