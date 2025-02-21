const express = require('express');
const router = express.Router();
const {verifyLogin} = require ('../database/loginModel')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

//AUTENTICAR LOGIN
//router.post('/login', async (req, res) => {
router.post('/', async (req, res) => {
    const { name, password } = req.body;

    if (await verifyLogin(name, password)) {
        const token = jwt.sign({ userId: name }, SECRET, { expiresIn: 300 });
        return res.json({ auth: true, token });
        
    }

    res.status(401).json({ auth: false, message: "Usuário ou senha inválidos" });
});

module.exports = router
