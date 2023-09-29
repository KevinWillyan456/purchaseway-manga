import { useEffect, useState } from "react";
import Manga from "../manga/Manga";
import "./HomeMain.css";
import axios from "axios";

const baseURL = "http://localhost:3000/manga";

interface IPagina {
    numero: number;
    path: string;
}

interface ICapitulo {
    numero: number;
    pagina: IPagina[];
}

interface IManga {
    _id: string;
    capa: string;
    genero: string;
    titulo: string;
    dataDeAdicao: Date;
    capitulos: ICapitulo[];
}

function Main() {
    const [mangas, setMangas] = useState<IManga[]>([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMangas(response.data.mangas);
        });
    }, []);

    if (!mangas) return null;

    return (
        <>
            <main className="container-main">
                <section className="main">
                    <div className="title-main">Lista dos Mangás</div>
                    <div className="content">
                        {mangas.map((manga) => (
                            <Manga
                                key={manga._id}
                                capa={manga.capa}
                                titulo={manga.titulo}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
