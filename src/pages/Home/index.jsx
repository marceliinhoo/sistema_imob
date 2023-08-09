import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './home.css';
import 'animate.css';
import organizacao from "../../assets/organizacao.jpg"
import noteecel from "../../assets/noteecel2.png"
import img1 from "../../assets/service_img1.png"
import img2 from "../../assets/service_img2.png"
import img3 from "../../assets/service_img3.png"
import img4 from "../../assets/service_img4.png"
import atendente from "../../assets/atendente.jpg"
import olx from "../../assets/olx.png"
import vivareal from "../../assets/vivareal.png"
import zap from "../../assets/zap.png"
import quinto from "../../assets/quintoandar.png"



const Home = () => {
    return (
        <>
            <Header />

            <section id="bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 flex">
                            <h1 className="" >Sistema para gestão imobiliária completo e 100% online.</h1>
                            <br></br>
                            <h4>Simplifique processos, automatize tarefas e aumente sua eficiência</h4>
                            <br></br>
                            <button className="btn btn-success p-3 bold"><a href="https://geconweb.paginas.site/leadapresentacao" target="_blank" rel="noopener">SOLICITE UMA APRESENTAÇÃO!</a></button>
                        </div>
                        <div class="col-md-6 ">
                            {/*  <img src={img_banner} width="100%" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>


            <section id="problema">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 ">
                            <img src={organizacao} className="img-fluid align-top" alt="" />
                        </div>
                        <div className="col-md-6 alinhamento">
                            <br></br>
                            <h4 >Qual problema de sua imobiliária enfrenta?</h4>
                            <p>Desorganização? <br></br>
                                Dificuldade na comunicação? <br></br>
                                Problemas na organização financeira?
                            </p>
                            <h4>Veja como podemos ajudar sua imobiliária</h4>
                            <br></br>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-align">
                <center><h3 >Controle de Gestão</h3></center>
            </div>
            <section id="adm-2">

                <div className="box-G">
                    <div className="box-1 hover-box2">
                        <div className="">

                            <span class="hover-text2">Geconweb é um sistema que simplifica seus processos.<br></br>
                                <br></br>
                                Organize tarefas, gerencie equipes e acompanhe o desempenho em tempo real. Otimize recursos, reduza custos e tome decisões assertivas.<br></br>
                                Anuncie seus imóveis no seu site próprio e nos principais portais de anúncio diretamente integrados.<br></br>
                                Aumente a eficiência operacional e alcance novos patamares de produtividade. <br></br><br></br> Experimente a gestão administrativa inteligente, a chave para o sucesso do seu negócio.
                            </span>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="box-2-1">
                            <div className="cx hover-box">
                                <div >
                                    <span class="hover-text hover-text-bg6">Elabore contratos com facilidade e segurança! Nosso sistema simplifica o processo de criação de contratos, oferecendo modelos personalizáveis e pré-aprovados.
                                    </span>
                                </div>
                            </div>
                            <div className="cx-2  hover-box ">
                                <div >
                                    <span class="hover-text hover-text-bg4">"Otimize o pagamento de comissões a corretores com nosso sistema intuitivo! Automatize o cálculo e rastreamento das comissões, garantindo precisão e transparência. Experimente a gestão de comissões descomplicada e eficiente."
                                    </span>
                                </div>
                            </div>
                            <div className="cx-3  hover-box  ">
                                <div >
                                    <span class="hover-text hover-text-bg5   ">"Facilite a cobrança de aluguel dos seus clientes com nosso sistema eficiente! Automatize o processo de faturamento, emitindo boletos e notificações de forma ágil e segura. Simplifique a gestão financeira, economizando tempo e esforço."
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="box-2-2">
                            <div className="cx-4 hover-box">
                                <div >
                                    <span class="hover-text hover-text-bg4">
                                        "Obtenha vantagem competitiva com nosso sistema imobiliário completo! Tenha um site próprio profissional para sua imobiliária e integração com os principais portais do setor. Aumente a visibilidade de suas ofertas e alcance mais clientes."
                                    </span>
                                </div>
                            </div>
                            <div className="cx-5 hover-box">
                                <div >
                                    <span class="hover-text hover-text-bg5">
                                        "Centralize e organize o cadastro de clientes em um só lugar! Nosso sistema facilita a gestão de inquilinos, proprietários e compradores. Acesse informações essenciais e documentos de forma rápida e segura. "
                                    </span>
                                </div>
                            </div>
                            <div className="cx-6 hover-box">
                                <div >
                                    <span class="hover-text hover-text-bg6">
                                        "Controle total na gestão de funcionários com nosso sistema flexível! Cadastre e gerencie seus colaboradores com facilidade. Personalize os acessos conforme suas necessidades, garantindo segurança e confidencialidade. "
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>

            <section id="formulario">
                <div className="titulo">
                    <center>
                        <h3 className="bg-align" >Integre seus anúncios diretamente nos portais!</h3>
                    </center>
                    <br />
                </div>

                <div className="container">
                    <div className="integracao">
                        <div className="col-md-3 logo">
                            <img src={vivareal} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-3 logo">
                            <img src={olx} className=" img-fluid" alt="" />
                        </div>
                        <div className="col-md-3 logo">
                            <img src={zap} className=" img-fluid" alt="" />
                        </div>
                        <div className="col-md-3 logo">
                            <img src={quinto} className=" img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>

            <div className="bg-align">
                <h3 >Saiba o que nosso sistema pode fazer por sua imobiliária.</h3>
            </div>

            <section id="beneficios">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-7 align-bg">
                            <div className="caixa">
                                <div className="subcaixa">
                                    <img src={img1} className="mb-1 animate__animated animate__zoomIn animate__repeat-3	 animate__slower " width="80px" alt="" />
                                    <p><b>Controle</b></p>
                                    <p>Controle total da sua Imobiliária na palma de sua mão de onde e quando quiser.</p>
                                    <img src={img4} className="mb-1 animate__animated animate__zoomIn animate__repeat-3	 animate__slower" width="80px" alt="" />
                                    <b><p>Agilidade</p></b>
                                    <p>Assinatura eletrônica, agilizando seus contratos</p>

                                </div>
                                <div className="subcaixa">
                                    <img src={img3} className="mb-1 animate__animated animate__zoomIn  animate__repeat-3 animate__slower " width="80px" alt="" />
                                    <b><p>Praticidade</p></b>
                                    <p>Agilize vistorias com apenas um clique carregando diretamente as imagens</p>
                                    <img src={img2} className="mb-1 animate__animated animate__zoomIn  animate__repeat-3 animate__slower " width="80px" alt="" />
                                    <b><p>Segurança</p></b>
                                    <p>Fácil acompanhamento financeiro, através de boletos e pix.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={noteecel} className="img-fluid " alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="financeiro">
                <div className="container">
                    <center><h3 className="m-3" >Otimize a gestão financeira da sua imobiliária com nosso sistema!</h3> </center>
                    <div className="row">
                        <div className="col-md-8 txt">
                            <p>Você sabia que a gestão financeira é um dos pilares fundamentais para o sucesso de uma imobiliária? Manter as finanças organizadas, controlar receitas, despesas e comissões, além de garantir transações seguras e eficientes, é essencial para impulsionar o crescimento do seu negócio imobiliário.
                            </p>
                            <p>
                                Com o nosso sistema, você pode desfrutar de inúmeras vantagens que otimizarão a gestão financeira da sua imobiliária, proporcionando maior controle, agilidade e confiabilidade em todas as operações. <br></br> <br></br>
                                <b><i>Organização e Controle Total</i></b> <br></br>
                                <b><i>Gestão de Contratos Simplificada</i></b><br></br>
                                <b><i>Controle de Comissões Eficiente</i></b><br></br>
                                <b><i>Cobrança de Aluguel Simplificada</i></b> <br></br>
                                <b><i>Segurança e Confidencialidade</i></b> </p>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://giphy.com/embed/ww9Z3l8wl4szKyRIro" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
                            <h5>
                                "Descubra nosso incrível produto! Entre em contato agora mesmo e solicite um orçamento sem compromisso. Estamos ansiosos para atendê-lo e oferecer soluções personalizadas para suas necessidades. Não perca essa oportunidade, fale conosco hoje mesmo!"
                            </h5>
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

           
           

            <Footer />
            
        </>
        
    )

    

}
export default Home