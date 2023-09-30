class PokemonDetail extends HTMLElement {
    constructor(pokemon){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.styles());
        shadow.appendChild(this.build(pokemon));
        shadow.getElementById("heart_button").addEventListener('click', () => this.heartPress(shadow));
    }

    build(pokemon){
        let teste = document.createElement("div");
        
        teste.innerHTML = `
        <section class="content detail_content ${pokemon.type}">
            <div style="display: flex; justify-content: space-between;">
                <button id="back_button" class="detail_button" type="button" onclick="closePokemonDetails()"><img src="../assets/icons/voltar.png" alt="voltar"></button>
                <button id="heart_button" class="detail_button" type="button"><img src="../assets/icons/coracao.png" alt="favoritar"></button>
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
        </section>`;

        return teste;
    }

    styles(){
        let style = document.createElement("style");
        style.textContent = `
        .content{
            width: 100vw;
            height: max-content;
            padding: 1rem;
            background-color: #fff;
        }
        
        .detail_content{
            padding: 0;
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
        
        .details_box{
            background-color: #fff;
            border-radius: 1rem;
            box-sizing: border-box;
            padding: 1rem 0;
        }
        
        .details_options{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            text-align: center;
            padding: 1rem 0.75rem;
        }
        
        .details_options span{
            border-bottom: 0.125rem solid rgb(180, 179, 179);
        }
        
        .details_fields{
            padding: 1rem;
        }
        
        .about_list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .resume_box{
            padding: 1rem;
        }
        
        .resume_title{
            color: #ffffff;
            margin: 0;
            padding: 0.25rem 0.25rem;
            font-size: 2rem;
            text-transform: capitalize;
        }
        
        .resume_number{
            color: #ffffff;
            margin: 0;
            padding-top: 1rem;
        }
        
        .resume_type_list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 30%;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .resume_type{
            text-align: center;
            font-size: .625rem;
            color: #fff;
            padding: 0.5rem .5rem;
            margin: 0.25rem 0.25rem;
            border-radius: 1rem;
            text-transform: capitalize;
            filter: brightness(1.125);
        }
        
        .resume_img{
            display: block;
            margin: auto;
            width: 50%;
            animation: myAnim 2s ease 0s 1 normal forwards;
        }
        
        @keyframes myAnim {
            0% {
                animation-timing-function: ease-in;
                opacity: 1;
                transform: translateY(-45px);
            }
        
            24% {
                opacity: 1;
            }
        
            40% {
                animation-timing-function: ease-in;
                transform: translateY(-24px);
            }
        
            65% {
                animation-timing-function: ease-in;
                transform: translateY(-12px);
            }
        
            82% {
                animation-timing-function: ease-in;
                transform: translateY(-6px);
            }
        
            93% {
                animation-timing-function: ease-in;
                transform: translateY(-4px);
            }
        
            25%,
            55%,
            75%,
            87% {
                animation-timing-function: ease-out;
                transform: translateY(0px);
            }
        
            100% {
                animation-timing-function: ease-out;
                opacity: 1;
                transform: translateY(0px);
            }
        }
        
        .detail_button{
            margin: 1rem 1rem;
            background-color: transparent;
            border: none;
            width: 50px;
        }
        
        .detail_button img{
            width: 100%;
        }
        
        @media screen and (min-width: 992px) {
            .content {
                max-width: 992px;
                height: auto;
                margin: 1rem auto;
                border-radius: 1rem;
            }
        }
        `
        return style;
    }

    heartPress(shadow){
        let img = shadow.getElementById("heart_button").firstChild;
        var vect = img.src.split('/');
        img.src = ( vect[vect.length - 1] == "coracao.png") ? "assets/icons/black_heart.png" : "assets/icons/coracao.png";
    }   
}

customElements.define("poke-detail", PokemonDetail);