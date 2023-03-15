const sql = require('mssql');

const config = { 
    user: "sa",
    password:"123456", //fatec123*
    server:"localhost",
    port: 1433,
    database: 'ProgSCRIPT',
    options: { encrypt: false},
}

//foi criado um objeto para acessar o banco
//será criada uma funçao async sem parametro para ser o conect do banco

async function connect(){
    //vai tentar, se não tras um erro
    try {

        await sql.connect(config);
        console.log("O banco se conectou!");

    }catch (err){
        console.error(err);
    }
}

//exportando o modulo, porq quando chamar no index ele trara os caminhos

module.exports = {
    sql,
    connect
}



