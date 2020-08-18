const express = require("express");

const actions = require("./actions/actionsRouter");

const projects = require("./projects/projectRouter");

const port = 4800;

const server = express();

server.use(express.json());
server.use(actions);
server.use(projects);

server.get("/", (req, res) => {
    res.send(`<h2>Sprint</h2>`);
});

//custom middleware

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;