/**
 * Función para guardar un Pokémon en localStorage
 */
function guardarPokemonEnLocalStorage() {
    // Guardar el objeto inicial de Pokémon en localStorage si no está guardado ya
    if (!localStorage.getItem('pokemon')) {
        localStorage.setItem('pokemon', JSON.stringify(pokemon));  // Asegúrate de tener pokemon definido antes
    }
}

// Llamar a la función para guardar los Pokémon
guardarPokemonEnLocalStorage();

/**
 * Función para mostrar los Pokémon en HTML 
 * Lee los datos del localStorage y genera un HTML
 */
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si los Pokémon ya están en el localStorage antes de mostrarlos
    if (!document.querySelector('.container')) {
        crearIndex();
    }
    mostrarPokemon();
});

function mostrarPokemon() {
    // Recupera la lista guardada en localStorage
    const pokemon = JSON.parse(localStorage.getItem('pokemon'));

    // Verifica si pokemon existe antes de proceder
    if (pokemon) {
        for (let i = 0; i < pokemon.length; i++) {
            crearPokemonCards(pokemon[i]);
        }
    }
}

// Función para filtrar Pokémon por nombre
function buscarPokemon() { 
    const inputBuscador = document.getElementById('buscador'); 
    inputBuscador.addEventListener('keyup', () => { 
        const termino = inputBuscador.value.toLowerCase(); 
        const tarjetasPokemon = Array.from(document.querySelectorAll('.card-container')); 
        tarjetasPokemon.forEach(tarjeta => { 
            const nombrePokemon = tarjeta.querySelector('.pokemon-nombre').textContent.toLowerCase(); 
            if (nombrePokemon.includes(termino)) { 
                tarjeta.style.order = 0; // Agrupa los resultados encontrados al principio 
                tarjeta.style.display = 'flex'; } 
            else { tarjeta.style.order = 1; // Mueve los resultados no encontrados al final 
                tarjeta.style.display = 'none'; // Oculta las tarjetas que no coinciden 
                } 
            });
        });
}

// Llamar a la función de búsqueda al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    buscarPokemon();
});

/**
 * Añadir eventos: Redireccion de paginas
 * de index a formulario 
 * de logo a index
 */
// Redirige a la página de inicio al hacer clic en el logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});


//Botón para ir al formulario
const botonFormulario = document.querySelector(".button-style");

botonFormulario.addEventListener("click", () => {
    window.location.href = "./pages/agregar.html";
    alert("Redireccionando al formulario, saldrás de ésta página.");
});

//Botón para borrar el pokémon.
const botonBorrar = document.querySelector("");




/**
 * Función para crear el índice y el contenedor de Pokémon
 */
function crearIndex() {
    document.body.classList.add('container-body');
    const main = document.querySelector('main');

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
}

/**
 * Función para crear las tarjetas de Pokémon
 */
function crearPokemonCards(pokemon) {
    const container = document.querySelector('.container');
    
    // Verifica si el contenedor ya tiene un Pokémon con el mismo ID, para evitar duplicados
    if (!container.querySelector(`#pokemon-${pokemon.id}`)) {
        
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.id = `pokemon-${pokemon.id}`;

        const card = document.createElement('div');
        card.classList.add('card');

        // Crea el div de NOMBRE e ID
        const pokedexArriba = document.createElement('div');
        pokedexArriba.classList.add('pokedex-superior');
        const pokedexId = document.createElement('span');
        pokedexId.classList.add('pokedex-id');
        pokedexId.textContent = `#${pokemon.id}`;
        const pokemonNombre = document.createElement('span');
        pokemonNombre.classList.add('pokemon-nombre');
        pokemonNombre.textContent = pokemon.nombre;
        pokedexArriba.appendChild(pokedexId);
        pokedexArriba.appendChild(pokemonNombre);
        card.appendChild(pokedexArriba);

        // Crea la imagen
        const img = document.createElement('img');
        img.src = `./img/${pokemon.id}.png`;  // Ajusta la ruta si es necesario
        img.alt = pokemon.nombre;
        img.classList.add('card-img');
        card.appendChild(img);

        // Crea el div de los TIPOS
        const pokedexInferior = document.createElement('div');
        pokedexInferior.classList.add('pokedex-tipo');

        // Bucle para crear los tipos del Pokémon
        for (let i = 0; i < pokemon['tipos'].length; i++) {
            const tipo = document.createElement('div');
            tipo.classList.add('tipo');
            switch (pokemon['tipos'][i]){
                case 'Planta':
                    tipo.style.backgroundColor = 'rgb(8, 181, 8)';
                    break;
                case 'Veneno':
                    tipo.style.backgroundColor = 'rgb(121, 19, 121)';
                    break;
                case 'Fuego':
                    tipo.style.backgroundColor = 'rgb(118, 15, 15)';
                    break;
                case 'Agua':
                    tipo.style.backgroundColor = 'rgb(80, 143, 237)';
                    break;
                case 'Volador':
                    tipo.style.backgroundColor = 'rgb(147, 215, 214, 0.884)';
                    break;
                case 'Bicho':
                    tipo.style.backgroundColor = 'rgb(12, 91, 12)';
                    break;
                case 'Normal':
                    tipo.style.backgroundColor = 'rgb(135, 126, 126)';
                    break;  
                case 'Eléctrico':
                    tipo.style.backgroundColor = 'rgb(214, 217, 59)';
                    break;
                case 'Tierra':
                    tipo.style.backgroundColor = 'rgb(157, 114, 62)';
                    break; 
                case 'Hada':
                    tipo.style.backgroundColor = 'rgb(244, 23, 244)';
                    break;
                case 'Lucha':
                    tipo.style.backgroundColor = 'rgb(244, 170, 23)';
                    break;
                case 'Psíquico':
                    tipo.style.backgroundColor = 'rgb(173, 7, 173)';
                    break; 
                case 'Roca':
                    tipo.style.backgroundColor = 'rgb(91, 84, 70)';
                    break;
                case 'Acero':
                    tipo.style.backgroundColor = 'rgb(197, 196, 192)';
                    break; 
                case 'Hielo':
                    tipo.style.backgroundColor = 'rgb(74, 185, 185)';
                    break; 
                case 'Fantasma':
                    tipo.style.backgroundColor = 'rgb(138, 171, 212, 0.598)';
                    break;
                case 'Dragón':
                    tipo.style.backgroundColor = 'rgb(12, 2, 112)';
                    break; 
                default:
                    tipo.style.backgroundColor = 'grey'; 
                    break;
            }
            tipo.textContent = pokemon['tipos'][i];
            pokedexInferior.appendChild(tipo);
        }
        card.appendChild(pokedexInferior);


        //Comienzo de la otra card con la información
        const backCard = document.createElement('div');
        backCard.classList.add('backcard');

        // Div con la información
        const info = document.createElement('div');

        // Crear y agregar el elemento para el peso
        const peso = document.createElement('p');
        peso.textContent = `-Peso: ${pokemon.peso}`;
        info.appendChild(peso);

        // Crear y agregar el elemento para la altura
        const altura = document.createElement('p');
        altura.textContent = `-Altura: ${pokemon.altura}`;
        info.appendChild(altura);

        // Crear y agregar el elemento para la amistad base
        const amistad_base = document.createElement('p');
        amistad_base.textContent = `-Amistad_base: ${pokemon.amistad_base}`;
        info.appendChild(amistad_base);

        // Crear y agregar el elemento para el hábitat
        const habitat = document.createElement('p');
        habitat.textContent = `-Habitat: ${pokemon.habitat}`;
        info.appendChild(habitat);

        backCard.appendChild(info);


        //Papelera para borrado
        const basura = document.createElement('div');
        basura.classList.add('basura-container');
        const imgPapelera = document.createElement('img');
        imgPapelera.src = `./img/papelera.png`;  
        imgPapelera.alt = 'papelera';
        imgPapelera.classList.add('basura-img');
        basura.appendChild(imgPapelera);
        backCard.appendChild(basura);

        cardContainer.appendChild(card);
        cardContainer.appendChild(backCard);
        container.appendChild(cardContainer);
    }
}

crearIndex();
