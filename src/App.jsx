import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import "bootstrap/dist/js/bootstrap.js"
import Home from './Home'
import Sobre from './Sobre'
import Tecnologias from './Tecnologias'
import Projetos from './Projetos'
import Contato from './Contato'
import { initializeActiveSection } from './active'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    // Chame a função de inicialização do script externo e obtenha a função de limpeza
    const cleanup = initializeActiveSection();

    // Use a função de limpeza no return para remover o ouvinte de evento
    return cleanup;
  }, []);


  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
    </>
  )
}

export default App
