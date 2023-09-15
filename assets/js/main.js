var offset = 0;
var limit = 4;
var max = 151;

function loadPokemons(offset, limit){
        pokeApi.getPokemonList(offset, limit).then(pokemons => {
            document.getElementById("pokemonList").innerHTML += pokemons.map((pokemon) => {
                    return `<li class="pokemon ${pokemon.type}" onclick="openPokemonDetails('${pokemon.id}')">
                            <span class="number">#${pokemon.id}</span>
                            <span class="name">${pokemon.name}</span>
                            <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                                </ol>
                                <img src="${pokemon.img}" alt="${pokemon.name}">
                            </div>
                        </li>`;
            }).join(``);
        });
}

loadPokemons(offset, limit);

function openPokemonDetails(id){
    let pokemon = {}
    pokemon.url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    pokeApi.getPokemonDetail(pokemon).then(detail => {
        let pokemon = Pokemon.ofPokeApiDetail(detail);
        document.getElementById("listSection").hidden = true;
        document.getElementById("main").innerHTML += `
        <section id="detailSection" class="content detail_content ${pokemon.type}">
            <div style="display: flex; justify-content: space-between;">
                <button class="detail_button" type="button" onclick="closePokemonDetails()"><img src="../assets/icons/voltar.png" alt="voltar"></button>
                <button class="detail_button" type="button" onclick="closePokemonDetails()"><img src="../assets/icons/coracao.png" alt="favoritar"></button>
            </div>
            <div class="resume_box">
                <div style="display: flex; justify-content: space-between;">
                    <h2 class="resume_title">${pokemon.name}</h2>
                    <h3 class="resume_number">#${pokemon.id}</h3>
                </div>
                <ol class="resume_type_list">
                    ${pokemon.types.map(type => `<li class="resume_type ${type}">${type}</li>`).join('')}
                </ol>
                <img class="resume_img" src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="details_box">
                <div class="details_options">
                    <span style="border-bottom: 0.125rem solid black;">About</span>
                    <span>Base Stats</span>
                    <span>Evolution</span>
                    <span>Moves</span>
                </div>
                <div class="details_fields">
                    <ul class="about_list">
                        <li>Species</li>
                        <li>conteudo</li>
                        <li>Height</li>
                        <li>conteudo</li>
                        <li>Weight</li>
                        <li>conteudo</li>
                        <li>Abilities</li>
                        <li>conteudo</li>
                    </ul>
                    <h3>Breeding</h3>
                    <ul class="about_list">
                        <li>Gender</li>
                        <li>conteudo</li>
                        <li>Egg Groups</li>
                        <li>conteudo</li>
                        <li>Egg Cycle</li>
                        <li>conteudo</li>
                    </ul>
                </div>
            </div>
        </section>`
    });
}

function closePokemonDetails(){
    document.getElementById("listSection").hidden = false;
    document.getElementById("main").removeChild(document.getElementById("detailSection"));
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
