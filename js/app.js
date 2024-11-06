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
    const mainElement = document.getElementsByTagName('main')[0];

    for (let i = 0; i < pokemonList.length; i++) {
        crearPokemonCards(pokemonList[i]);
        const pokemonInfo = document.createElement('div');
        pokemonInfo.textContent = `ID: ${pokemonList[i].id}, Nombre: ${pokemonList[i].nombre}, Tipo(s): ${pokemonList[i].tipos.join(', ')}`;
        mainElement.appendChild(pokemonInfo);
    }
}
