# Sistema de Login

## 🎯 Objetivo

Estudar sobre integração Front-End e Back-End, persistir dados no DB localmente e efetuar a atutenticação com JWT.

## 📌Sobre o Projeto

Desenvolvimento de um sistema de login funcional, permitindo que o usuário se autentique e encerre sua sessão.

+ Na tela inicial da aplicação há uma botão de login que leva a tela de login.
  
![Image](https://github.com/user-attachments/assets/84bec479-9c8d-4e9a-9b52-bb432aa4ce80)

+ Na tela de login o usuário pode entrar com usuário e senha ou clicar em cadastrar caso não tenha ainda suas credenciais.
  
![Image](https://github.com/user-attachments/assets/5144edb9-194d-46d3-a683-69588ff43128)

+ Após a autenticação o usuário tem acesso as informações desejadas. Ao fazer logout, volta para tela de login.
  
![Image](https://github.com/user-attachments/assets/2f44a133-598d-4d4d-840a-f1afe9532e69)

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

+ Branco: #FFFFFF, Preto: #000000, Azul: #0850b5, Vermelho: #ba1200, Amarelo: #ffbc42

## 🚀 Como Executar o Projeto

**1.** Clone o repositório:

git clone https://github.com/seu-usuario/sistema-de-login.git

**2.** Instale as dependências:

cd sistema-de-login <br>
npm install

**3.** Configure as variáveis de ambiente (.env) 

PORT = NÚMERO_DA_PORTA <br>
CONNECTION_STRING = postgresql://postgres:SENHA@localhost/NOME_DO_BANCO <br>
SECRET = PALAVRA_SECRETA <br>

**4.** No PostgreSQL crie a tabela pra receber os campos de usuário e senha:

create table login(
	id integer not null primary key,
	name varchar(150),
	password varchar(150)
	
);

**5.** Ajuste a tabela no PostgreSQL para persistir os IDs em sequência.

CREATE SEQUENCE login_id_seq;

ALTER TABLE login <br>
  ALTER COLUMN id SET DEFAULT nextval('login_id_seq');
  
SELECT setval('login_id_seq', COALESCE((SELECT MAX(id) FROM login), 1), false)


**6.** Ajuste o package.json para:
   
"scripts": { <br>
    "start": "npx nodemon index.js" <br>
  }

**7.** Inicie o servidor

npm start 

**8.** Acesse no navegador: http://localhost:3000

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo!









