const express = require("express");
const os = require("os");
const app = express();

app.get("/", (req, res) => {
  res.send(`Node.js Server - Contenedor: ${os.hostname()}<br>Request ID: ${Date.now()}`);
});

app.listen(3000, () => {
  console.log("Servidor Node.js ejecutándose en el puerto 3000");
});

