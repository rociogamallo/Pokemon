/**
 * Función para guardar un Pokémon en localStorage
 */
function guardarPokemonEnLocalStorage() {
    // Verifica si no hay un objeto Pokémon guardado 
    if (!localStorage.getItem('pokemon')) {
        // Si no existe, guarda el objeto
        localStorage.setItem('pokemon', JSON.stringify(pokemon));  
    }
}

// Llamar a la función para guardar los Pokémon al cargar
guardarPokemonEnLocalStorage();

/**
 * Función para mostrar los Pokémon en HTML
 * Lee los datos del localStorage y genera el HTML
 */
document.addEventListener('DOMContentLoaded', () => {
    // Verifica si la página tiene un contenedor de Pokémon
    if (!document.querySelector('.container')) {
        // Si no existe, crea el contenedor
        crearIndex();
    }
    // Muestra los Pokémon almacenados
    mostrarPokemon();

    // Añadir evento de eliminación a la clase .basura-img
    document.querySelectorAll('.basura-img').forEach(img => {
        img.addEventListener('click', eliminarPokemon);
    });
});

// Función para mostrar los Pokémon 
function mostrarPokemon() {
    // Recupera la lista de Pokémon almacenada 
    const pokemon = JSON.parse(localStorage.getItem('pokemon'));

    // Si hay Pokémon almacenados crea las cards para cada uno
    if (pokemon) {
        for (let i = 0; i < pokemon.length; i++) {
            crearPokemonCards(pokemon[i]);
        }
    }
}

// Función para eliminar un Pokémon
function eliminarPokemon(event) {
    const id = parseInt(event.target.id); // Obtiene el ID del Pokémon a eliminar

    // Recupera la lista de Pokémon
    let pokemonList = JSON.parse(localStorage.getItem('pokemon')) || [];

    // Filtra la lista de Pokémon
    pokemonList = pokemonList.filter(pokemon => pokemon.id !== id);

    // Actualiza la lista de Pokémon
    localStorage.setItem('pokemon', JSON.stringify(pokemonList));

    // Recarga la página para actualizar la vista
    window.location.reload();
}

// Función para filtrar los Pokémon por nombre
function buscarPokemon() { 
    const inputBuscador = document.getElementById('buscador'); 
    inputBuscador.addEventListener('keyup', () => { 
        const termino = inputBuscador.value.toLowerCase(); 
        const tarjetasPokemon = Array.from(document.querySelectorAll('.card-container')); 
        tarjetasPokemon.forEach(tarjeta => { 
            const nombrePokemon = tarjeta.querySelector('.pokemon-nombre').textContent.toLowerCase(); 
            if (nombrePokemon.includes(termino)) { 
                tarjeta.style.order = 0; // Mueve las cards encontradas al principio 
                tarjeta.style.display = 'flex'; 
            } else { 
                tarjeta.style.order = 1; // Mueve las cards no encontradas al final 
                tarjeta.style.display = 'none'; // Oculta las cards que no coinciden 
            } 
        });
    });
}

// Llama a la función de búsqueda al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    buscarPokemon();
});

/**
 * Redirección de páginas
 * Redirige de index a formulario y de logo a index
 */
// Redirige a index al hacer clic en el logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.replace(`index.html`);
});

// Botón para ir al formulario 
const botonFormulario = document.querySelector(".button-style");
botonFormulario.addEventListener("click", () => {
    window.location.href = "./pages/agregar.html";
});

/**
 * Función para crear el index y el div
 */
function crearIndex() {
    document.body.classList.add('container-body'); // Añade clase al body
    const main = document.querySelector('main');

    // Crear el div donde iran las cards
    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
}

/**
 * Función para crear las cards de los Pokémon
 */
function crearPokemonCards(pokemon) {
    const container = document.querySelector('.container');
    
    // Verifica si ya existe una card con el mismo id para no repetirse
    if (!container.querySelector(`#pokemon-${pokemon.id}`)) {
        
        // Crea un div 
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.id = `pokemon-${pokemon.id}`;

        // Crea la Card
        const card = document.createElement('div');
        card.classList.add('card');

        // Div para el ID y nombre 
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

        // Imagen del Pokémon
        const img = document.createElement('img');
        img.src = `./img/${pokemon.id}.png`;  // ruta de la imagen dinamica
        img.alt = pokemon.nombre;
        img.classList.add('card-img');
        card.appendChild(img);

        // Div tipos del Pokémon
        const pokedexInferior = document.createElement('div');
        pokedexInferior.classList.add('pokedex-tipo');

        // Color de los tipos de Pokemons
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

        // Crea el backCard
        const backCard = document.createElement('div');
        backCard.classList.add('backcard');

        // Div para mostrar peso, altura, habilidad y hábitat
        const info = document.createElement('div');
        info.classList.add('info-container');
        const peso = document.createElement('p');
        peso.textContent = pokemon.peso ? `-Peso: ${pokemon.peso}kg` : '-Peso: No disponible';
        info.appendChild(peso);

        const altura = document.createElement('p');
        altura.textContent = pokemon.altura ? `-Altura: ${pokemon.altura}m` : '-Altura: No disponible';
        info.appendChild(altura);

        const habilidades = document.createElement('p');
        if (pokemon.habilidades && pokemon.habilidades.length > 0) {
            habilidades.textContent = `-Habilidad: ${pokemon.habilidades[0].nombre}`;
        } else {
            habilidades.textContent = '-Habilidad: No disponible';
        }
        info.appendChild(habilidades);

        const habitat = document.createElement('p');
        habitat.textContent = pokemon.habitat ? `-Hábitat: ${pokemon.habitat}` : '-Hábitat: No disponible';
        info.appendChild(habitat);

        backCard.appendChild(info);

        // Crear el la papelera para eliminar 
        const basura = document.createElement('div');
        basura.classList.add('basura-container');
        const imgPapelera = document.createElement('img');
        imgPapelera.src = `./img/papelera.png`;  
        imgPapelera.alt = 'papelera';
        imgPapelera.id = `${pokemon.id}`;
        imgPapelera.classList.add('basura-img');
        basura.appendChild(imgPapelera);
        backCard.appendChild(basura);

        cardContainer.appendChild(card);
        cardContainer.appendChild(backCard);
        container.appendChild(cardContainer);
    }
}

// Función para escribir el tamaño de la pantalla
document.addEventListener('DOMContentLoaded', function() {
    const tamañoPantalla = window.screen.width;
    const alturaPantalla = window.screen.height;
    const tamaño = document.getElementById('tamaño_pantalla');
    tamaño.textContent = `Tamaño de la pantalla: ${tamañoPantalla}x${alturaPantalla}`;
});

// Crear el index
crearIndex();
