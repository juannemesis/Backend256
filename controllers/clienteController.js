const Cliente = require("../models/Cliente");

//funcion agregar clientes

exports.agregarClientes = async(req,res) => {
    try {
        let cliente; //se crea el objeto que va a contener la información del cliente que se va aguardar
        cliente = new Cliente(req.body);
        await cliente.save(); //la funcion espera a que el servidor termine
        res.json(cliente); //se envía la respuesta en formato json

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar un cliente");
    }
}


//funcion para buscar los clientes que estan en la base de datos

exports.buscarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al visualizar los clientes");
    }
}

//funcion buscar un cliente

exports.mostrarCliente = async(req,res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
            return;
        }
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar un  cliente");
    }
}

//actualizar un cliente con metodo PUT

exports.actualizarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});

        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
            return;
        }else{
            res.json(clientes);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar un  cliente");
    }
}

//actualizar un cliente

exports.actualizarCliente = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
            return;
        }
        cliente.nombres = nombres;
        cliente.apellidos = apellidos;
        cliente.documento = documento;
        cliente.correo = correo;
        cliente.telefono = telefono;
        cliente.direccion = direccion;

        cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
        res.json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar un  cliente");
    }
}

//eliminar clientes

exports.eliminarCliente = async(req,res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
            return;
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Cliente eliminado"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar un cliente");
    }
}