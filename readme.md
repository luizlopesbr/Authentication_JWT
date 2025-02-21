# Sistema de Login

## 🎯 Objetivo

Aprender um pouco sobre como integrar fron-end, back-end e persistir dados localmente.

## 📌Sobre o Projeto

Desenvolvimento de um sistema de login funcional, permitindo que o usuário se autentique e encerre sua sessão.

Na tela inicial há uma botão de login que leva para página de autenticação. Após logado o usuário é redirecionado parauma outra página e ao fazer logout, volta para tela de login.

## 📦Tipo de Armazenamento

O sistema utiliza Local Storage para armazenar o token.

## 🏗Arquitetura

+ **Front-End:** HTML, CSS, JavaScript
+ **Back-End:** Node.js
+ **Banco de Dados:** PostgreSQL (rodando localmente)

## 📚 Bibliotecas Utilizadas

+ pg (PostgreSQL Client para Node.js)

+ express (Framework web para Node.js)

+ dotenv (Gerenciamento de variáveis de ambiente)

+ cors (Controle de acesso entre domínios)

+ jsonwebtoken (Autenticação JWT)

+ bcrypt (Criptografia de senhas)

## 🎨 Cores Utilizadas

+ Branco: #FFFFFF

+ Preto: #000000

+ Azul: #0850b5

+ Vermelho: #ba1200

+ Amarelo: #ffbc42

## 🚀 Como Executar o Projeto

**1.** Clone o repositório:

git clone https://github.com/seu-usuario/sistema-de-login.git

**2.** Instale as dependências:

cd sistema-de-login
npm install

**3.** Configure as variáveis de ambiente (.env)
PORT = NÚMERO_DA_PORTA
CONNECTION_STRING = postgresql://postgres:SENHA@localhost/NOME_DO_BANCO
SECRET = PALAVRA_SECRETA

**4.** No PostgreSQL crie a tabela pra receber os campos de usuário e senha:

create table login(
	id integer not null primary key,
	name varchar(150),
	password varchar(150)
	
);

**5.** Ajuste a tabela no PostgreSQL para persistir os IDs em sequência.
CREATE SEQUENCE login_id_seq;

ALTER TABLE login
  ALTER COLUMN id SET DEFAULT nextval('login_id_seq');
  
SELECT setval('login_id_seq', COALESCE((SELECT MAX(id) FROM login), 1), false)


**6.** Ajuste o package.json para:
   
"scripts": {
    "start": "npx nodemon index.js"
  }

**7.** Inicie o servidor
npm start 

**8.** Acesse no navegador: http://localhost:3000

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo!









