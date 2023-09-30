class PokemonLi extends HTMLElement {
    constructor(pokemon){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.styles());
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
        let style = document.createElement("style");
        style.textContent = `
        .pokemon {
            display: flex;
            flex-direction: column; 
            margin: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            min-width: max-content;
            -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.44);
            -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.44);
            box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.44);
        }
        
        .pokemon .number{
            text-align: right;
        }
        
        .grass .number{
            color: #246959;
        }
        
        .fire .number {
            color: #d84949;
        }
        
        .water .number {
            color: #3798f3;
        }
        
        .electric .number{
            color: #ffcd42;
        }
        
        .pokemon .name{
            color: #fff;
            margin-bottom: .25rem;
            text-transform: capitalize;
        }
        
        .pokemon .detail{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .pokemon .detail .types{
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .pokemon .detail .types .type{
            text-align: center;
            font-size: .625rem;
            color: #fff;
            padding: 0.25rem .5rem;
            margin: 0.25rem 0;
            border-radius: 1rem;
            text-transform: capitalize;
            filter: brightness(1.05);
        }
        
        .fire .detail .types .type{
            background-color: #fd8686;
        }
        
        .grass .detail .types .type{
            background-color: #5de0c7;
        }
        
        .water .detail .types .type{
            background-color: #90d2fe;
        }
        
        .electric .detail .types .type{
            background-color: #ffe681;
        }
        
        .pokemon .detail img {
            max-width: 100%;
            max-height: 70px;
        }
        
        .normal{
            background-color: #aaaa99;
        }
        
        .fire {
            background-color: #fb6c6c;
        }
        
        .water {
            background-color: #77befe;
        }
        
        .grass {
            background-color: #46d1b1;
        }
        
        .electric {
            background-color: #ffd970;
        }
        
        .flying {
            background-color: #8899ff;
        }
        
        .fighting{
            background-color: #bb5544;
        }
        
        .poison {
            background-color: #aa5599;
        }
        
        .ground {
            background-color: #ddbb55;
        }
        
        .rock {
            background-color: #bbaa66;
        }
        
        .psychic{
            background-color: #ff5599;
        }
        
        .ice{
            background-color: #66ccff;
        }
        
        .bug {
            background-color: #6ac446;
        }
        
        .ghost{
            background-color: #6666bb;
        }
        
        .steel{
            background-color: #aaaabb;
        }
        
        .dragon{
            background-color: #7766ee;
        }
        
        .dark{
            background-color: #775544;
        }
        
        .fairy{
            background-color: #ee99ee;
        }
        `;

        return style;
    }
}

customElements.define("pokemon-li", PokemonLi);