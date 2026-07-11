import { createProduct, listProducts, getProductById, deleteProduct, updateProduct } from './services/productService.js';
import { createUsuario, listUsuarios, getUsuarioById, deleteUsuario, updateUsuario } from './services/UserService.js';
import { createPedido, listPedidos, getPedidoById, deletePedido, updatePedido } from './services/PedidoService.js';

try {
    // PRODUCTOS
    const p = createProduct("Laptop", 1200, 5);
    console.log(listProducts());
    console.log(getProductById(p.id));
    updateProduct(p.id, "Laptop Pro", 1500, 3);
    deleteProduct(p.id);

    // USUARIOS
    const u = createUsuario("Ana", "ana@gmail.com", true);
    console.log(listUsuarios());
    console.log(getUsuarioById(u.id));
    updateUsuario(u.id, "Ana María", "ana@hotmail.com", false);
    deleteUsuario(u.id);

    // PEDIDOS
    const u2 = createUsuario("Luis", "luis@gmail.com", true);
    const pe = createPedido(u2.id, "Pendiente", 250);
    console.log(listPedidos());
    console.log(getPedidoById(pe.id));
    updatePedido(pe.id, u2.id, "Entregado", 300);
    deletePedido(pe.id);

} catch (error) {
    console.log("Ocurrió un error:", error);
}

try {
    const precio = -10;

    if (precio <= 0) {
        throw new Error("El precio debe ser mayor que 0");
    }

    createProduct("Mouse", precio, 5);

} catch (error) {
    console.log((error as Error).message);
}