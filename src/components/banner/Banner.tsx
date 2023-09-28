import "./Banner.css";

function Banner() {
    return (
        <main className="container">
            <section className="banner">
                <div className="title">
                    Conheça nosso espaço criado especialmente para ler mangás
                </div>
                <div className="cover">
                    <img src="/logo-medium.png" alt="logo" />
                </div>
            </section>
        </main>
    );
}

export default Banner;
