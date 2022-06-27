var tempoIncial = $("#tempo").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
    atualizaContadores();
    atualizaTamanhoFrase();
    incializaCronometro();
    incializaMarcadores();
    $("#reiniciar").click(reiniciarJogo);
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function atualizaContadores(){
    campo.on("input",function(){
        var conteudo = campo.val();
        
        var qtdPalavaras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavaras);
       
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });     
}

function incializaCronometro(){
    var tempoRestante = $("#tempo").text();
    campo.one("focus", function(){
    var cronometro = setInterval(function(){
        tempoRestante--;
        $("#tempo").text(tempoRestante);
        if(tempoRestante <1){
            campo.attr("disabled", true);
            clearInterval(cronometro);
            campo.toggleClass("campo-desativado");
        }
     },1000);
});
}

function incializaMarcadores(){
    var frase= $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.lenght);
         console.log("Digitado:" + digitado);
         console.log("frase C.:" + comparavel);
        if (digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde"); 
        }
    });
}

function reiniciarJogo(){
    $("#reiniciar").click(function(){
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo").text(tempoIncial);
        incializaCronometro();
        campo.toggleClass("campo-desativado");
        campo.removeClass("borda-vermelha");
        campo.removeClass("borda-verde");
     });
}
