import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { IManga } from '../components/homemain/HomeMain'

interface MangaContextType {
    manga: IManga
    setManga: Dispatch<SetStateAction<IManga>>
}

export const MangaContext = createContext<MangaContextType>({
    manga: {
        _id: '',
        capa: '',
        genero: '',
        titulo: '',
        dataDeAdicao: new Date(),
        capitulos: [],
    },
    setManga: () => {},
})

interface ProviderProps {
    children: React.ReactNode
}

export function MangaContextProvider({ children }: ProviderProps) {
    const [manga, setManga] = useState<IManga>({
        _id: '',
        capa: '',
        genero: '',
        titulo: '',
        dataDeAdicao: new Date(),
        capitulos: [],
    })

    return (
        <MangaContext.Provider
            value={{
                manga,
                setManga,
            }}
        >
            {children}
        </MangaContext.Provider>
    )
}
