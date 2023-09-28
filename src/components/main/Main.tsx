import Manga from "../manga/Manga";
import "./Main.css";

function Main() {
    return (
        <>
            <main className="container-main">
                <section className="main">
                    <div className="title-main">Lista dos Mangás</div>

                    <div className="content">
                        <Manga />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;
