//LER UM ÚNICO CLIENTE
app.get("/clientes/:id", async (req, res) => {
    const cliente = await db.selectCustomer(req.params.id)
    res.json(cliente)
})

//LER TODOS OS CLIENTES
app.get("/clientes", async (req, res) => {
    const clientes = await db.selectCustomers()
    res.json(clientes)
})

//CADASTRAR UM CLIENTE
app.post("/clientes", async (req, res) => {
    await db.insertCustomer(req.body)
    res.sendStatus(201)
})

//ATUALIZAR UM CLIENTE
app.patch("/clientes/:id", async (req, res) => {
    await db.updateCustomer(req.params.id, req.body)
    res.sendStatus(200)
})

//DELETAR UM CLIENTE
app.delete("/clientes/:id", verifyToken, async (req, res) => {
    await db.deleteCustomer(req.params.id)
    res.sendStatus(204)
})