
import React, { useEffect } from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import bg from "../../assets/bg_gestao.jpg"
import './gestao.css';
import 'animate.css';
import usu from "../../assets/silhueta_usu2.png"
import automacao from "../../assets/automacao2.png"
import pratica from "../../assets/melhor-pratica2.png"
import doc from "../../assets/docs2.png"
import form from "../../assets/formulario2.png"
import contrato from "../../assets/contrato2.png"
import protecao from "../../assets/protecao2.png"
import contrato_fin from "../../assets/contrato_fin2.png"
import investimento from "../../assets/investimento2.png"
import lucro from "../../assets/lucro-financeiro2.png"
import forma from "../../assets/forma2.png"
import celular from "../../assets/celular2.png"
import atendente from "../../assets/atendente.jpg"



const Gestão = () => {

    useEffect(() => {

        
        const button = document.getElementById('button')
        const popup = document.querySelector('.popup-wrapper')
        const closeButton = document.querySelector('.popup-close')

        button.addEventListener('click', () => {
            popup.style.display = 'block'
        })

        closeButton.addEventListener('click', () => {
            popup.style.display = 'none'

        })

        const button2 = document.getElementById('button2')
        const popup2 = document.querySelector('.popup-wrapper2')
        const closeButton2 = document.querySelector('.popup-close2')

        button2.addEventListener('click', () => {
            popup2.style.display = 'block'
        })

        closeButton2.addEventListener('click', () => {
            popup2.style.display = 'none'

        })

        const button3 = document.getElementById('button3')
        const popup3 = document.querySelector('.popup-wrapper3')
        const closeButton3 = document.querySelector('.popup-close3')

        button3.addEventListener('click', () => {
            popup3.style.display = 'block'
        })

        closeButton3.addEventListener('click', () => {
            popup3.style.display = 'none'

        })

        const button4 = document.getElementById('button4')
        const popup4 = document.querySelector('.popup-wrapper4')
        const closeButton4 = document.querySelector('.popup-close4')

        button4.addEventListener('click', () => {
            popup4.style.display = 'block'
        })

        closeButton4.addEventListener('click', () => {
            popup4.style.display = 'none'

        })

        const button5 = document.getElementById('button5')
        const popup5 = document.querySelector('.popup-wrapper5')
        const closeButton5 = document.querySelector('.popup-close5')

        button5.addEventListener('click', () => {
            popup5.style.display = 'block'
        })

        closeButton5.addEventListener('click', () => {
            popup5.style.display = 'none'

        })

        const button6 = document.getElementById('button6')
        const popup6 = document.querySelector('.popup-wrapper6')
        const closeButton6 = document.querySelector('.popup-close6')

        button6.addEventListener('click', () => {
            popup6.style.display = 'block'
        })

        closeButton6.addEventListener('click', () => {
            popup6.style.display = 'none'

        })

        const button7 = document.getElementById('button7')
        const popup7 = document.querySelector('.popup-wrapper7')
        const closeButton7 = document.querySelector('.popup-close7')

        button7.addEventListener('click', () => {
            popup7.style.display = 'block'
        })

        closeButton7.addEventListener('click', () => {
            popup7.style.display = 'none'

        })

        const button8 = document.getElementById('button8')
        const popup8 = document.querySelector('.popup-wrapper8')
        const closeButton8 = document.querySelector('.popup-close8')

        button8.addEventListener('click', () => {
            popup8.style.display = 'block'
        })

        closeButton8.addEventListener('click', () => {
            popup8.style.display = 'none'

        })

        const button9 = document.getElementById('button9')
        const popup9 = document.querySelector('.popup-wrapper9')
        const closeButton9 = document.querySelector('.popup-close9')

        button9.addEventListener('click', () => {
            popup9.style.display = 'block'
        })

        closeButton9.addEventListener('click', () => {
            popup9.style.display = 'none'

        })

        const button10 = document.getElementById('button10')
        const popup10 = document.querySelector('.popup-wrapper10')
        const closeButton10 = document.querySelector('.popup-close10')

        button10.addEventListener('click', () => {
            popup10.style.display = 'block'
        })

        closeButton10.addEventListener('click', () => {
            popup10.style.display = 'none'

        })


        const button11 = document.getElementById('button11')
        const popup11 = document.querySelector('.popup-wrapper11')
        const closeButton11 = document.querySelector('.popup-close11')

        button11.addEventListener('click', () => {
            popup11.style.display = 'block'
        })

        closeButton11.addEventListener('click', () => {
            popup11.style.display = 'none'
        })


        const button12 = document.getElementById('button12')
        const popup12 = document.querySelector('.popup-wrapper12')
        const closeButton12 = document.querySelector('.popup-close12')

        button12.addEventListener('click', () => {
            popup12.style.display = 'block'
        })

        closeButton12.addEventListener('click', () => {
            popup12.style.display = 'none'

        })




    })





    return (
        <>
            <Header />

            <section id="header_gestao">

                <h2><span>Módulos</span> de gestão que sua <b>Imobiliária</b> precisa!</h2>
                <p>Funções que sua imobiliaria precisa e você não tem!</p>

            </section>

            <section id="modulos">
                <div className="modulogestao p-3">
                    
                        <div className="col-md-4 boxgestao ">
                            <img src={usu} width={"180px"} alt="" />
                            <h5>Tranquilidade para sua gestão de aluguéis</h5>

                            <button id="button">
                                Saiba +
                            </button>

                            <div class="popup-wrapper">
                                <div class="popup animate__animated animate__pulse">
                                    <div class="popup-close">x</div>
                                    <div class="popup-content">
                                        <img src={usu} width={"80px"} alt="" />
                                        <h5>Tranquilidade para sua gestão de aluguéis</h5>
                                        <p>Crie usuários com perfis limitados, configure o que cada usuário ou perfil pode acessar. Com ações são auditadas, você sabe o que foi feito, quando e por quem foi feito, trazendo mais segurança para sua imobiliária. </p>

                                        <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>
                                    

                                    </div>
                                </div>
                            </div>
                        </div>
                    

                   
                        <div className="col-md-4 boxgestao ">
                            <img src={automacao} width={"180px"} alt="" />
                            <h5>Recursos automatizados para locação</h5>
                            <button id='button2'>
                                Saiba +
                            </button>
                            <div class="popup-wrapper2">
                                <div class="popup2 animate__animated animate__pulse">
                                    <div class="popup-close2">x</div>
                                    <div class="popup-content">
                                        <img src={automacao} width={"80px"} alt="" />
                                        <h5>Recursos automatizados para locação</h5>
                                        <p>Potencialize a gestão da imobiliária em uma plataforma única e não perca mais nenhuma oportunidade de negócio.

                                        </p>

                                        <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                    </div>
                                </div>
                            </div>
                        </div>

                  

                    
                        <div className="col-md-4 boxgestao">
                            <img src={pratica} width={"180px"} alt="" />
                            <h5>Praticidade na hora de publicar seu imóvel</h5>
                            <button id='button3' >
                                Saiba +
                            </button >
                            <div class="popup-wrapper3">
                                <div class="popup3 animate__animated animate__pulse">
                                    <div class="popup-close3">x</div>
                                    <div class="popup-content">
                                        <img src={pratica} width={"80px"} alt="" />
                                        <h5>Praticidade na hora de publicar seu imóvel</h5>
                                        <p>Com apenas dois cliques você consegue habilitar ou desabilitar a publicação do seu imóvel. Além de definir o destaque dele e até mesmo para quais portais ele será exportado.

                                        </p>

                                        <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                    </div>
                                </div>
                            </div>

                        </div>

                  


                </div>
                <div className="modulogestao p-3">

                    
                        <div className="col-md-6 boxgestao">
                            <img src={form} width={"180px"} alt="" />
                            <h5>Cadastros completos e intuitivo </h5>
                            <button id='button4'>
                                Saiba +
                            </button>
                            <div class="popup-wrapper4">
                                <div class="popup4 animate__animated animate__pulse">
                                    <div class="popup-close4">x</div>
                                    <div class="popup-content">
                                        <img src={form} width={"80px"} alt="" />
                                        <h5>Cadastros completos e intuitivo </h5>
                                        <p>Cadastro completo e intuitivo de imóveis com funcionalidades pensadas para acelerar o dia a dia de imobiliárias e corretores de imóveis.
                                        Cadastre seus imóveis, agende o início e o fim da publicação no site, publique automaticamente os imóveis de destaque nas principais plataformas como Zap Imóveis, Viva Real, OLX.


                                        </p>

                                        <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                    </div>
                                </div>
                            </div>

                        </div>

               



                    
                        <div className="col-md-6 boxgestao">
                            <img src={doc} width={"180px"} alt="" />
                            <h5>Controle Documentos</h5>
                            <button id='button5'>
                                Saiba +
                            </button>
                            <div class="popup-wrapper5">
                                <div class="popup5 animate__animated animate__pulse">
                                    <div class="popup-close5">x</div>
                                    <div class="popup-content">
                                        <img src={doc} width={"80px"} alt="" />
                                        <h5>Controle Documentos</h5>
                                        <p>Centralize e organize todos os documentos dos imóveis e clientes de forma eficiente. Mantenha comprovantes, fotos de vistorias, laudos, pagamentos, contratos, fichas e formulários em um único local acessível e seguro. Simplifique sua gestão documental e facilite o acesso às informações essenciais.

                                        </p>

                                        <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                    </div>
                                </div>
                            </div>

                        </div>

                  


                </div>

            </section>


            <div className="img_gestao">
                <img src={bg} alt="banner" />
            </div>

            <section id="modulos">
                <div className="modulogestao p-3">
                    <div className="col-md-3 boxgestao">
                        <img src={protecao} width={"180px"} alt="" />
                        <h5>Acesso certo ao usuário certo</h5>

                        <button id="button6">
                            Saiba +
                        </button>

                        <div class="popup-wrapper6">
                            <div class="popup6 animate__animated animate__pulse">
                                <div class="popup-close6">x</div>
                                <div class="popup-content">
                                    <img src={protecao} width={"80px"} alt="" />
                                    <h5>Acesso certo ao usuário certo</h5>
                                    <p>Chega de dificuldade em atribuir acessos aos usuários que irão usar o sistema, no GECONWEB você pode facilmente delegar acesso aos usuários dando permissão somente às informações que ele precisa ter.
                                        
                                    </p>

                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 boxgestao">
                        <img src={contrato} width={"180px"} alt="" />
                        <h5>Praticidade com os contratos</h5>
                        <button id='button7'>
                            Saiba +
                        </button>
                        <div class="popup-wrapper7">
                            <div class="popup7 animate__animated animate__pulse">
                                <div class="popup-close7">x</div>
                                <div class="popup-content">
                                    <img src={contrato} width={"80px"} alt="" />
                                    <h5>Praticidade com os contratos</h5>
                                    <p>O GECONWEB possui preenchimento automático de campos ao criar um contrato novo, utilizando as informações do imóvel selecionado. Com apenas alguns cliques, você define métodos de cobrança, multas e juros.

                                    </p>
                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 boxgestao">
                        <img src={contrato_fin} width={"180px"} alt="" />
                        <h5>Administração de contratos</h5>
                        <button id='button8' >
                            Saiba +
                        </button >
                        <div class="popup-wrapper8">
                            <div class="popup8 animate__animated animate__pulse">
                                <div class="popup-close8">x</div>
                                <div class="popup-content">
                                    <img src={contrato_fin} width={"80px"} alt="" />
                                    <h5>Administração de contratos</h5>
                                    <p>Conte com funcionalidades específicas para a gestão de contratos de aluguel, compra e venda, com alertas, notificações, histórico e reajuste automático.

                                    </p>
                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 boxgestao">
                        <img src={celular} width={"180px"} alt="" />
                        <h5>Experiência Otimizada</h5>
                        <button id='button9' >
                            Saiba +
                        </button >
                        <div class="popup-wrapper9">
                            <div class="popup9 animate__animated animate__pulse">
                                <div class="popup-close9">x</div>
                                <div class="popup-content">
                                    <img src={celular} width={"80px"} alt="" />
                                    <h5>Experiência Otimizada</h5>
                                    <p>Cada dia que passa os usuários estão cada vez mais conectados com Smartphones e Tablets. Tenha um site para imobiliária que entregue uma experiência única independente do dispositivo escolhido para acessar.

                                    </p>
                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </section >



            <section id="modulos">
                <div className="modulogestao p-3">
                    <div className="col-md-4 boxgestao">
                        <img src={lucro} width={"180px"} alt="" />
                        <h5>Controle total dos seus processos financeiros</h5>

                        <button id="button10">
                            Saiba +
                        </button>

                        <div class="popup-wrapper10">
                            <div class="popup10 animate__animated animate__pulse">
                                <div class="popup-close10">x</div>
                                <div class="popup-content">
                                    <img src={lucro} width={"80px"} alt="" />
                                    <h5>Controle total dos seus processos financeiros</h5>
                                    <p>Contando com relatórios e estatísticas financeiras diferentes, você consegue manter o controle total de forma prática e ágil, dando a você, maior visibilidade sobre os seus processos. </p>

                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 boxgestao">
                        <img src={investimento} width={"180px"} alt="" />
                        <h5>Controle de comissões integrado o financeiro

                        </h5>
                        <button id='button11'>
                            Saiba +
                        </button>
                        <div class="popup-wrapper11">
                            <div class="popup11 animate__animated animate__pulse">
                                <div class="popup-close11">x</div>
                                <div class="popup-content">
                                    <img src={investimento} width={"80px"} alt="" />
                                    <h5>Controle de comissões integrado o financeiro</h5>
                                    <p>Controle os recebimentos de comissões e pagamentos de seus corretores com integração ao módulo financeiro. </p>

                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 boxgestao">
                        <img src={forma} width={"180px"} alt="" />
                        <h5>Formulários próprios de controle</h5>
                        <button id='button12' >
                            Saiba +
                        </button >
                        <div class="popup-wrapper12">
                            <div class="popup12 animate__animated animate__pulse">
                                <div class="popup-close12">x</div>
                                <div class="popup-content">
                                    <img src={forma} width={"80px"} alt="" />
                                    <h5>Formulários próprios de controle</h5>
                                    <p>Evite falhas de operação, centralize os formulários gerenciais diretamente na plataforma e mantenha suas informações, controles e timbrados em um só local.</p>

                                    <button><a href="https://geconweb.paginas.site/leadapresentacao">Solicite um orçamento</a></button>
                                        <button><a href="http://">Fale com um atendente</a></button>

                                </div>
                            </div>
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
                                        <a href="https://">Faça seu orçamento</a>
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
export default Gestão