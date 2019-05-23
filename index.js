window.onload = function() {
  document.getElementById("img1").addEventListener("click", function() {
    document.getElementById("img2").style.visibility = "visible";
  });
  document.getElementById("img1").addEventListener("touchstart", function() {
    document.getElementById("img2").style.visibility = "visible";
  });
};
