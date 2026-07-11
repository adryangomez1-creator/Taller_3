import type { Pedido } from '../models/PedidoModel.js';
import { pedidos } from '../data/PedidoData.js';

let nextId = 1;

export const createPedido = (
    usuarioId: number,
    estado: string,
    total: number
): Pedido => {
    const pedido: Pedido = {
        id: nextId++,
        usuarioId,
        estado,
        total
    };
    pedidos.push(pedido);
    return pedido;
};

export const listPedidos = (): Pedido[] => {
    return pedidos;
};

export const getPedidoById = (id: number): Pedido | undefined => {
    return pedidos.find((pedido) => pedido.id === id);
};

export const deletePedido = (id: number): boolean => {
    const index = pedidos.findIndex((pedido) => pedido.id === id);
    if (index !== -1) {
        console.log('Pedido eliminado:', pedidos[index]);
        pedidos.splice(index, 1);
        return true;
    } else {
        console.log('Pedido no encontrado.');
        return false;
    }
};

export const updatePedido = (
    id: number,
    usuarioId: number,
    estado: string,
    total: number
): Pedido | undefined => {
    const pedido = getPedidoById(id);
    if (pedido) {
        pedido.usuarioId = usuarioId;
        pedido.estado = estado;
        pedido.total = total;
        return pedido;
    } else {
        console.log('Pedido no encontrado.');
        return undefined;
    }
};
