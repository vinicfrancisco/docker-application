# Docker Application

Este repositório é um exemplo de aplicação o Docker para o desenvolvimento de uma aplicação web desenvolvida para a matéria de Engenharia de Software Orientada a Serviços

## Rodando serviços

Para inicializar os container, basta acessar a pasta raíz do projeto e rodar:

```
    docker-compose up -d
```

## Acessando Aplicação web

Para visualizar a aplicação web criada, basta acessar o seguinte link:

```
    http://localhost:8080/trabalho_a2
```

## Acessando pgAdmin4

Para acessar o painél do pgAdmin4, primeiramente é preciso acessar o seguinte link:

```
    http://localhost:16543
```

Depois disso, será pedido o usuário e senha para acessar o painél. Estas credenciais são descritas no arquivo **docker-compose.yml** e são as seguitnes:

```
    Email: postgres@email.com
    Senha: postgres
```

Após acessar o painél, será preciso criar um servidor para visulizar o banco. O nome do servidor pode ser de sua escolha, porém o host dele deve ser o nome do container do banco de dados descrito no **docker-compose.yml**. Neste caso, basta inserir o seguinte host:

```
    Host: db
    Porta: 5432
```
