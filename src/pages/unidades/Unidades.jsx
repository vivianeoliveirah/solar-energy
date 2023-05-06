import { useState } from "react";

import CadastroUnidades from "../../components/organisms/CadastroUnidades";
import ListaUnidades from "../../components/organisms/ListaUnidades";
import Container from "../../components/templates/container";

export default function Unidades() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(undefined);

  return (
    <Container title='Unidades'>
      {openFormulario === false && (
        <ListaUnidades
          setOpenFormulario={setOpenFormulario}
          setUnidadeSelecionada={setUnidadeSelecionada}
        />
      )}
      {openFormulario === true && (
        <CadastroUnidades
          setOpenFormulario={setOpenFormulario}
          unidadeSelecionada={unidadeSelecionada}
          setUnidadeSelecionada={setUnidadeSelecionada}
        />
      )}
    </Container>
  );
}
