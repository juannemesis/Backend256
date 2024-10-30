const express = require("express"); //voy a trabajar con el modulo express
const conectarBD = require("../config/db");
const cors = require("cors"); //voy a trabajar con el modulo cors

//creamos la variable app
const app = express();
const port = process.env.PORT || 5000;

//conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la API clientes
app.use("/api/clientes", require("../routes/rutasCliente"));
app.use("/api/productos", require("../routes/rutasProductos"));

//ruta para validar el servidor en la nube
app.get("/",(req,res) => {
    res.send("Hola mundo desde la web");
});

app.listen(port,() => {
    console.log("El servidor esta conectado http://localhost:5000");
});