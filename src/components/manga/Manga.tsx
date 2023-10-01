import { Link } from "react-router-dom";
import "./Manga.css";
import { IManga } from "../homemain/HomeMain";
import { useContext } from "react";
import { MangaContext } from "../../contexts/mangaContext";

function Manga(mangaProps: { manga: IManga }) {
    const { _id, capa, capitulos, dataDeAdicao, genero, titulo } =
        mangaProps.manga;

    const { setManga } = useContext(MangaContext);

    return (
        <Link
            to="/view"
            className="item"
            style={{
                backgroundImage: `url(${capa})`,
            }}
            onClick={() => {
                setManga({
                    _id: _id,
                    capa: capa,
                    capitulos: capitulos,
                    dataDeAdicao: dataDeAdicao,
                    genero: genero,
                    titulo: titulo,
                });
            }}
        >
            <div className="title">{titulo}</div>
        </Link>
    );
}

export default Manga;
