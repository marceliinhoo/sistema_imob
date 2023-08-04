import React, { useEffect } from "react"
import logo from '../../assets/logo.png';
import './header.css';
import { Link } from "react-router-dom"


const Header = () => {


  useEffect(() => {
  }, [])

  return (

    <div>
      <div className="bg-primary" id="nav1" >
        <nav class=" container navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
          <div class="container-fluid">
            <Link to='/'> <img src={logo} width="250" alt="" /></Link>
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav" data-bs-theme="blue" >
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item dropdown "  >
                  <Link to='/gestao' class="nav-link  active fs-5" href="#" role="button" data-bs-toggle="" aria-expanded="false"> GESTÃO</Link>
                </li>
                <li class="nav-item dropdown"  >
                  <Link to='/integracao' class="nav-link  active fs-5" href="#" role="button" data-bs-toggle="" aria-expanded="false"> INTEGRAÇÃO</Link>
                </li>
                <li class="nav-item dropdown"  >
                  <Link to='/financeiro' class="nav-link  active fs-5" href="#" role="button" data-bs-toggle="" aria-expanded="false"> FINANCEIRO</Link>
                </li>
                <li class="nav-item dropdown"  >
                 <Link to='/contato' class="nav-link  active fs-5" href="#" role="button" data-bs-toggle="" aria-expanded="false"> CONTATO</Link>
                </li>
              </ul>
              <ul class="navbar-nav ms-4 ">
                <button className="nav-item btn btn-success bold">
                  <a class="nav-link active fs-6  " aria-current="page" href="https://geconweb.paginas.site/leadapresentacao" target="_blank" rel="noreferrer" >SOLICITE SEU ORÇAMENTO</a>
                </button>
              </ul>
            </div>
          </div>
        </nav >
      </div>
    </div>
  )
}

export default Header