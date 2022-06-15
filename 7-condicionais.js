console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `salvador`,
    `São Paulo`,
    `rio de janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

//if(idadeComprador >=18){
//console.log("Comprador maior de idade");
//listaDeDestinos.splice(1,1);
//}else if(estaAcompanhada==true){
//      console.log("Comprador esta acompanhado");
//      listaDeDestinos.splice(1,1);
//  }else{
//      console.log("Não é maior de idade e não posso vender")
//   }
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de idade e não posso vender")
}

console.log("Embarque:  \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Voce não pode embarcar");
}
console.log(listaDeDestinos);