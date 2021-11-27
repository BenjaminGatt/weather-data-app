document.getElementById("signup-link").addEventListener("click", function () {
  document.querySelector(".page-1").classList.add("hidden");
  document.querySelector(".page-2").classList.remove("hidden");
});

document.getElementById("login-link").addEventListener("click", function () {
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-1").classList.remove("hidden");
});
