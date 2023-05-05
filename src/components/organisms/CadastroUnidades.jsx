export default function CadastroUnidades({ setOpenFormulario }) {
  const salvarFormulario = (event) => {
    event.preventDefault();
    setOpenFormulario(false);
  };
  return (
    <section>
      <h2>Cadastro de Unidade Geradora</h2>
      <form onSubmit={salvarFormulario}>
        <label htmlFor="apelido">Apelido</label>
        <input type="text" name="apelido" id="" />
        <label htmlFor="local">Local</label>
        <input type="text" name="local" id="" />
        <label htmlFor="marca">Marca</label>
        <input type="text" name="marca" id="" />
        <label htmlFor="modelo">Modelo</label>
        <input type="text" name="modelo" id="" />
        <label htmlFor="ativo">Ativo</label>
        <input type="checkbox" name="active" id="" />
        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}
