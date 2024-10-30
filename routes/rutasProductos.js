const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

//estas son las rtutas de nuestro CRUD (añadir, boorar, editar)

router.post('/', productoController.agregarProductos);
router.get('/', productoController.buscarProductos);
router.get('/:id', productoController.mostrarProducto);
router.put('/:id', productoController.actualizarProducto);  //Método PUT
router.delete('/:id', productoController.eliminarProductos);

module.exports = router;
