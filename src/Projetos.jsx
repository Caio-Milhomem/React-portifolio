
function Projetos() {

    return (
        <section className="projetos min-vh-100 pt-4" id="projetos">
            <h2 className="text-white text-center mt-4 pt-3 fw-bolder" style={{ textShadow: "2px 2px rgb(66, 66, 66)" }}>Projetos</h2>
            <div className="container text-white d-flex flex-column justify-content-center mt-5">
                <div className="row text-dark">
                    <div className="col my-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18em" }}>
                            <img src="/img/projPortGif.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Portfolio</h5>
                                <p className="card-text">Desenvolvimento de um website de rolagem para apresentar meu portfólio.</p>
                                <div className="row d-flex justify-content-center">
                                    <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bootstrap" src="/img/bootstrapLogo.png" alt="bootStrapLogo" style={{ maxInlineSize: "4rem" }} />
                                    <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="HTML" src="/img/htmlLogo.png" alt="htmlLogo" style={{ maxInlineSize: "4rem" }} />
                                    <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="CSS" src="/img/cssLogo.png" alt="cssLogo" style={{ maxInlineSize: "4rem" }} />
                                    <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="JavaScript" src="/img/javascriptLogo.png" alt="javascriptLogo" style={{ maxInlineSize: "4rem" }} />
                                </div>
                            </div>
                            <a className="btn btn-dark mx-3 mb-2" href="https://github.com/Caio-Milhomem/Portfolio" target="_blank" role="button">GitHub</a>
                        </div>
                    </div>
                    <div className="col my-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18em" }}>
                            <img src="/img/emBreve.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">??????</h5>
                                <div className="container d-flex flex-column justify-content-center text-center" style={{ height: "10rem" }}>
                                    <p className="card-text">Novidades em breve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18em" }}>
                            <img src="/img/emBreve.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">??????</h5>
                                <div className="container d-flex flex-column justify-content-center text-center" style={{ height: "10rem" }}>
                                    <p className="card-text">Novidades em breve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos