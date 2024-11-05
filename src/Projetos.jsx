
function Projetos() {

    return (
        <section className="projetos pt-3" id="projetos">
            <div className="container min-vh-100 text-white d-flex flex-column justify-content-center">
                <h2 className="text-white text-center fw-bolder mb-4 pt-5" style={{ textShadow: "3px 3px rgb(66, 66, 66)" }}>Projetos</h2>
                <div className="row d-flex justify-content-center text-dark px-4">
                    <div className="card mb-3">
                        <div className="row justify-content-center">
                            <video autoPlay loop muted className="p-0 rounded " style={{ width: "865px" }}>
                                <source src="img/portfolio.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="col align-content-center">
                                <div className="card-body d-inline-block p-0 m-0">
                                    <h5 className="card-title pt-2 ">Portfólio</h5>
                                    <p className="card-text my-2 ">Desenvolvimento de um website de rolagem para apresentar meu portfólio.</p>
                                    <div className="row justify-content-start" >
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bootstrap" src="img/bootstrap-logo.png" alt="bootStrapLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="HTML" src="img/htmlLogo.png" alt="htmlLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="CSS" src="img/cssLogo.png" alt="cssLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="JavaScript" src="img/javascriptLogo.png" alt="javascriptLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="React" src="img/reactLogo.png" alt="reactLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                    <a className="btn btn-dark justify-content-center d-flex mt-2" href="https://github.com/Caio-Milhomem/CaioMilhomem" target="_blank" role="button">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row justify-content-center">
                            <video autoPlay loop muted className="p-0 rounded " style={{ width: "865px" }}>
                                <source src="img/chatapp.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="col align-content-center">
                                <div className="card-body d-inline-block p-0 m-0">
                                    <h5 className="card-title pt-2 ">PERN-Chat</h5>
                                    <p className="card-text my-2 ">Chat app para troca de mensagens isntantânea.</p>
                                    <div className="row row-cols-3 justify-content-start" >
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="PostgreSQL" src="img/postgresql-logo.png" alt="PostgrSQLLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Express" src="img/express-js.png" alt="ExpressLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="React" src="img/reactLogo.png" alt="ReactLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">
                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nodejs" src="img/node-logo.png" alt="NodeLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">

                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bootstrap" src="img/bootstrap-logo.png" alt="BootstrapLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">

                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="TypeScript" src="img/typescript-logo.png" alt="TypeScriptLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">

                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Prisma" src="img/prisma-logo.png" alt="PrismaLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">

                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="JWT" src="img/jwt-logo.png" alt="JWTLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center">

                                            <img className="img-fluid" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Socket.io" src="img/socketIO-logo.png" alt="Socket.ioLogo" style={{ width: "45px", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                    <a className="btn btn-dark justify-content-center d-flex mt-2" href="https://github.com/Caio-Milhomem/CaioMilhomem" target="_blank" role="button">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 w-auto">
                        <div className="row justify-content-center w-auto">
                            <div className="col-auto align-content-center p-0" >
                            </div>
                            <img src="img/emBreve.png" style={{ width: "365px" }} className="rounded p-0" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projetos