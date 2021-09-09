<h1>Criação e configuração de um projeto Node.js com TypeScript</h1>

<h3>Abrir o Visual Studio Code em uma pasta vazia, e no terminal, executar os seguintes comandos na sequência:</h2>

* `npm init -y`

     **Descrição:** Cria um projeto em Node.js. O argumento -y ignora todas as perguntas sobre as informações do projeto, que podem ser alteradas no arquivo package.json.
<br>

* `npm install express`

     **Descrição:** Instala a biblioteca do express.
<br>

* `npm install mongoose`

     **Descrição:** Instala a biblioteca do mongoose.
<br>
 
* `npm install typescript -g`

     **Descrição:** Instala a biblioteca do typescript. O argumento -g instala a biblioteca de forma global na máquina, portanto **só precisa ser executado no primeiro projeto**
<br>
 
* `tsc --init`

    **Descrição:** Inicializa o typescript dentro do projeto.
<br>
 
* `npm install ts-node-dev -g`
 
    **Descrição:** Instala a biblioteca do ts-node-dev. O argumento -g instala a biblioteca de forma global na máquina, portanto **só precisa ser executado no primeiro projeto**
<br>
 
* `npm install @types/express -D`

    **Descrição:** Instala arquivo de declaração de tipos da biblioteca express, dentro da aplicação. O argumento -D instala a biblioteca como dependência de desenvolvimento.
<br>

* `npm install @types/mongoose -D`
 
    **Descrição:** Instala arquivo de declaração de tipos da biblioteca mongoose, dentro da aplicação. O argumento -D instala a biblioteca como dependência de desenvolvimento.
<br>

<h3>IMPORTANTE</h3>

* Acrescentar: 

        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules ./src/server" 
                
na parte “scripts” do **arquivo** *package.json* , como na imagem:

<img src="https://cdn.discordapp.com/attachments/848586232116412466/848588058949189682/scripts.png">


<h3>Organização de pastas</h3>

* Criar: novo **arquivo** *src/server.ts* , com isso será criada uma **pasta** *src* com um **arquivo** *server.ts* dentro

* Criar: dentro da **pasta** *src* , uma **pasta** *config* , uma **pasta** *controllers* e uma **pasta** *models*

A arquitetura do seu projeto devem estar assim:

<img src="https://cdn.discordapp.com/attachments/848586232116412466/848594125812138044/arquitetura.png">


<h3>Para testar se está rodando como deveria</h2>

* Escreva dentro do arquivo *Server.ts* : 
    
        console.clear();
        console.log("Testando a configuração de ambiente");
<br>

* `npm run dev`

    **Descrição:** Executa o script configurado no arquivo package.json, roda a aplicação.
<br>
    
* Se no terminal aparecer a mensagem: `Testando a configuração de ambiente`, seu ambiente está pronto para iniciar o projeto.

<h2>Conectando com o banco de dados</h2>
<h3>(Para essa etapa você precisa ter uma conta no MongoDB)</h3>

* Na **pasta** *config* criar o **arquivo** *database.ts*

* Adicionar o seguinte script no **arquivo** *database.ts*:

<img src="https://cdn.discordapp.com/attachments/848586232116412466/848623215176581160/database.png">

* Lembrando de substituir os campos da conexão, conforme informado no MongoDB
        
* No **arquivo** *server.ts* adicicionar o seguinte script;

<img src="https://cdn.discordapp.com/attachments/848586232116412466/848623219690569748/server.png">

* `npm run dev`

* Se no terminal aparecer a mensagem: 
        
`O servidor está rodando...
Aplicação conectada ao banco de dados`

Está tudo certo até aqui!





