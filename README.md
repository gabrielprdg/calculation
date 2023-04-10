# l5networks-challenge
Backend challenge of the company l5-networks, this challenge is summarized in a rest api that save results of a calcualtor

# Aplicação Node - l5-networks

API HTTP em Node.js com TypeScript, Express e Docker e Postgres.

## Guia de desenvolvimento

Prerequisites:
-  caso não utilize docker é recomendado ter uma versao do node mais atual.
- `yarn` ou `npm` (para gerenciamento de dependências e execução de scripts)
- `docker` e `docker-compose` (para executar o servidor, banco de dados localmente de forma isolada e reproduzível)

### Backend: 


Em primeiro lugar se faz necessário preencher as variáveis de ambiente, lembrando que a porta usada e mapeada pelo docker é a 8085 da aplicação.
Crie um arquivo .env na raíz do projeto (exemplo abaixo).
```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```
Abaixo tambem há o exemplo de como preenchi essas variaveis

```
PORT=8085
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=l5networks
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=l5networks
```


Realizando build da aplicação
```
npm run build
yarn build
```
### Se faz necessário também caso não foi criado, criar o banco de dados via docker:

```
sudo docker exec -it <nome_container_banco> bash
psql -U postgres -d postgres
CREATE DATABASE nome_do_banco_de_dados;
```



Em seguida é so subir o container docker:

```
sudo docker compose up
```

Sem o docker:
```
npm i
npm run start
yarn start
```

### Frontend

Para startar a aplicação frontend é so rodar o comando 
```
npm run dev
```

Qualquer duvida só me chamar pelo linkedin
```
https://www.linkedin.com/in/gabriel-rodrigues-aaa352207/
```



