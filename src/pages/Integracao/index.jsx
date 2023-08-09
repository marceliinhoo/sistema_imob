import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './integracao.css';
import cascata from "../../assets/cascata.png"
import ads from "../../assets/ads.png"
import maps from "../../assets/googlemaps.png"
import tag from "../../assets/tagmanager.png"
import analytcs from "../../assets/analytcs.png"
import jivo from "../../assets/jivochat.png"
import pixel from "../../assets/facebookpixel.png"
import olx from "../../assets/olx.png"
import vivareal from "../../assets/vivareal.png"
import zap from "../../assets/zap.png"
import quinto from "../../assets/quintoandar.png"
import atendente from "../../assets/atendente.jpg"






const Integracao = () => {

    return (
        <>
            <Header />



            <main>


                <section id="integracao">

                    <section id="header_canais">

                        <h2><span>Amplie</span> seus canais de  <b>comunicação!</b> </h2>
                        <p>Aprimore a comunicação com seus clientes, com o contato ágil e direto via WhatsApp. <br />Garantimos uma comunicação mais rápida e personalizada, permitindo que suas dúvidas sejam resolvidas de forma eficiente.</p>

                    </section>

                    <section id="canais">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={ads} className="img-fluid" width={"70%"} alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src={maps} className="img-fluid" width={"70%"} alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src={tag} className="img-fluid" width={"70%"} alt="" />

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={analytcs} className="img-fluid" width={"70%"} alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src={jivo} className="img-fluid"width={"70%"} alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src={pixel} className="img-fluid"width={"70%"} alt="" />

                                </div>

                            </div>
                        </div>

                    </section>







                </section>

                <section id="sis_integrado">
                    <div className="container">
                        <div className="row integrado">
                            <div className="col-md-6">
                                <h5>Um site 100% intagrado ao sistema</h5>
                                <p>Desenvolva o seu próprio site personalizado, refletindo a identidade visual única da sua imobiliária, e obtenha resultados expressivos nos     negócios. <br /><br />
                                    Com a nossa plataforma, você poderá criar uma vitrine atraente para os seus imóveis, oferecendo aos seus clientes a liberdade de filtrar e encontrar exatamente o que procuram. <br /><br />
                                    Aumente a visibilidade da sua empresa e proporcione uma experiência otimizada aos seus clientes, garantindo que eles encontrem as melhores opções para suas necessidades imobiliárias de forma fácil e eficiente.</p>

                            </div>
                            <div className="col-md-6">
                                <center> <img src={cascata} className="img-fluid" width={"300px"} alt="" /></center>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="portais">
                    <div className="container">
                        <div className="chamada">
                            <h5>Sistema integrado a portais de anúncio</h5>
                            <p> Além disso, visando aumentar a visibilidade e alcance dos seus imóveis, oferecemos a oportunidade de listar seu portal em sites de anúncios líderes do setor, como OLX, ZAP Imóveis e Viva Real. Isso abrirá novos horizontes para o seu negócio e atrairá um público mais amplo em busca de propriedades.</p>

                        </div>

                        <div className="row">
                            <div className="col-md-3">
                            <center> <img src={olx} className="img-fluid" width={"65%"} alt="" /></center>

                            </div>
                            <div className="col-md-3">
                            <center> <img src={vivareal} className="img-fluid" width={"65%"} alt="" /></center>

                            </div>
                            <div className="col-md-3">
                            <center> <img src={zap} className="img-fluid" width={"65%"} alt="" /></center>

                            </div>
                            <div className="col-md-3">
                            <center> <img src={quinto} className="img-fluid" width={"70%"} alt="" /></center>

                            </div>
                        </div>

                    </div>


                </section>

                
            <section id="contato">
                <div className="container">
                    <center><h2 className="titulo">Não perca tempo entre em contato agora!</h2></center>
                    <br />
                    <div className="row">
                        <div className="col-md-5">
                            <img src={atendente} className="img-fluid " alt="" />
                        </div>
                        <div className="col-md-7 alinhamento">
                            <p>
                                "Descubra nosso incrível produto! Entre em contato agora mesmo e solicite um orçamento sem compromisso. Estamos ansiosos para atendê-lo e oferecer soluções personalizadas para suas necessidades. Não perca essa oportunidade, fale conosco hoje mesmo!"
                            </p>
                            <br>
                            </br>
                            <div className="_btn">
                                <big>
                                    <big className="color">
                                        <i class="fa-brands fa-whatsapp fa-beat fa-2xl" ></i>
                                    </big>
                                    <button className="m-3 btn_whats">
                                        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511919267633">Faça seu orçamento</a>
                                    </button>
                                </big>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>










            <Footer />
        </>
    )

}
export default Integracao