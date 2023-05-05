import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <img src={logo} alt="Logo" />
            <Link to="/dashboard">
                <button>Dashboard</button>
            </Link>
            <Link to="/unidades">
                <button>Unidade Consumidora</button>
            </Link>
            <button onClick={() => navigate("/geracoes")}>Cadastro de Energia Gerada</button>
        </div>
    )
}