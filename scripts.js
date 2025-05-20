const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function esconderForm() {
  form.style.left = "-290px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}

const registerLink = document.querySelector(".register-link");
if (registerLink) {
  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarForm();
  });
}

mascara.addEventListener("click", function () {
  esconderForm();
});

document.getElementById('search-btn').addEventListener('click', function () {
  const query = document.getElementById('search').value.trim();
  if (query !== "") {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchURL, '_blank');
  }
});

document.getElementById('search').addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('search-btn').click();
  }
});






