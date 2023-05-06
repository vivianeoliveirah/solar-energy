import { useState, useEffect } from "react";
import './ListaUnidades.css'
export default function ListaUnidades({
  setOpenFormulario,
  setUnidadeSelecionada,
}) {
  const [unidades, setUnidades] = useState([]);
  function getData() {
    fetch("http://localhost:3333/unidades")
      .then((response) => response.json())
      .then((data) => {
        setUnidades(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3333/unidades/${id}`, {
      method: "DELETE",
    });
    getData();
  };

  return (
    <section className="unit-list">
      <h2>Lista de unidades:</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {unidades.map((unidade) => (
            <tr key={unidade.id}>
              <td>{unidade.id}</td>
              <td>{unidade.apelido}</td>
              <td>{unidade.local}</td>
              <td>{unidade.marca}</td>
              <td>{unidade.modelo}</td>
              <td>
                <button
                  onClick={() => {
                    setUnidadeSelecionada(unidade);
                    setOpenFormulario(true);
                  }}
                >
                  Editar
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(unidade.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setOpenFormulario(true)} id="new-unit">Nova Unidade</button>
    </section>
  );
}
