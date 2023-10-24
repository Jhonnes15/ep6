function tarefas(){
    var bah = prompt("Escreva seu nome");
    if(bah == "Jhonnes"){
       alert("Bem vindo as tarefas de matematica do 1 ano do ensino médio Jhonnes.");

       document.getElementById("nome_usuario").innerHTML ="<p><h1>Bem vindo Jhonnes.<br></h1><h2>Essas são suas atividades:</h2></p>";

    }
}
    else if(bah == "Luigi"){
        alert("Bem vindo as tarefas de matematica do 1 ano do ensino médio. ");

        document.getElementById("nome_usuario").innerHTML ="<p><h1>Bem vindo Lulu.<br></h1><h2>Essas são suas atividades:</h2></p>";
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        tarefas();
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
   
    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correto"){
            document.getElementById("resp_correta_1").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "errou burro!";
        }
       
        if(resp2.value == "correto"){
            document.getElementById("resp_correta_2").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "errou burro!";
        }

        if(resp3.value == "correto"){
            document.getElementById("resp_correta_3").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "errou burro!";
        }

        if(resp4.value == "correto"){
            document.getElementById("resp_correta_4").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "errou burro!";
        }

        if(resp5.value == "correto"){
            document.getElementById("resp_correta_5").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "errou burro!";
        }

        if(resp6.value == "correto"){
            document.getElementById("resp_correta_6").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "errou burro!";
        }
       
        if(resp7.value == "correto"){
            document.getElementById("resp_correta_7").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "errou burro!";
        }

        if(resp8.value == "correto"){
            document.getElementById("resp_correta_8").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "errou burro!";
        }

        if(resp9.value == "correto"){
            document.getElementById("resp_correta_9").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "errou burro!";
        }

        if(resp10.value == "correto"){
            document.getElementById("resp_correta_10").innerHTML = "correta!";
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "errou burro!";
        }
    }
    else{
        alert("nao deixe questoes em branco!");
    }
}
