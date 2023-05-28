# Desafio-Genesis-Ecommerce

## ▶ Como rodar o projeto

1. clone o repositorio
2. com o docker aberto, rodar docker-compose up -d
3. entrar no hasura na [porta 8080](http://localhost:8080/console/data)
4. clique em connect to database, selecione postgres e clique em "Connect Existing Database"
5. selecione "Environment variable" em "Connect Database via" e cole o seguinte texto "PG_DATABASE_URL", no campo Database name cole o nome "genesis_ecommerce", finalmente clique em Connect Database
6. agora no lado esquedo selecione a seção SQL e copie o codigo do arquivo genesis_ecommerce.sql na raiz do repositorio e cole na area de texto entao rode o comando, para criar as tabelas e popular o banco
7. agora na raiz do repositorio rode os seguintes comandos:
8. cd genesis-ecommerce-next
9. npm install
10. npm run codegen
11. npm run dev
12. agora teste a aplicação na [porta 3000](http://localhost:3000)

## Descrição:

Você deve desenvolver um mini e-commerce utilizando NextJS e um banco de dados para armazenar os produtos. O aplicativo deve ter as seguintes funcionalidades:

1. Tela de cadastro de produtos:

- Permitir que o usuário adicione novos produtos, fornecendo informações como nome, descrição, preço e imagem.
- Validar os campos obrigatórios e exibir mensagens de erro caso algum campo não esteja preenchido corretamente.
- Salvar os produtos no banco de dados.

2. Tela de listagem de produtos:

- Exibir todos os produtos cadastrados, incluindo nome, descrição, preço e imagem.
- Permitir que o usuário filtre os produtos por categoria ou utilize uma pesquisa por nome.
- Exibir os produtos de forma paginada, com um número fixo de produtos por página.

3. Funcionalidade de carrinho de compras:

- Permitir que o usuário adicione produtos ao carrinho.
- Exibir o conteúdo atual do carrinho, incluindo nome, preço, quantidade e subtotal de cada produto.
- Permitir que o usuário atualize a quantidade de produtos no carrinho e remova produtos.
- Calcular e exibir o total do carrinho.

Requisitos técnicos:
- tilizar NextJS para criar as páginas e componentes do aplicativo.
- tilizar algum banco de dados, como MySQL, PostgreSQL ou MongoDB, para armazenar os produtos.
- mplementar as funcionalidades de cadastro, listagem e carrinho de compras utilizando a linguagem de banco de dados
- Utilizar CSS ou uma biblioteca de estilização, como styled-components ou Chakra UI, para estilizar o aplicativo.

Observações:

O design e a estilização do aplicativo podem ser simples, o foco principal é na funcionalidade.

Você pode criar um conjunto de dados de exemplo para popular o banco de dados e testar a funcionalidade de listagem de produtos.

Priorize a organização do código, a legibilidade e a manutenibilidade.
