/**
 * Función para guardar un Pokémon en localStorage
 */
function guardarPokemonEnLocalStorage() {
    // Guardar el objeto inicial de Pokémon en localStorage si no está guardado ya
    if (!localStorage.getItem('pokemonList')) {
        localStorage.setItem('pokemonList', JSON.stringify(pokemonList));  // Asegúrate de tener pokemonList definido antes
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
    const pokemonList = JSON.parse(localStorage.getItem('pokemonList'));

    // Verifica si pokemonList existe antes de proceder
    if (pokemonList) {
        for (let i = 0; i < pokemonList.length; i++) {
            crearPokemonCards(pokemonList[i]);
        }
    }
}

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
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `pokemon-${pokemon.id}`;  // Asignamos un ID único por Pokémon

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
        card.appendChild(img);

        // Crea el div de los TIPOS
        const pokedexInferior = document.createElement('div');
        pokedexInferior.classList.add('pokedex-tipo');

        // Bucle para crear los tipos del Pokémon
        for (let i = 0; i < pokemon['tipos'].length; i++) {
            const tipo = document.createElement('div');
            tipo.classList.add('tipo');
            switch (pokemon['tipos'][i]) {
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
                default:
                    tipo.style.backgroundColor = 'grey';
                    break;
            }
            tipo.textContent = pokemon['tipos'][i];
            pokedexInferior.appendChild(tipo);
        }

        card.appendChild(pokedexInferior);
        container.appendChild(card);
    }
}

crearIndex();
