import { useState } from "react";

export default function CadastroUnidades({ setOpenFormulario }) {
  const [formulario, setFormulario] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativa: false,
  });
  console.log(formulario);

  const salvarFormulario = (event) => {
    event.preventDefault();

    fetch("http://localhost:3333/unidades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulario),
    });

    setOpenFormulario(false);
  };
  return (
    <section>
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={salvarFormulario}>
        <label htmlFor="apelido">Apelido</label>
        <input
          type="text"
          name="apelido"
          id="apelido"
          value={formulario.apelido}
          onChange={(event) => {
            setFormulario({
              ...formulario,
              apelido: event.target.value,
            });
          }}
        />

        <label htmlFor="local">Local</label>
        <input
          type="text"
          name="local"
          id="local"
          value={formulario.local}
          onChange={(event) => {
            setFormulario({
              ...formulario,
              local: event.target.value,
            });
          }}
        />

        <label htmlFor="marca">Marca</label>
        <input
          type="text"
          name="marca"
          id="marca"
          value={formulario.marca}
          onChange={(event) => {
            setFormulario({
              ...formulario,
              marca: event.target.value,
            });
          }}
        />

        <label htmlFor="modelo">Modelo</label>
        <input
          type="text"
          name="modelo"
          id=""
          value={formulario.modelo}
          onChange={(event) => {
            setFormulario({
              ...formulario,
              modelo: event.target.value,
            });
          }}
        />

        <label htmlFor="ativo">Ativo</label>
        <input
          type="checkbox"
          name="active"
          id=""
          checked={formulario.ativa}
          onChange={(event) => {
            setFormulario({
              ...formulario,
              ativa: event.target.checked,
            });
          }}
        />

        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}
