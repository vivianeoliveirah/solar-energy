<<<<<<< HEAD

import CadastroUnidades from "../../components/organisms/CadastroUnidades";
import ListaUnidades from "../../components/organisms/ListaUnidades";

export default function Unidades() {

    //useState [openForm, setOpenForm];

    return (

        <div>
            <ListaUnidades />
            <CadastroUnidades />
            
        </div>

    )
}


=======
export default function Unidades() {
    return (
        <div>
            <h1>Lista de unidades:</h1>

            <table>
                <thead>
                    <td>ID</td>
                    <td>Apelido</td>
                    <td>Local</td>
                    <td>Marca</td>
                    <td>Modelo</td>
                    <td></td>
                    <td></td>
                </thead>
                <tbody>
                    <tr>
                    <td>156</td>
                    <td>156</td>
                    <td>156</td>
                    <td>156</td>
                    <td>156</td>
                    </tr>
                </tbody>

            </table>
        </div>

    )
}
>>>>>>> 7417ce9c9c28fa871fe907bb43f5b2053f04181b
