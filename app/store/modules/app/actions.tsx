import types from './types';

export function createUser() {
    return {type: types.CREATE_USER}
}

export function updateUser(user) {
    return { type: types.UPDATE_USER, user }
}

export function logarUser(logar) {
    return { type: types.LOGAR_USER, logar }
}
export function checkUser() {
    return { type: types.CHECK_USER }
}