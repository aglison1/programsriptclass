//Criar uma constant que chama a biblioteca
const express = require("express");

//Chamar a porta do Servidor

const app= express();
app.listen(8080,()=>{console.log("O servidor está ativo na porta 8080!!");});

//criando a primeira rota

app.get("/",() => {
    console.log("Opa deu certo o acesso!");
});

//Rota de envio de uma marcação
let nome = "Asg"
app.get("/testeHTML",(req,res)=>{
    res.send("<h1>Olá Minha Primeira Página!!!!!</h1>"
    + nome
    );
});

