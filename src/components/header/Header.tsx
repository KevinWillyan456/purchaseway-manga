import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <header className="cabecalho">
            <div className="content-cabecalho">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                </Link>

                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
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

                <button
                    className="hamburger"
                    onClick={() => setIsOpenModal(true)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                {isOpenModal && (
                    <nav className="nav-bar-mobile">
                        <div
                            className="close"
                            onClick={() => setIsOpenModal(false)}
                        >
                            X
                        </div>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
