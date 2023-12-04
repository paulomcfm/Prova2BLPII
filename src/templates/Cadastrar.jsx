import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarMensagens } from "../redux/mensagemReducer.js";
import { adicionarUsuario } from "../redux/usuarioReducer.js";

const Cadastrar = () => {
  const { msg: msgCat, mensagens } = useSelector((state) => state.mensagem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarMensagens());
  }, [dispatch]);

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [urlAvatar, setUrlAvatar] = useState("");

  const registrarUsuario = async () => {
    if (nomeUsuario && urlAvatar) {
      try {
        await dispatch(adicionarUsuario({ nomeUsuario, urlAvatar: urlAvatar }));
        setNomeUsuario("");
        setUrlAvatar("");
      } catch (error) {
        console.error("Erro ao registrar usuario:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>Cadastrar Usuário:</h2>
      <label htmlFor="nomeUsuario">Usuario: </label>
      <input
        type="text"
        id="nomeUsuario"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
      />

      <br />

      <label htmlFor="urlAvatar">Avatar URL: </label>
      <input
        type="text"
        id="urlAvatar"
        value={urlAvatar}
        onChange={(e) => setUrlAvatar(e.target.value)}
      />

      <br />

      <button onClick={registrarUsuario}>Cadastrar Usuário</button>
      <h2>Mensagens Recebidas:</h2>
      <ul>
        {mensagens.map((mensagem) => (
          <li key={mensagem.id}>{mensagem.mensagem}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default Cadastrar;
