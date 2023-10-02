import { Link, useNavigate } from "react-router-dom";
import "./ViewMain.css";
import { useContext, useEffect, useState } from "react";
import { MangaContext } from "../../contexts/mangaContext";

function ViewMain() {
    const { manga } = useContext(MangaContext);
    const [chapter, setChapter] = useState(0);
    const [page, setPage] = useState(0);
    const [modeView, setModeView] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (manga._id === "") {
            return navigate("/");
        }
    }, [manga]);

    const handlePage = (event: "left" | "right") => {
        if (event == "left") {
            if (page <= 0) {
                return;
            }
            setPage(page - 1);
        }
        if (event == "right") {
            if (page >= manga.capitulos[chapter].paginas.length - 1) {
                return;
            }
            setPage(page + 1);
        }
    };

    const handleChapter = (event: "left" | "right") => {
        if (event == "left") {
            if (chapter <= 0) {
                return;
            }
            setChapter(chapter - 1);
        }
        if (event == "right") {
            if (chapter >= manga.capitulos.length - 1) {
                return;
            }
            setChapter(chapter + 1);
        }
    };

    return (
        <main className="container-view">
            <div className="title-view">{manga.titulo}</div>
            <Link to="/" className="btn-voltar">
                Voltar
            </Link>
            <button
                className="mode-view"
                onClick={() => {
                    setModeView(!modeView);
                }}
            >
                {!modeView ? "Leitura Horizontal" : "Leitura Vertical"}
            </button>
            <div className="control-cap">
                <button
                    className="control-cap-left"
                    onClick={() => {
                        handleChapter("left");
                    }}
                >
                    {"<"}
                </button>
                <div className="control-cap-info">{`CAP ${chapter + 1}`}</div>
                <button
                    className="control-cap-right"
                    onClick={() => {
                        handleChapter("right");
                    }}
                >
                    {">"}
                </button>
            </div>

            <section className="content">
                {!modeView ? (
                    manga.capitulos.length > 0 &&
                    manga.capitulos[0]?.paginas.map((pag) => (
                        <img key={pag._id} src={pag.path} />
                    ))
                ) : (
                    <img
                        key={manga.capitulos[chapter]?.paginas[page]._id}
                        src={manga.capitulos[chapter]?.paginas[page].path}
                    />
                )}
            </section>
            <div className="space"></div>
            {modeView && (
                <div className="control-pag">
                    <button
                        className="control-pag-left"
                        onClick={() => {
                            handlePage("left");
                        }}
                    >
                        {"<"}
                    </button>
                    <div className="control-pag-info">{`Pág ${page + 1} de ${
                        manga.capitulos[chapter]?.paginas.length
                    }`}</div>
                    <button
                        className="control-pag-right"
                        onClick={() => {
                            handlePage("right");
                        }}
                    >
                        {">"}
                    </button>
                </div>
            )}

            <button
                className="proximo-capitulo"
                onClick={() => {
                    handleChapter("right");
                }}
            >
                {page >= manga.capitulos[chapter]?.paginas.length - 1 ||
                (chapter >= manga.capitulos.length - 1 && !modeView)
                    ? "FIM, Obrigado por ler"
                    : "Próximo Capítulo"}
            </button>
            <div className="space"></div>
        </main>
    );
}

export default ViewMain;
