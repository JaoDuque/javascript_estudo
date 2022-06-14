console.log(`Trabalhando com listas`);

// const salvador = `salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `rio de janeiro`;

const listaDeDestinos = new Array(
    `salvador`,
    `São Paulo`,
    `rio de janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionado na lista
console.log("Destinos possiveis:");

// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

//deletar, começa contando do 0
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//mostrar só um item da lista
console.log(listaDeDestinos[1]);
