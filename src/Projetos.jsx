
function Projetos() {

    return (
        <section className="projetos pt-3" id="projetos">
            <div className="container min-vh-100 text-white d-flex flex-column justify-content-center">
                <h2 className="text-white text-center fw-bolder mb-4 pt-5" style={{ textShadow: "3px 3px rgb(66, 66, 66)" }}>Projetos</h2>
                <div className="row d-flex justify-content-center text-dark px-4">
                    <div className="card mb-3">
                        <div className="row justify-content-center">
                            <img src="img/projPortGif.gif" className="img-fluid rounded px-0 m-0" style={{ maxWidth: "462px" }} alt="..." />
                            <div className="col align-content-center">
                                <div className="card-body d-inline-block p-0 m-0">
                                    <h5 className="card-title pt-2 ">Portfólio</h5>
                                    <p className="card-text my-2 ">Desenvolvimento de um website de rolagem para apresentar meu portfólio.</p>
                                    <div className="row justify-content-start  " >
                                        <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bootstrap" src="img/bootstrapLogo.png" alt="bootStrapLogo" style={{ maxInlineSize: "4rem" }} />
                                        <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="HTML" src="img/htmlLogo.png" alt="htmlLogo" style={{ maxInlineSize: "4rem" }} />
                                        <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="CSS" src="img/cssLogo.png" alt="cssLogo" style={{ maxInlineSize: "4rem" }} />
                                        <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="JavaScript" src="img/javascriptLogo.png" alt="javascriptLogo" style={{ maxInlineSize: "4rem" }} />
                                        <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="React" src="img/reactLogo.png" alt="reactLogo" style={{ maxInlineSize: "4rem" }} />
                                    </div>
                                    <a className="btn btn-dark justify-content-center d-flex mt-2" href="https://github.com/Caio-Milhomem/CaioMilhomem" target="_blank" role="button">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 w-auto">
                        <div className="row justify-content-center w-auto">
                            <div className="col-auto align-content-center p-0" >
                                <div className="card-body p-0 d-inline-block">
                                    <h5 className="card-title text-center mx-2 py-2">Novidades em breve</h5>
                                </div>
                            </div>
                            <img src="img/emBreve.png" style={{ maxWidth: "286px" }} className="rounded p-0" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projetos