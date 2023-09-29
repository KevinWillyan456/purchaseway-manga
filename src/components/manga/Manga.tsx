import "./Manga.css";

interface MangaProps {
    capa: string;
    titulo: string;
}

function Manga({ capa, titulo }: MangaProps) {
    return (
        <a
            href="/view"
            className="item"
            style={{
                backgroundImage: `url(${capa})`,
            }}
        >
            <div className="title">{titulo}</div>
        </a>
    );
}

export default Manga;
