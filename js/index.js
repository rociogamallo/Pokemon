//Contenedor del formulario
const divfuera = document.createElement('div');
divfuera.classList.add('content-container');
const divformu = document.createElement('div');
divformu.textContent = 'Formulario';

divformu.appendChild(divfuera);


// Redirige a la página de inicio al hacer clic en el logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});

