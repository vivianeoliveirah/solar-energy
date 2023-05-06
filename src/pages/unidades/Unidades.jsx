import { useState } from "react";

import CadastroUnidades from "../../components/organisms/CadastroUnidades";
import ListaUnidades from "../../components/organisms/ListaUnidades";

export default function Unidades() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(undefined);

  return (
    <div>
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
    </div>
  );
}
