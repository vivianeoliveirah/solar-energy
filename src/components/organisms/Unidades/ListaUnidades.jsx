import { useState, useEffect } from "react";
import './ListaUnidades.css'
import Button from "../../atoms/Button/Button";
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
                <Button
                  classStyle="green"
                  onClick={() => {
                    setUnidadeSelecionada(unidade);
                    setOpenFormulario(true);
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button classStyle="danger" onClick={() => handleDelete(unidade.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        id="new-unit"
        classStyle="secondary"
        onClick={() => setOpenFormulario(true)}
      >
        Nova Unidade
      </Button>
    </section>
  );
}
