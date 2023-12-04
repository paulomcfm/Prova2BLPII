import { configureStore } from '@reduxjs/toolkit';
import usuarioSlice from './usuarioReducer.js';
import mensagemSlice from './mensagemReducer.js';

const store = configureStore({
    reducer: {
        mensagem: mensagemSlice,
        usuario: usuarioSlice
    }
})

export default store;