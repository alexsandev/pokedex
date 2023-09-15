class Pokemon {
    id;
    name;
    types = [];
    type;
    img;

    static ofPokeApiDetail = (pokeApiDetail) => {
        let pokemon = new Pokemon();
        pokemon.id = pokeApiDetail.id;
        pokemon.name = pokeApiDetail.name;
        pokemon.types = pokeApiDetail.types.map(index => index.type.name);
        pokemon.type = pokemon.types[0];
        pokemon.img = pokeApiDetail.sprites.other["official-artwork"].front_default;
        return pokemon;
    }
}