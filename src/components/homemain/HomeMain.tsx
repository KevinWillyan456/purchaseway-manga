import { useEffect, useState } from "react";
import Manga from "../manga/Manga";
import "./HomeMain.css";
import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

interface IPagina {
    _id: string;
    numero: number;
    path: string;
}

interface ICapitulo {
    _id: string;
    numero: number;
    paginas: IPagina[];
}

export interface IManga {
    _id: string;
    capa: string;
    genero: string;
    titulo: string;
    dataDeAdicao: Date;
    capitulos: ICapitulo[];
}

function Main() {
    const [mangas, setMangas] = useState<IManga[]>([]);

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    useEffect(() => {
        axios
            .get(baseURL, {
                headers: { Authorization: apiKey },
            })
            .then((response) => {
                setMangas(response.data.mangas);
            });
    }, []);

    return (
        <>
            <main className="container-main">
                <section className="main">
                    <div className="title-main">Lista dos Mangás</div>
                    <div className="content">
                        {mangas.length > 0 ? (
                            mangas.map((manga) => (
                                <Manga key={manga._id} manga={manga} />
                            ))
                        ) : (
                            <div className="content-no-result">
                                Sem resultados
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
