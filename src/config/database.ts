import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://topicos:especiais@cluster0.finem.mongodb.net/TopicosEspeciais?retryWrites=true&w=majority", 
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Aplicação conectada ao banco de dados");
    })
    .catch((error) => {
        console.log(`Erro ao conectar com o banco de dados: ${error}`);
    });

export { mongoose }; 