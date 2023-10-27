function inclui_nome() {
    var nome_variavel = prompt("Escreva seu nome:");
    if(nome_variavel){
        document.getElementById("inclui_nome").innerHTML = "Bem vindo, " + nome_variavel + "! Vamos começar?" ;
    }

    else{
        alert("Nome não atribuido!");
        inclui_nome();
    }

}

function funcao_resposta(){
    var resp1 = document.querySelector('input[name="questao1"]:checked');
    var resp2 = document.querySelector('input[name="questao2"]:checked');
    var resp3 = document.querySelector('input[name="questao3"]:checked');
    var resp4 = document.querySelector('input[name="questao4"]:checked');
    var resp5 = document.querySelector('input[name="questao5"]:checked');
    var resp6 = document.querySelector('input[name="questao6"]:checked');
    var resp7 = document.querySelector('input[name="questao7"]:checked');
    var resp8 = document.querySelector('input[name="questao8"]:checked');
    var resp9 = document.querySelector('input[name="questao9"]:checked');
    var resp10 = document.querySelector('input[name="questao10"]:checked');
    var contador = 0;

    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correto"){
            document.getElementById("resp_correta_1").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "errou burro!";
        }
       
        if(resp2.value == "correto"){
            document.getElementById("resp_correta_2").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "errou burro!";
        }

        if(resp3.value == "correto"){
            document.getElementById("resp_correta_3").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "errou burro!";
        }

        if(resp4.value == "correto"){
            document.getElementById("resp_correta_4").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "errou burro!";
        }

        if(resp5.value == "correto"){
            document.getElementById("resp_correta_5").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "errou burro!";
        }

        if(resp6.value == "correto"){
            document.getElementById("resp_correta_6").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "errou burro!";
        }
       
        if(resp7.value == "correto"){
            document.getElementById("resp_correta_7").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "errou burro!";
        }

        if(resp8.value == "correto"){
            document.getElementById("resp_correta_8").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "errou burro!";
        }

        if(resp9.value == "correto"){
            document.getElementById("resp_correta_9").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "errou burro!";
        }

        if(resp10.value == "correto"){
            document.getElementById("resp_correta_10").innerHTML = "correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "errou burro!";
        }
        document.getElementById("quantos_acertos").innerHTML = "vc acertou " +contador+ " questoes";

    }
    else{
        alert("nao deixe questoes em branco!");
    }

    function questionario(){
       
    }
    
}




