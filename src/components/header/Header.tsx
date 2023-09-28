import "./Header.css";

function Header() {
    return (
        <header className="cabecalho">
            <div className="content-cabecalho">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Ínicio</a>
                        </li>
                        <li>
                            <a href="/">Sobre</a>
                        </li>
                        <li>
                            <a href="/">Serviços</a>
                        </li>
                        <li>
                            <a href="/">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
