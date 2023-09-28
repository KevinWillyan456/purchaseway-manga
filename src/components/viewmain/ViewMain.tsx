import "./ViewMain.css";

function ViewMain() {
    return (
        <main className="container-view">
            <div className="title-view">Kimetsu no Yaiba</div>
            <button className="btn-voltar">Voltar</button>
            <div className="control-cap">
                <button className="control-cap-left">{"<"}</button>
                <div className="control-cap-info">CAP 1</div>
                <button className="control-cap-right">{">"}</button>
            </div>

            <section className="content">
                <img
                    src="https://static2.mangalivre.net/avif/EykuBK-tIHIfLPdrLROegQ/_jF4tpv7SlIewFiTzPJbfw/m2024523/3364/86011/90754/03.jpg.avif"
                    alt=""
                />
            </section>

            <div className="control-pag">
                <button className="control-pag-left">{"<"}</button>
                <div className="control-pag-info">Pág 1 de 55</div>
                <button className="control-pag-right">{">"}</button>
            </div>
            <div className="space"></div>
        </main>
    );
}

export default ViewMain;
