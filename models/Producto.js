const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true //campo requerido
    },
    descripcion:{
        type: String,
        required: true
    },
    valorcompra:{
        type: Number,
        required: true
    },
    valorventa:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    lote:{
        type: Number,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model("Producto", productoSchema);