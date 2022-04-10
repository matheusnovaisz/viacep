Esse é um projeto feito para a avaliação técnica na [Eureka Labs](https://eurekalabs.com.br/). Consiste num site que consulta informações relacionadas à um CEP, sendo integrado com o [ViaCEP](https://viacep.com.br/).

![Home](home.jpeg) ![Consulta](cep.jpeg)

## Instruções de Instalação

#### Requerimentos

- Node
- Docker

Crie um arquivo `.env` baseado no `.env.example` na raíz do projeto e altere a variável `POSTGRES_PASSWORD` para qual você desejar, pois iremos subir um container no docker com o banco de dados. 😊

Em seguida, dê os seguintes comandos:

```
npm install
npm run db:up
npm run dev
```

## Tecnologias

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&style=for-the-badge&logoColor=black)
![Typescript Badge](https://img.shields.io/badge/typescript-3178C6?logo=typescript&style=for-the-badge&logoColor=white)
![Next Badge](https://img.shields.io/badge/Next-000000?logo=next.js&style=for-the-badge&logoColor=white)
![Prisma Badge](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&style=for-the-badge&logoColor=white)
