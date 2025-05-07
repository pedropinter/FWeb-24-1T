let imgPK = document.querySelector("#fotoPK");
let formPK = document.querySelector("#formPK");
let inputPK = document.querySelector("#inputPK");

let idPK = document.querySelector("#idPK");
let nomePK = document.querySelector("#nomePK");

let tipo1 = document.querySelector("#tipo1PK");
let tipo2 = document.querySelector("#tipo2PK");

let habiPK = document.querySelector("#habiPK");
let pesoPK = document.querySelector("#pesoPK");
let alturaPK = document.querySelector("#alturaPK");

let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");

let numeroPokedex = 1;

const fetchPokemon = async(pokemon)=>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data
}
const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    imgPK.src = dataPokemon.sprites.front_default;
    idPK.innerHTML = dataPokemon.id;
    nomePK.innerHTML = dataPokemon.name;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    tipo2.innerHTML = dataPokemon.types[1].type.name;
    habiPK.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPK.innerHTML = dataPokemon.weight;
    alturaPK.innerHTML = dataPokemon.height;
}
formPK.addEventListener("submit",(event)=>{
    event.preventDefault();
    showPokemon(inputPK.value.toLowerCase());
})
showPokemon(numeroPokedex);