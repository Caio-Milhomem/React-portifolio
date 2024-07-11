
function Sobre() {

    return (
        <section className="sobre pt-3" id="sobre">
            <div className="container min-vh-100 text-white text-center d-flex flex-column justify-content-center">
                <div className="row flex-lg-row  align-items-center">
                    <div className="col-lg" style={{ textAlign: "justify" }}>
                        <h2 className="ms-3 mb-4 fw-bolder pt-5" style={{ textShadow: "3px 3px rgb(66, 66, 66)" }}>Sobre mim</h2>
                        <p className="mx-3" style={{ letterSpacing: "0.03em" }}>
                            Meu nome é Caio, e estou animado em compartilhar meu fascínio pela tecnologia com você.
                            Recentemente, concluí minha jornada acadêmica, graduando-me em Ciência da Computação pela PUC-GO, e estou
                            pronto para mergulhar de cabeça no mundo profissional da tecnologia. </p>
                        <p className="mx-3" style={{ letterSpacing: "0.05em" }}>
                            Estou ansioso para embarcar nesta jornada profissional, aprender com cada experiência e
                            contribuir para o avanço da tecnologia. Se você está em busca de um profissional
                            recém-formado motivado, criativo e pronto para enfrentar desafios, estou aqui para colaborar e crescer junto
                            com sua equipe ou projeto.</p>
                        <p className="mx-3" style={{ letterSpacing: "0.03em" }}>
                            Obrigado por visitar meu site. Espero que você encontre aqui algo que desperte seu interesse e que
                            possamos explorar juntos as possibilidades infinitas que a tecnologia oferece.</p>
                        <a href="public/img/Currículo.pdf" download="Caio Milhomem CV">
                            <button type="button" className="btn btn-light mx-3 fw-bolder btn-baixar">Baixar CV</button>
                        </a>
                    </div>
                    <div className="col text-center ">
                        <div className="card tec-card">
                            <div className="card-body p-0">
                                <img className="img-fluid" style={{ maxHeight: "30rem" }} src="/img/cartoonImage.png" alt="cartoonImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre