import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './contato.css';
import Formulario from "../../components/Formulario";

const Gestão = () => {
    return (
        <>
            <Header />

            <div id="contato2">
                <div className="titulo_contato">
                    <center><h3>Entre em contato conosco! </h3></center>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 box_txt">
                            <center><h4>Estamos sempre disponíveis para atendê-los!</h4></center><br />
                            <p>Valorizamos muito o seu contato e queremos proporcionar a melhor experiência possível. Seja para esclarecer dúvidas, receber informações, ou compartilhar suas sugestões e feedback.</p>
                            <i class="fa-solid fa-phone fa-2xl"></i>
                            <p>(11) 9192-7633</p>
                            <i class="fa-solid fa-envelope fa-2xl"></i>
                            <p>contato@geconweb.com.br</p>
                        </div>
                        <div className="col-md-8">
                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />



        </>
    )

}
export default Gestão