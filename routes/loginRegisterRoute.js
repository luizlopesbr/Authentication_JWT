const express = require('express');
const router = express.Router();
const {loginModel} = require ('../database/loginModel')


//CADASTRAR LOGIN
router.post("/loginregister", async (req, res) => {
    try {
        //await db.insertLogin(req.body);
        await loginModel.insertLogin(req.body);
        res.sendStatus(201);
    } catch (error) {
        console.error("Erro ao cadastrar login:", error);
        res.status(500).json({ message: "Erro interno ao cadastrar usuário" });
    }
});

module.exports = router
