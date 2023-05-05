import { useState } from "react";

import CadastroUnidades from "../../components/organisms/CadastroUnidades";
import ListaUnidades from "../../components/organisms/ListaUnidades";

export default function Unidades() {
  const [openFormulario, setOpenFormulario] = useState(false);

  return (
    <div>
      {openFormulario === false && (
        <ListaUnidades setOpenFormulario={setOpenFormulario} />
      )}
      {openFormulario === true && (
        <CadastroUnidades setOpenFormulario={setOpenFormulario} />
      )}
    </div>
  );
}
