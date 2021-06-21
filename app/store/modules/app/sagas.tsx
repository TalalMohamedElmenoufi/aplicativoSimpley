import {all, takeLatest, select, call, put} from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import { navigate } from '../../../routes/rootNavegation';
import { updateUser } from '../app/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* checkUser(){
    try{

        const { logar } = yield select( (state) => state.app );
        const response = yield call(api.post, '/usuarios/email', { email: logar.email });

        const res = response.data;

        if (res.error) {
            alert(res.message);
            return false;
        }

        if (res.user) {
            yield put(updateUser(res.user));
            yield call(AsyncStorage.setItem, '@user', JSON.stringify(res.user));
            navigate('Home');

        } else {
            navigate('Login');
        } 


    } catch(err){
        alert(err.message);
    }
}

export function* createUser() {
    try {

        const { user } = yield select((state) => state.app);
        const response = yield call(api.post, '/usuarios/criarUser', 
        {
            nome: user.nome,
            email: user.email,
            tipo: user.tipo,
            senha: user.senha,
            logado: user.logado,
        });

        const res = response.data;

        if (res.error) {
            alert(res.message);
            return false;
        }

        yield put(updateUser(res.user));
        yield call(AsyncStorage.setItem, '@user', JSON.stringify(res.user));
        navigate('Home');


    } catch (err) {
        alert(err.message);
    }
}

export default all([
    takeLatest(types.CHECK_USER, checkUser),
    takeLatest(types.CREATE_USER, createUser),
]);