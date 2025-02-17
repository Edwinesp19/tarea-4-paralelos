// const express = require("express");
// const os = require("os");
// const app = express();

// app.get("/", (req, res) => {
//   res.send(`Node.js Server - Contenedor: ${os.hostname()}<br>Request ID: ${Date.now()}`);
// });

// app.listen(3000, () => {
//   console.log("Servidor Node.js ejecutándose en el puerto 3000");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const containerName = process.env.HOSTNAME || "Desconocido";
    res.send(`
        <html>
        <head>
            <title>Node.js Load Balancer</title>
            <style>
                body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f4f4f4; font-family: Arial, sans-serif; }
                .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); width: 300px; text-align: center; margin: 10px; }
                .logo { width: 80px; margin: 10px auto; }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>Edwin Espinal</h2>
                <p>2-19-0521</p>
            </div>
            <div class="card">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
                <p>Contenedor: ${containerName}</p>
                <p>Request recibido</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => console.log("Node.js server running on port 3000"));
