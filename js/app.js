/**
 * Funcion para guardar un Pokémon en localStorage
 */
function guardarPokemonEnLocalStorage() {
    // Guardar el objeto inicial de Pokémon en localStorage si no está guardado ya
    //en caso de que ya este cargado, evita cualquier accion adicional, evitando la ssobreescritura 
    if (!localStorage.getItem('pokemonList')) {
    localStorage.setItem('pokemonList', JSON.stringify(pokemon));
    }
}

//llamar a la funcion 
guardarPokemonEnLocalStorage();


/**
 * Funcion para mostrar los pokemon en html 
 * Lee los datos del localStorage y genera un HTML 
 */

//mostrar el pokemon al mostrar la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarPokemon();
});

function mostrarPokemon() {
    //recupera la lista guardada en localStorage
    const pokemonList = JSON.parse(localStorage.getItem('pokemonList'));

    for (let i = 0; i < pokemonList.length; i++) {
        crearPokemonCards(pokemonList[i]);
    }
}

function crearIndex(){

    document.body.classList.add('container-body');
    const main = document.querySelector('main');

    const container = document.createElement('div');
    container.classList.add('container');

    main.appendChild(container);
    mostrarPokemon();

}
function crearPokemonCards(pokemon) {

    const container = document.querySelector('.container');

    const card = document.createElement('div');
    card.classList.add('card');

    //Crea el div de NOMBRE e ID
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

    //Creo la IMAGEN
    const img = document.createElement('img');
    //IMAGENES dinamicas buscadas con el id
    img.src = `./img/${pokemon.id}.png`;
    img.alt = pokemon.nombre;
    card.appendChild(img);

    //Crear IMAGEN de BORRAR

    //Crea el div de los TIPOS
    const pokedexInferior = document.createElement('div');
    pokedexInferior.classList.add('pokedex-tipo');

    //Bucle de TIPOS por si hay dos
    for (let i = 0; i<pokemon['tipos'].length; i++) {
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
    container.appendChild(card);

}

crearIndex ();
