import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [confirmClearHistory, setConfirmClearHistory] = useState(false)

    const handleClearHistory = () => {
        localStorage.clear()
        window.location.reload()
    }

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
                        <li>
                            <button
                                onClick={() => setConfirmClearHistory(true)}
                                className="clear-history"
                            >
                                Limpar histórico
                            </button>
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
                            <li>
                                <button
                                    onClick={() => {
                                        setConfirmClearHistory(true)
                                        setIsOpenModal(false)
                                    }}
                                    className="clear-history"
                                >
                                    Limpar histórico
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
            {confirmClearHistory && (
                <div className="confirm-clear-history-overflow">
                    <div className="confirm-clear-history">
                        <p>
                            Tem certeza que deseja limpar o histórico de
                            exibição?
                        </p>
                        <div className="buttons">
                            <button
                                className="cancel"
                                onClick={() => setConfirmClearHistory(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="confirm"
                                onClick={handleClearHistory}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
