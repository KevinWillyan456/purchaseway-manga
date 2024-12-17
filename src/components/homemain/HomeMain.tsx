import axios from 'axios'
import { useEffect, useState } from 'react'
import Error from '../loadingAndError/Error'
import Loading from '../loadingAndError/Loading'
import Manga from '../manga/Manga'
import './HomeMain.css'

const baseURL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/manga`

interface IPagina {
    _id: string
    numero: number
    path: string
}

interface ICapitulo {
    _id: string
    numero: number
    paginas: IPagina[]
}

export interface IManga {
    _id: string
    capa: string
    genero: string
    titulo: string
    dataDeAdicao: Date
    capitulos: ICapitulo[]
}

function Main() {
    const [mangas, setMangas] = useState<IManga[]>([])
    const [error, setError] = useState<boolean>(false)

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(baseURL, {
                headers: { Authorization: apiKey },
            })
            .then((response) => {
                setMangas(response.data.mangas)
            })
            .catch(() => setError(true))
    }, [apiKey])

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
                        ) : error ? (
                            <Error />
                        ) : (
                            <div className="content-no-result">
                                <Loading />
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
