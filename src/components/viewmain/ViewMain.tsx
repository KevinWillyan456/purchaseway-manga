import { Link, useNavigate } from "react-router-dom";
import "./ViewMain.css";
import { useContext, useEffect } from "react";
import { MangaContext } from "../../contexts/mangaContext";

function ViewMain() {
    const { manga } = useContext(MangaContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (manga._id === "") {
            navigate("/");
        }
    }, [manga]);

    return (
        <main className="container-view">
            <div className="title-view">Kimetsu no Yaiba</div>
            <Link to="/" className="btn-voltar">
                Voltar
            </Link>
            <div className="control-cap">
                <button className="control-cap-left">{"<"}</button>
                <div className="control-cap-info">CAP 1</div>
                <button className="control-cap-right">{">"}</button>
            </div>

            <section className="content">
                {manga.capitulos.length > 0 &&
                    manga.capitulos[0].paginas.map((pag) => (
                        <img key={pag._id} src={pag.path} />
                    ))}
            </section>
            <div className="space"></div>
            <div className="control-pag">
                <button className="control-pag-left">{"<"}</button>
                <div className="control-pag-info">Pág 1 de 55</div>
                <button className="control-pag-right">{">"}</button>
            </div>

            <button className="proximo-capitulo">Próximo Capítulo</button>
            <div className="space"></div>
        </main>
    );
}

export default ViewMain;
