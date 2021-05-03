const express = require('express');

const server = express();

server.use(express.json());

const users = ["Rubens", "Matheus", "Marina"];

//Criar

server.post("/users", (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

//Exibir

//Todos
server.get('/users', (req, res) => {
    return res.json(users);
});

//Apenas 1
server.get('/users/:index', (req, res) => {
    const {index} = req.params;

    return res.json({message : `Buscando o usuário ${index} ` + users[index]});
});

//Alterar

server.put("/users/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

//Apagar

server.delete("/users/:index", (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.json(users);
});

server.listen(3000)