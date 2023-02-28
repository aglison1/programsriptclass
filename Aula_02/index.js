const express = require("express");

const app=express();
app.listen(8080,()=>{console.log("O servidor esta ativo na porta 8080");})

app.use(express.json());

const bodyParser = require("body-parser"); //converte o json

app.use(bodyParser.urlencoded({extended:false}));

//criando uma rota para a raiz

app.get("/",(req,res)=>{
    res.send("<h1>Bem Vindo</h1>")
});

// criando uma nova rota

app.post("\postHTML",(req,res)=>{
    const {nome}= req.body;
    console.log(`Olá ${nome}`);

})




