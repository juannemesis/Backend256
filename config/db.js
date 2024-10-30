const mongoose = require("mongoose");
require("dotenv").config();

//conexión con mongo DB
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados con mongo"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;