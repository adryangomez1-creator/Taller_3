import type { Usuario } from '../models/UserModel.js';
import { usuarios } from '../data/UserData.js';

let nextId = 1;

export const createUsuario = (
    nombre: string,
    email: string,
    activo: boolean
): Usuario => {
    const usuario: Usuario = {
        id: nextId++,
        nombre,
        email,
        activo
    };
    usuarios.push(usuario);
    return usuario;
};

export const listUsuarios = (): Usuario[] => {
    return usuarios;
};

export const getUsuarioById = (id: number): Usuario | undefined => {
    return usuarios.find((usuario) => usuario.id === id);
};

export const deleteUsuario = (id: number): boolean => {
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index !== -1) {
        console.log('Usuario eliminado:', usuarios[index]);
        usuarios.splice(index, 1);
        return true;
    } else {
        console.log('Usuario no encontrado.');
        return false;
    }
};

export const updateUsuario = (
    id: number,
    nombre: string,
    email: string,
    activo: boolean
): Usuario | undefined => {
    const usuario = getUsuarioById(id);
    if (usuario) {
        usuario.nombre = nombre;
        usuario.email = email;
        usuario.activo = activo;
        return usuario;
    } else {
        console.log('Usuario no encontrado.');
        return undefined;
    }
};
