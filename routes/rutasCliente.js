const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

//estas son las rtutas de nuestro CRUD (añadir, boorar, editar)

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.mostrarCliente);
// router.patch('/:id', clienteController.modificarClientes);  //Método Patch
router.put('/:id', clienteController.actualizarClientes);  //Método PUT
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;
