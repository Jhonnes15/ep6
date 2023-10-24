function tarefas(){
    var bah = prompt("Escreva seu nome");
    if(bah == "Jhonnes"){
       alert("Bem vindo as tarefas de matematica do 1 ano do ensino médio Jhonnes.");

       document.getElementById("nome_usuario").innerHTML ="<p><h1>Bem vindo Jhonnes.<br></h1><h2>Essas são suas atividades:</h2></p>";

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

    if(resp1){
        if(resp1.value == "correta"){
            document.getElementById("resp_certa_1").innerHTML = "correta!"
        }
     else{
     if(resp1.value == "correta"){
      document.getElementById("resp_errada_1").innerHTML = "correta!"
        }
    }
    
    
    
    
    
    
    }
  }

}
