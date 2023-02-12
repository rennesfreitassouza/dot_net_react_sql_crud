# dot_net_react_sql_crud
CRUD desenvolvido em .NET 6 e React para o desafio da empresa Smarapd.

## Como criar o projeto

Para correta execução do CRUD instale as seguintes ferramentas
sql server 2022
`https://go.microsoft.com/fwlink/p/?linkid=2215158&clcid=0x409&culture=en-us&country=us`

SQL Server Management Studio 18.12.1
`https://go.microsoft.com/fwlink/?linkid=2199013&clcid=0x409`

Instalar Node.js v16.16.0
`https://nodejs.org/download/release/v16.16.0/node-v16.16.0-x64.msi`

Clonar este repositório

Com o SQL Server Management Studio:
- criar um database de acordo do o script SQL SQLCreateDatabase.sql; 
- criar uma tabela nesse database de acordo com o script SQL SQLCreateTable.sql;
- atualizar a string de conexão com o banco de dados referente a propiedade "ReactJSDemoConnection" do arquivo "ReactAPI.Demo\appsettings.Development.json". Para isso, o valor após Data Source= até o primeiro ; presente na string deve ser atualizado para o nome do seu banco de dados SQL. O nome do seu banco de dados pode ser encontrado no primeiro item da aba Object Explorer do SQL Server Management Studio após a conexão com o banco de dados ser feita.
- Então, executar os comandos no prompt de comando:

cd ReactAPI.Demo
dotnet add package Microsoft.EntityFrameworkCore --version 6.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.8
dotnet watch run

cd react18-crud-demo
npm i
npm start

Dessa forma, todas as operações do CRUD poderão ser testadas em sua máquina.