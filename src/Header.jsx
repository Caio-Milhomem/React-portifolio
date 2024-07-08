
function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0 border border-secondary border-2 rounded-5 w-75 mx-auto">
            <div className="container justify-content-center  my-1">
                <a className="navbar-brand fw-bolder" style={{ letterSpacing: "0.02em" }} href="#">Caio Milhomem</a>
                <button className="navbar-toggler border-2 border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-bolder flex-grow-0 ms-auto" id="navbarResponsive">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sobre">Sobre mim</a></li>
                        <li className="nav-item"><a className="nav-link" href="#tecnologias">Tecnologias</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Header