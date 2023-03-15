const express = require("express");

const app = express();

app.listen(8080, () => {console.log("O servidor está ativo na porta 8080");});

app.use(express.json()); //transforma os valores para o tipo json

const { connect, sql} = require("./data/database")


//Criando a rota do Create

app.post("/Aluno",async(req,res)=>{
    try{
        await connect();
        const{ id, nome, idade} = req.body;

        const result = await sql.query(`INSERT INTO Aluno(id, nome, idade) VALUES(${id}, '${nome}', ${idade})`)

        res.send("Cadastro realizado com sucesso!");

    }catch(err){
        console.error(err);
        res.status(500).send("Erro interno");
    }finally{
        await sql.close()
    }
})


