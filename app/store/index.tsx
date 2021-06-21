import {
    createStore, applyMiddleware, compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../config/reactotron';

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(SagaMiddleware), Reactotron.createEnhancer()),

);

SagaMiddleware.run(rootSaga);

export default store;