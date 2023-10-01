import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="cabecalho">
            <div className="content-cabecalho">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Ínicio</Link>
                        </li>
                        <li>
                            <Link to="/">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/">Serviços</Link>
                        </li>
                        <li>
                            <Link to="/">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
