import {createStore} from 'redux';
import loadedReducer from '../reducers'; // Assumez que vous avez un fichier reducers/index.js

const store = createStore(loadedReducer);

export default store;
