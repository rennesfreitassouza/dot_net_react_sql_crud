# dot_net_react_sql_crud
CRUD desenvolvido em .NET 6 e React para o desafio da empresa Smarapd.

## Como executar os projetos localmente:

Para correta execução do CRUD instale as seguintes ferramentas e execute todas os comandos como administrador do sistema:

- sql server 2022: `https://go.microsoft.com/fwlink/p/?linkid=2215158&clcid=0x409&culture=en-us&country=us`

- SQL Server Management Studio 18.12.1: `https://go.microsoft.com/fwlink/?linkid=2199013&clcid=0x409`

- Instalar Node.js v16.16.0: `https://nodejs.org/download/release/v16.16.0/node-v16.16.0-x64.msi`

- Instalar o .NET 6.0.x `https://dotnet.microsoft.com/en-us/download/dotnet/6.0`

- Clonar este repositório: `https://github.com/rennesfreitassouza/dot_net_react_sql_crud/archive/refs/heads/main.zip`

Executar o SQL Server Management Studio como administrador, se conectar ao Database Engine e:
- criar um database de acordo do o script SQL SQLCreateDatabase.sql deste repositório; 
- criar uma tabela nesse database (selecionar o database ReactJSDemoYT no SQL Server Management Studio) de acordo com o script SQL SQLCreateTable.sql deste repositório;
- atualizar a string de conexão com o banco de dados referente a propiedade "ReactJSDemoConnection" do arquivo "ReactAPI.Demo\appsettings.Development.json". Para isso, o valor após "Data Source=" até o primeiro ";" presente na string da propriedade deve ser atualizada para o nome do seu banco de dados do SQL Server. O nome do seu banco de dados pode ser encontrado como o nome do primeiro item da aba Object Explorer do SQL Server Management Studio após a conexão com o banco de dados ser feita.
- Então, executar os comandos no prompt de comando:

  - `cd ReactAPI.Demo`

  - `dotnet add package Microsoft.EntityFrameworkCore --version 6.0.8`

  - `dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.8`

  - `dotnet watch run`

- Em outro prompt de comando, executar:
  - `cd react18-crud-demo`
  - `npm i`
  - `npm start`

Dessa forma, todas as operações do CRUD poderão ser testadas em sua máquina por meio das páginas que foram abertas em seu navegador.
