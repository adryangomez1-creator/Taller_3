import type { Product } from '../models/ProductModel.js';
import { products } from '../data/ProductData.js';

let nextId = 1;

//crear producto
export const createProduct = (
    nombre: string,
    precio: number,
    stock: number
): Product => {
    const product: Product = {
        id: nextId++,
        nombre,
        precio,
        stock
    };
    products.push(product);
    return product;
}
//mostrar o listar productos
export const listProducts = (): Product[] => {
    return products;
}

//buscar producto por id
export const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id);

}


 export const deleteProduct= (id: number): boolean => {
    const index = products.findIndex(product => product.id === id); 
    if (index !== -1) {
        console.log('Producto eliminado:', products[index]);
        products.splice(index, 1); 

        return true;
    } else {
        console.log('Producto no encontrado.');
        return false;
    }
}

export const updateProduct = (id: number, nombre: string, precio: number, stock: number): Product | undefined => {
    const product = getProductById(id); 
    if (product) {
        product.nombre = nombre;
        product.precio = precio;
        product.stock = stock;
        return product;
    }   else {          
        console.log('Producto no encontrado.');
        return undefined;
    }
}
