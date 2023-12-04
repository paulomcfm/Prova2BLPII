import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarUsuarios } from "../redux/usuarioReducer.js";
import { enviarMensagem } from "../redux/mensagemReducer.js";

const Usuario = () => {
  const { msg, usuarios } = useSelector((state) => state.usuario);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarUsuarios());
  }, [dispatch]);

  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");
  const [mensagemInput, setMensagemInput] = useState("");

  const manipularEnviarMensagem = async () => {
    if (usuarioSelecionado && mensagemInput) {
      const usuSelecionado = usuarios.find(
        (usuario) => usuario.id === parseInt(usuarioSelecionado)
      );

      if (usuSelecionado) {
        const novaMensagem = {
          id: Math.random(),
          dataHora: new Date().toLocaleString(),
          lida: false,
          mensagem: mensagemInput,
          usuario: { ...usuarioSelecionado },
        };
        dispatch(enviarMensagem(novaMensagem));
        try {
          const resposta = await fetch('https://backend-bcc-2-b.vercel.app/mensagem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaMensagem),
          });
          const dados = await resposta.json();
        } catch (erro) {
          console.error('Erro na requisição para enviar mensagem:', erro.message);
        }

        setMensagemInput("");
      }
    }
  };

  return (
    <div>
      <label htmlFor="usuarios">Selecione um usuário:</label>
      <select
        id="usuarios"
        value={usuarioSelecionado}
        onChange={(e) => setUsuarioSelecionado(e.target.value)}
      >
        <option value="">Selecione...</option>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>
            {usuario.nickname}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="mensagem">Mensagem:</label>
      <input
        type="text"
        id="mensagem"
        value={mensagemInput}
        onChange={(e) => setMensagemInput(e.target.value)}
      />

      <br />

      <button onClick={manipularEnviarMensagem}>Enviar Mensagem</button>
    </div>
  );
};

export default Usuario;
