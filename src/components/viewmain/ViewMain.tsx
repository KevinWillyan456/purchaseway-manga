import { Link, useNavigate } from "react-router-dom";
import "./ViewMain.css";
import { useContext, useEffect, useState } from "react";
import { MangaContext } from "../../contexts/mangaContext";

interface IEntries {
    chapter: number;
    page: number;
    titulo: string;
}

function ViewMain() {
    const { manga } = useContext(MangaContext);
    const [chapter, setChapter] = useState(0);
    const [page, setPage] = useState(0);
    const [modeView, setModeView] = useState(false);
    const [isOpenSelectChapter, setIsOpenSelectChapter] = useState(false);
    const [isOpenSelectPage, setIsOpenSelectPage] = useState(false);

    const navigate = useNavigate();

    const loadFromLocalStorage = (key: string) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };

    const loadReadingMode = () => {
        const item = localStorage.getItem("reading-mode");
        return item ? JSON.parse(item) : null;
    };

    const saveToLocalStorage = (key: string, value: IEntries) => {
        const existingData = loadFromLocalStorage(key) || [];
        const index = existingData.findIndex(
            (item: IEntries) => item.titulo === value.titulo
        );

        if (index !== -1) {
            existingData[index] = { ...existingData[index], ...value };
        } else {
            existingData.push(value);
        }

        localStorage.setItem(key, JSON.stringify(existingData));
    };

    const saveReadingMode = (type: string) => {
        localStorage.setItem("reading-mode", JSON.stringify(type));
    };

    useEffect(() => {
        const savedData: IEntries[] = loadFromLocalStorage("entries");
        const savedReadingMode: string = loadReadingMode();
        if (savedData) {
            setPage(
                savedData.find((e) => {
                    return e.titulo == manga.titulo;
                })?.page || 0
            );
            setChapter(
                savedData.find((e) => {
                    return e.titulo == manga.titulo;
                })?.chapter || 0
            );
        }
        if (savedReadingMode && savedReadingMode == "vertical") {
            setModeView(false);
        } else {
            setModeView(true);
        }
    }, []);

    useEffect(() => {
        if (!page && !chapter) return;

        saveToLocalStorage("entries", {
            chapter,
            page,
            titulo: manga.titulo,
        });
    }, [page, chapter]);

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
            setIsOpenSelectChapter(false);
            setIsOpenSelectPage(false);
        }
        if (event == "right") {
            if (page >= manga.capitulos[chapter].paginas.length - 1) {
                return;
            }
            setPage(page + 1);
            setIsOpenSelectChapter(false);
            setIsOpenSelectPage(false);
        }
    };

    const handleChapter = (event: "left" | "right") => {
        if (event == "left") {
            if (chapter <= 0) {
                return;
            }
            if (chapter <= 1) {
                saveToLocalStorage("entries", {
                    chapter: 0,
                    page: 0,
                    titulo: manga.titulo,
                });
            }
            setChapter(chapter - 1);
            setPage(0);
            setIsOpenSelectChapter(false);
            setIsOpenSelectPage(false);
        }
        if (event == "right") {
            if (chapter >= manga.capitulos.length - 1) {
                return;
            }
            setChapter(chapter + 1);
            setPage(0);
            setIsOpenSelectChapter(false);
            setIsOpenSelectPage(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 150,
            behavior: "instant",
        });
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
                    if (modeView) saveReadingMode("vertical");
                    else saveReadingMode("horizontal");
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
                <div
                    className="control-cap-info"
                    onClick={() => {
                        setIsOpenSelectChapter(!isOpenSelectChapter);
                    }}
                >{`CAP ${chapter + 1}`}</div>
                <button
                    className="control-cap-right"
                    onClick={() => {
                        handleChapter("right");
                    }}
                >
                    {">"}
                </button>
                {isOpenSelectChapter && (
                    <div className="control-cap-content">
                        <ul>
                            {manga.capitulos.map((mangaMap) => (
                                <li key={mangaMap._id}>
                                    <div
                                        onClick={() => {
                                            if (mangaMap.numero - 1 <= 1) {
                                                saveToLocalStorage("entries", {
                                                    chapter: 0,
                                                    page: 0,
                                                    titulo: manga.titulo,
                                                });
                                            }

                                            setChapter(mangaMap.numero - 1);
                                            setPage(0);
                                            setIsOpenSelectChapter(
                                                !isOpenSelectChapter
                                            );
                                        }}
                                        className={
                                            chapter + 1 === mangaMap.numero
                                                ? "selected"
                                                : ""
                                        }
                                    >
                                        {`Cap. ${mangaMap.numero}`}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <section className="content">
                {!modeView ? (
                    manga.capitulos.length > 0 &&
                    manga.capitulos[chapter]?.paginas.map((pag) => (
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
                            scrollToTop();
                        }}
                    >
                        {"<"}
                    </button>
                    <div
                        className="control-pag-info"
                        onClick={() => {
                            setIsOpenSelectPage(!isOpenSelectPage);
                        }}
                    >{`Pág ${page + 1} de ${
                        manga.capitulos[chapter]?.paginas.length
                    }`}</div>
                    <button
                        className="control-pag-right"
                        onClick={() => {
                            handlePage("right");
                            scrollToTop();
                        }}
                    >
                        {">"}
                    </button>
                    {isOpenSelectPage && (
                        <div className="control-pag-content">
                            <ul>
                                {manga.capitulos[chapter]?.paginas.map(
                                    (mangaMap) => (
                                        <li key={mangaMap._id}>
                                            <div
                                                onClick={() => {
                                                    setPage(
                                                        mangaMap.numero - 1
                                                    );
                                                    setIsOpenSelectPage(
                                                        !isOpenSelectPage
                                                    );
                                                }}
                                                className={
                                                    page + 1 === mangaMap.numero
                                                        ? "selected"
                                                        : ""
                                                }
                                            >
                                                {`Pag. ${mangaMap.numero}`}
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <button
                className="proximo-capitulo"
                onClick={() => {
                    handleChapter("right");
                }}
            >
                {chapter >= manga.capitulos.length - 1
                    ? "Capítulo Final"
                    : "Próximo Capítulo"}
            </button>
            <div className="space"></div>
        </main>
    );
}

export default ViewMain;
