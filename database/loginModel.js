//LOGIN
const bcrypt = require('bcrypt');

const {connect} = require ('./connection.js')

async function insertLogin(login) {
    const authentication = await connect();
    const hashedPassword = await bcrypt.hash(login.password, 10); // Hash da senha
    const sql = "INSERT INTO login(name, password) VALUES ($1, $2)";
    const values = [login.name, hashedPassword];
    await authentication.query(sql, values);
}

async function verifyLogin(name, password) {
    const login = await connect(); // Conecta ao banco

    try {
        const sql = "SELECT * FROM login WHERE name = $1";
        const values = [name];
        const res = await login.query(sql, values);

        if (res.rows.length === 0) return false; // Usuário não encontrado

        console.log(res.rows[0])
        const isPasswordValid = await bcrypt.compare(password, res.rows[0].password); // Verifica a senha
        return isPasswordValid;

    } catch (error) {
        console.error("Erro ao verificar login:", error);
        return false;

    } finally {
        //await login.release(); // Fecha a conexão corretamente
        //login.release(); // Fecha a conexão corretamente
        login.end()
    }
}

module.exports = {
    insertLogin,
    verifyLogin
}