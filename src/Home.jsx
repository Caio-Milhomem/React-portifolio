import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <section className="home" id="home">
            <div className="container vh-100 text-center d-flex flex-column justify-content-center">
                <h1 className="fw-bolder"><TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        '👋🙂 Olá, eu sou Caio, Desenvolvedor 💻',
                        1000,
                        '👋🙂 Olá, eu sou Caio, Gamer 🎮',
                        1000,
                        '👋🙂 Olá, eu sou Caio, Skatista 🛹',
                        1000,
                    ]}
                    speed={8}
                    style={{ fontSize: '1em' }}
                    repeat={Infinity}
                /></h1>
            </div>
        </section>
    )
}

export default Home