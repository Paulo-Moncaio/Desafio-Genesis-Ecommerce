#Mini-Ecommerce

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React.js
- [Typescript](https://www.typescriptlang.org/)
- Next.js
- Hasura
- Graphql
- Chakra UI
- React Query
- React Hook Forms
- zod
- docker

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
