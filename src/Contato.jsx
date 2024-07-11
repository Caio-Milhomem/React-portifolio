
function Contato() {

    return (
        <section className="text-white pt-4 contato min-vh-100" id="contato">
            <div className="container min-vh-100 text-white d-flex flex-column justify-content-center" style={{ minHeight: "70vh" }}>
                <h2 className="text-white text-center mb-4 fw-bolder" style={{ textShadow: "3px 3px black" }}>Contato</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-2 mx-3" style={{ minInlineSize: "8rem" }}>
                        <a className="btn p-0" href="https://www.linkedin.com/in/caio-de-paula-milhomem-santos/" target="_blank">
                            <img className="img-fluid" src="/img/linkedinLogo.png" alt="linkedinLogo" />
                        </a>
                        <p className="text-center mt-2" style={{ textShadow: "2px 2px rgb(66, 66, 66)" }}>Linkedin</p>
                    </div>
                    <div className="col-2 mx-3" style={{ minInlineSize: "8rem" }}>
                        <a className="btn p-0" href="https://api.whatsapp.com/send?phone=5562985851272" target="_blank">
                            <img className="img-fluid" src="/img/whatsappLogo.png" alt="whatsappLogo" />
                        </a>
                        <p className="text-center mt-2" style={{ textShadow: "2px 2px rgb(66, 66, 66)" }}>Whatsapp</p>
                    </div>
                    <div className="col-2 mx-3" style={{ minInlineSize: "8rem" }}>
                        <a className="btn p-0 " href="mailto:caiomilhomem@outlook.com.br" target="_blank">
                            <img className="img-fluid" src="/img/emailLogo.png" alt="emailLogo" />
                        </a>
                        <p className="text-center mt-2" style={{ textShadow: "2px 2px rgb(66, 66, 66)" }}>Email</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato