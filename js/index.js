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


//Botón para ir al formulario
const botonFormulario = document.querySelector(".button-style");

botonFormulario.addEventListener("click", () => {
    alert("Formulario aún no implementado.");
    console.log("Botón 'Formulario' presionado");
});
