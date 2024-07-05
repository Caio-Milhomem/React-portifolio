import { useState } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import "bootstrap/dist/js/bootstrap.js"
import Home from './Home'
import Sobre from './Sobre'
import Tecnologias from './Tecnologias'
import Projetos from './Projetos'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Tecnologias />
      <Projetos />
    </>
  )
}

export default App
