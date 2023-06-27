import { useState } from "react";
import Input from "../../atoms/Input/Input";
import "./CadastroUnidades.css";

export default function CadastroUnidades({
  setOpenFormulario,
  unidadeSelecionada,
  setUnidadeSelecionada,
}) {
  const emptyState = {
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativa: false,
  };

  const [formulario, setFormulario] = useState(
    unidadeSelecionada || emptyState
  );

  const salvarFormulario = (event) => {
    event.preventDefault();
    if (unidadeSelecionada) {
      fetch(`http://localhost:3333/unidades/${unidadeSelecionada.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });
    } else {
      fetch("http://localhost:3333/unidades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });
    }
    setUnidadeSelecionada(emptyState);
    setOpenFormulario(false);
  };
  return (
    <section className="unidades-cadastro">
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={salvarFormulario}>
        <label htmlFor="apelido">Apelido</label>
        <Input
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
        <Input
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
        <Input
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
        <Input
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
