import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlBase = 'https://backend-bcc-2-b.vercel.app/usuario';

const initialState = {
  msg: "",
  usuarios: []
};

export const adicionarUsuario = createAsyncThunk('adicionarUsuario',(novoUsuario) => async (dispatch) => {
  dispatch(adicionarUsuario(novoUsuario));
});

export const buscarUsuarios = createAsyncThunk('buscarUsuarios', async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    if (dados.status) {
      return {
        status: dados.status,
        msg: "",
        usuarios: dados.listaUsuarios
      }
    } else {
      return {
        status: dados.status,
        msg: dados.msg,
        usuarios: []
      }
    }
  } catch (erro) {
    return {
      status: false,
      msg: "Erro ao recuperar usuários:" + erro.message,
      usuarios: []
    }
  }
});

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarUsuarios.pending, (state) => {
        state.msg = 'Buscando usuários...';
      })
      .addCase(buscarUsuarios.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.msg = "Usuários recuperados do backend!";
          state.usuarios = action.payload.usuarios;
        } else {
          state.msg = action.payload.msg;
          state.usuarios = [];
        }
      })
      .addCase(buscarUsuarios.rejected, (state, action) => {
        state.msg = action.payload.msg;
        state.usuarios = [];
      }).addCase(adicionarUsuario.fulfilled, (state, action) => {
        state.usuarios.push(action.payload);
      });
  }
});

export default usuarioSlice.reducer;
