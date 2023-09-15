const pokeApi = {}

pokeApi.getPokemonList = (offset = 0, limit = 10) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
            .then(response => response.json())
            .then(jsonBody => jsonBody.results)
            .then(results => results.map(pokeApi.getPokemonDetail))
            .then(jsonPromises => Promise.all(jsonPromises))
            .then(pokemons => pokemons.map((Pokemon.ofPokeApiDetail)))                            
            .catch(error => console.error(error));
}

pokeApi.getPokemonDetail = pokemon => fetch(pokemon.url).then(response => response.json());