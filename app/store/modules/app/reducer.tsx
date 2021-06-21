import types from './types';
import produce from 'immer';
const INITIAL_STATE = {
    user:{
        nome:null,
        email:null,
        tipo: null,
        senha: null,
    },
    logar:{
        email: null,
        senha: null
    }


} 

function app(state = INITIAL_STATE, action){
    switch (action.type){
        case types.UPDATE_USER:{
            return produce(state, (draft) => {
                draft.user = { ...state.user, ...action.user }
            });
        }

        case types.LOGAR_USER: {
            return produce(state, (draft) => {
                draft.logar = { ...state.logar, ...action.logar }
            });
        }


        default:
            return state;

    }
}

export default app;