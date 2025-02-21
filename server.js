require("dotenv").config()

const port = process.env.PORT

const SECRET = process.env.SECRET

const express = require("express")

const cors = require("cors")

const jwt = require('jsonwebtoken');

const app = express()

app.use(express.json())

app.use(cors())


//ROTAS
const loginRoute = require('./routes/loginRoute.js');
const loginRegisterRoute = require('./routes/loginRegisterRoute.js')

//Middleware
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Remove o "Bearer "

    if (!token) {
        return res.status(401).json({ auth: false, message: 'Acesso negado! Nenhum token fornecido.' });
    }

    jwt.verify(token, SECRET, (erro, decoded) => {
        if (erro) {
            return res.status(403).json({ auth: false, message: 'Token inválido ou expirado.' });
        }

        req.userId = decoded.userId;
        next();
    });
}

//Rotas de login
app.use('/login', loginRoute);

app.use('/loginregister', loginRegisterRoute);


app.listen(port)
console.log("Backend rodando!")