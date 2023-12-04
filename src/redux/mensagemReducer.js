import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlBase = 'https://backend-bcc-2-b.vercel.app/mensagem';

const initialState = {
  msg: "",
  mensagens: []
};

export const buscarMensagens = createAsyncThunk('buscarMensagens', async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    if (dados.status) {
      return {
        status: dados.status,
        msg: "",
        mensagens: dados.listaMensagens
      }
    } else {
      return {
        status: dados.status,
        msg: dados.msg,
        mensagens: []
      }
    }
  } catch (erro) {
    return {
      status: false,
      msg: "Erro ao recuperar mensagens:" + erro.message,
      mensagens: []
    }
  }
});

export const enviarMensagem = createAsyncThunk('enviarMensagem', async (novaMensagem) => {
    try {
      const resposta = await fetch('https://seu-backend.com/api/enviar-mensagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMensagem),
      });
      const dados = await resposta.json();
      
      if (dados.status) {
        return { status: true, msg: dados.msg };
      } else {
        return { status: false, msg: dados.msg };
      }
    } catch (erro) {
      return { status: false, msg: 'Erro ao enviar mensagem: ' + erro.message };
    }
  });

const mensagemSlice = createSlice({
  name: 'mensagem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buscarMensagens.pending, (state, action) => {
      state.msg = 'Buscando mensagens...';
    }).addCase(buscarMensagens.fulfilled, (state, action) => {
      if (action.payload.status) {
        state.msg = "Mensagens recuperadas do backend!";
        state.mensagens = action.payload.mensagens;
      } else {
        state.msg = action.payload.msg;
        state.mensagens = [];
      }
    }).addCase(buscarMensagens.rejected, (state, action) => {
      state.msg = action.payload.msg;
      state.mensagens = [];
    }).addCase(enviarMensagem.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.msg = action.payload.msg;
          state.mensagens.push(action.payload.mensagem);
        } else {
          state.msg = action.payload.msg;
        }
      }).addCase(enviarMensagem.rejected, (state, action) => {
        state.msg = action.payload.msg;
      });
    }
});

export default mensagemSlice.reducer;
