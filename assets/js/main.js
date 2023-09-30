var offset = 0;
var limit = 3;
var max = 151;

loadPokemons(offset, limit);

function loadPokemons(offset, limit){
    pokeApi.getPokemonList(offset, limit).then(pokemons => {
        pokemons.map((pokemon) => {
            document.getElementById("pokemonList").appendChild(new PokemonLi(pokemon));
        });
    });
}

function openPokemonDetails(id){
    let pokemon = {}
    pokemon.url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    pokeApi.getPokemonDetail(pokemon).then(detail => {
        let pokemon = Pokemon.ofPokeApiDetail(detail);
        document.getElementById("listSection").hidden = true;
        document.getElementById("main").appendChild(new PokemonDetail(pokemon));
    });
}

function closePokemonDetails(){
    document.getElementById("listSection").hidden = false;
    document.getElementById("main").removeChild(document.getElementsByTagName('poke-detail').item(0));
}

function loadMore(){
    offset += limit;
    if(offset + limit >= max){
        loadPokemons(offset, max - offset);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemons(offset, limit);
    }
}