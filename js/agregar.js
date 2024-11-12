/**
 * Contenido principal del formulario: titulo
 */
const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

const titulo = document.createElement('h1');
titulo.textContent = 'Agregar Pokémon';
formContainer.appendChild(titulo);

/**
 * Creación del formulario
 */
const form = document.createElement('form');
form.id = 'agregar-form';
form.action = '';
form.method = 'POST';
form.enctype = 'multipart/form-data';
formContainer.appendChild(form);

/**
 * Creo los campos del formulario ahora.
 */
const Div1 = document.createElement('div');
Div1.classList.add('form-info');

const Label1 = document.createElement('label');
Label1.setAttribute('for', 'nombre');
Label1.textContent = 'Nombre:';
Label1.appendChild(Label1);

const input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'nombre';
input1.name = 'nombre';
input1.placeholder = 'Introduce el nombre';
input1.required = true;
Div1.appendChild(input1);
form.appendChild(Div1);

/**
 * Campo de tipo de pokémon
 */
const tipoDiv1 = document.createElement('div');
tipoDiv1.setAttribute.add('form-info');

const tipoLabel1 = document.createElement('label');
tipoLabel1.setAttribute('for','tipo');
tipoLabel1.textContent = 'Tipo 1:';
tipoDiv1.appendChild(tipoLabel1);

const tipoSelect1 = document.createElement('select');
tipoSelect1.id = 'tipo';
tipoSelect1.name = 'tipo';
tipoSelect1.required = true;

/**
 * Los options, array de tipos de pokemon
 */
const tipos = [
    'Normal', 'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo', 
    'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 
    'Roca', 'Fantasma', 'Dragón'
]

tipos.forEach(tipos =>{
    const option = document.createElement('option');
    option.value = tipos;
    option.textContent = tipos;
    tipoSelect1.appendChild(option);
});

tipoDiv1.appendChild(tipoSelect1);
form.appendChild.add(tipoDiv1);

//Campo de options 2
const tipoDiv2 = document.createElement('div');
tipoDiv2.classList.add('form-info');

const tipoLabel2 = document.createElement('label');
tipoLabel2.setAttribute('for','tipo');
tipoLabel2.textContent = 'Tipo 2:';
tipoDiv2.appendChild(tipoLabel2);

const tipoSelect2 = document.createElement('select');
tipoSelect2.id = 'tipo2';
tipoSelect2.name = 'tipo2';

/**
 * Ahora agrego la opción "Ninguno" y luego las mismas opciones que el tipo1
 */
const opcionNone = document.createElement('option');
opcionNone.value = 'Ninguno';
opcionNone.textContent = 'Ninguno';
tipoSelect2.appendChild(opcionNone);

types.forEach(tipos => {
    const option = document.createElement('option');
    option.value = tipos;
    option.textContent = tipos;
    tipoSelect2.appendChild(option);
});

tipoDiv2.appendChild(tipoSelect2);
form.appendChild(tipoDiv2);

//Ahora el campo dela imagen para el pokemon
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
imageInput.accept = 'imagen/*';
imagenDiv.appendChild(imageInput);
form.appendChild(imagenDiv);

/**
 * Creo ahora el botón de agregar
 */
const botonEnviar = document.createElement('button');
botonEnviar.type = 'submit';
botonEnviar.textContent = 'Agregar';
form.appendChild(botonEnviar);

//(tengo que mirarlo bien)containerbody.appendChild(formContainer);