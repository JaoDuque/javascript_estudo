console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";
let destinoExiste = false;

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Desino Existe");
        destinoExiste = true;
       
    }
    contador +=1;
}
console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!")
}
for(let cont = 0 ;contador <3 ; cont ++){
    if(listaDeDestinos[contador] == destino){
        console.log("Desino Existe");
        destinoExiste = true;
        break;
    }
    contador +=1;
}