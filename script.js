function tarefas(){
    var bah = prompt("Escreva seu nome");
    if(bah == "Jhonnes"){
       alert("Bem vindo as tarefas de matematica do 1 ano do ensino médio Jhonnes.");

       document.write("<p><h1>Bem vindo Jhonnes.<br></h1><h2>Essas são suas atividades:</h2></p>")

       function questionario() {
        var quantidade_respostas_corretas = 0;

        var perguntaUm = document.querySelector('input[name="pergunta1"]:cheked');
        var perguntaDois = document.querySelector('input[name="pergunta2"]:cheked');
        var perguntaTres = document.querySelector('input[name="pergunta3"]:cheked');
        var perguntaQuatro = document.querySelector('input[name="pergunta4"]:cheked');
        var perguntaCinco = document.querySelector('input[name="pergunta5"]:cheked');

        if(perguntaUm && perguntaDois && perguntaTres && perguntaQuatro && perguntaCinco){
            if(perguntaUm.value === "correto"){
                quantidade_respostas_corretas++;
            }

            if(perguntaDois.value === "correto"){
                quantidade_respostas_corretas++;
            }

            if(perguntaTres.value === "correto"){
                quantidade_respostas_corretas++;
            }

            if(perguntaQuatro.value === "correto"){
                quantidade_respostas_corretas++;
            }

            if(perguntaCinco.value === "correto"){
                quantidade_respostas_corretas++;
            }
            document.getElementById("quanti_respostas").innerHTML = "Voce acertou" + quantidade_respostas_corretas + "questoes!";
        }
        else{ 
            alert("nao deixe questoes em branco!")
        }
       }
}

    if(bah == "Luigi"){
        alert("Bem vindo as tarefas de matematica do 1 ano do ensino médio Luigi.");

        document.write("<p><h1>Bem vindo Luigi.</h1><br><h2>Essas são suas atividades:</h2></p>")

    }
}