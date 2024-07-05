
function Tecnologias() {

    return (
        <section className="tecnologias vh-100 pt-3" id="tecnologias">
            <h2 className="text-white text-center mt-5 mb-3 fw-bolder" style={{ textShadow: "2px 2px black" }}>Tecnologias</h2>
            <div className="container  text-white d-flex justify-content-center">
                <div className="container d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/bootstrapLogo.png" alt="bootStrap5Logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/htmlLogo.png" alt="html5Logo" />
                            <p>HTML</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/javascriptLogo.png" alt="javascriptLogo" />
                            <p>JavaScript</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/cssLogo.png" alt="cssLogo" />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/c++Logo.png" alt="c++Logo" />
                            <p>C++</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/gitLogo.png" alt="gitLogo" />
                            <p>Git</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/javaLogo.png" alt="javaLogo" />
                            <p>Java</p>
                        </div>
                        <div className="col text-center">
                            <img className="img-fluid" src="public/img/postgresqlLogo.png" alt="postgresqlLogo" />
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Tecnologias