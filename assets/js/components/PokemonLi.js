class PokemonLi extends HTMLElement {
    constructor(pokemon){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML += this.styles();
        shadow.innerHTML += this.build(pokemon);
    }

    build(pokemon){
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
    }

    styles(){
        return `<link rel="stylesheet" href="assets/css/pokedex.css">`;
    }
}

customElements.define("pokemon-li", PokemonLi);