// Redirige a la página de inicio al hacer clic en el logo
const logo = document.querySelector(".pokedex-logo");
logo.addEventListener("click", () => {
    window.location.href = `../index.html`;
});

// Redirige a la página de inicio al hacer clic en el div
const botonFormulario = document.querySelector(".back-button");
botonFormulario.addEventListener("click", () => {
    window.location.href = `../index.html`;
});


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('main');
    console.log(container);

    // Crear contenedor del formulario
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    // Titulo del formulario
    const titulo = document.createElement('h1');
    titulo.textContent = 'Agregar Pokémon';
    formContainer.appendChild(titulo);

    // Crear formulario
    const containerForm = document.createElement('div');
    containerForm.classList.add('centrar');
    const form = document.createElement('form');
    form.id = 'agregar-form';
    form.method = 'POST';
    form.enctype = 'multipart/form-data';
    form.classList.add('centrar-formulario');
    containerForm.appendChild(form);
    formContainer.appendChild(containerForm);

    // Campo Nombre
    const Div1 = document.createElement('div');
    Div1.classList.add('form-info');

    const Label1 = document.createElement('label');
    Label1.setAttribute('for', 'nombre');
    Label1.textContent = 'Nombre:';
    Div1.appendChild(Label1);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'nombre';
    input1.name = 'nombre';
    input1.placeholder = 'Introduce el nombre';
    input1.required = true;
    Div1.appendChild(input1);
    form.appendChild(Div1);

    // Campo Tipo 1
    const tipoDiv1 = document.createElement('div');
    tipoDiv1.classList.add('form-info');

    const tipoLabel1 = document.createElement('label');
    tipoLabel1.setAttribute('for','tipo');
    tipoLabel1.textContent = 'Tipo 1:';
    tipoDiv1.appendChild(tipoLabel1);

    const tipoSelect1 = document.createElement('select');
    tipoSelect1.id = 'tipo';
    tipoSelect1.name = 'tipo';
    tipoSelect1.required = true;

    const tipos = [
        'Normal', 'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo', 
        'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 
        'Roca', 'Fantasma', 'Dragón'
    ];

    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo;
        tipoSelect1.appendChild(option);
    });

    tipoDiv1.appendChild(tipoSelect1);
    form.appendChild(tipoDiv1);

    // Campo Tipo 2
    const tipoDiv2 = document.createElement('div');
    tipoDiv2.classList.add('form-info');

    const tipoLabel2 = document.createElement('label');
    tipoLabel2.setAttribute('for','tipo2');
    tipoLabel2.textContent = 'Tipo 2:';
    tipoDiv2.appendChild(tipoLabel2);

    const tipoSelect2 = document.createElement('select');
    tipoSelect2.id = 'tipo2';
    tipoSelect2.name = 'tipo2';

    const opcionNone = document.createElement('option');
    opcionNone.value = 'Ninguno';
    opcionNone.textContent = 'Ninguno';
    tipoSelect2.appendChild(opcionNone);

    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo;
        tipoSelect2.appendChild(option);
    });

    tipoDiv2.appendChild(tipoSelect2);
    form.appendChild(tipoDiv2);

    // Campo Imagen
    const imagenDiv = document.createElement('div');
    imagenDiv.classList.add('form-info');

    const imagenLabel = document.createElement('label');
    imagenLabel.setAttribute('for', 'imagen');
    imagenLabel.textContent = 'Imagen:';
    imagenDiv.appendChild(imagenLabel);

    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.id = 'imagen';
    imageInput.name = 'imagen';
    imageInput.accept = 'image/*';
    imagenDiv.appendChild(imageInput);
    form.appendChild(imagenDiv);

    // Botón de enviar
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Agregar';
    form.appendChild(botonEnviar);

    container.appendChild(formContainer);

    //Manejar el envio del formulario con Location
    botonEnviar.addEventListener('click', function(){
        const nombre = document.getElementById('nombre').value;
        const tipo = document.getElementById('tipo').value;
        const tipo2 = document.getElementById('tipo2').value;

        //obtener la lista acual de pokemon en la localStorage
        const pokemon = JSON.parse(localStorage.getItem('pokemon'));

        //calcular el siguiente id disponible
        const ultimoid = pokemon.length > 0 ? Math.max(...pokemon.map(p =>p.id)): 0;
        const nuevoId = ultimoid + 1;

        //crear un objeto POkemon
        const nuevoPokemon = {
            id: nuevoId,
            nombre : nombre,
            //para los tipos en caso de que el segundo tipo sea "ninguno"
            //solo pueda envuirse con un tipo
            tipos : tipo2 === 'Ninguno' ? [tipo] : [tipo, tipo2]
        };
        
        //agregar el nuevo pokemon a la lsita y  actualizar el localStorage
        pokemon.push(nuevoPokemon);
        localStorage.setItem('pokemon', JSON.stringify(pokemon));
        
        //redirigir al index.html
        window.location.href = `./index.html`;
    });
});
