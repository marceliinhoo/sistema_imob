
import React, { useEffect, useState } from 'react';
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
import Popup from '../../components/Popup';



const Gestão = () => {

    const [selectedInfo, setSelectedInfo] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = (info) => {
        setSelectedInfo(info);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const buttonsInfo = [
        {
            text: 'Solicite um orçamento',
            url: 'https://geconweb.paginas.site/leadapresentacao',
        },
        {
            text: 'Fale com um atendente',
            url: 'http://',
        },
    ];


    const buttonInfos = [
        <>
            <img src={usu} width={"80px"} alt="" />
            <h5>Tranquilidade para sua gestão de aluguéis</h5>
            <p>Crie usuários com perfis limitados, configure o que cada usuário ou perfil pode acessar. Com ações são auditadas, você sabe o que foi feito, quando e por quem foi feito, trazendo mais segurança para sua imobiliária.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos2 = [
        <>
            <img src={automacao} width={"80px"} alt="" />
            <h5>Recursos automatizados para locação</h5>
            <p>Potencialize a gestão da imobiliária em uma plataforma única e não perca mais nenhuma oportunidade de negócio.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos3 = [
        <>
            <img src={pratica} width={"80px"} alt="" />
            <h5>Praticidade na hora de publicar seu imóvel</h5>
            <p>Com apenas dois cliques você consegue habilitar ou desabilitar a publicação do seu imóvel. Além de definir o destaque dele e até mesmo para quais portais ele será exportado.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos4 = [
        <>
            <img src={form} width={"80px"} alt="" />
            <h5>Cadastros completos e intuitivo</h5>
            <p>Cadastro completo e intuitivo de imóveis com funcionalidades pensadas para acelerar o dia a dia de imobiliárias e corretores de imóveis.
                Cadastre seus imóveis, agende o início e o fim da publicação no site, publique automaticamente os imóveis de destaque nas principais plataformas como Zap Imóveis, Viva Real, OLX.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos5 = [
        <>
            <img src={doc} width={"80px"} alt="" />
            <h5>Controle Documentos</h5>
            <p>Centralize e organize todos os documentos dos imóveis e clientes de forma eficiente. Mantenha comprovantes, fotos de vistorias, laudos, pagamentos, contratos, fichas e formulários em um único local acessível e seguro. Simplifique sua gestão documental e facilite o acesso às informações essenciais.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos6 = [
        <>
            <img src={protecao} width={"80px"} alt="" />
            <h5>Acesso certo ao usuário certo</h5>
            <p>Chega de dificuldade em atribuir acessos aos usuários que irão usar o sistema, no GECONWEB você pode facilmente delegar acesso aos usuários dando permissão somente às informações que ele precisa ter.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos7 = [
        <>
            <img src={contrato} width={"80px"} alt="" />
            <h5>Praticidade com os contratos</h5>
            <p>O GECONWEB possui preenchimento automático de campos ao criar um contrato novo, utilizando as informações do imóvel selecionado. Com apenas alguns cliques, você define métodos de cobrança, multas e juros.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos8 = [
        <>
            <img src={contrato_fin} width={"80px"} alt="" />
            <h5>Administração de contratos</h5>
            <p>Conte com funcionalidades específicas para a gestão de contratos de aluguel, compra e venda, com alertas, notificações, histórico e reajuste automático.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos9 = [
        <>
            <img src={celular} width={"80px"} alt="" />
            <h5>Experiência Otimizada</h5>
            <p>Cada dia que passa os usuários estão cada vez mais conectados com Smartphones e Tablets. Tenha um site para imobiliária que entregue uma experiência única independente do dispositivo escolhido para acessar.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos10 = [
        <>
            <img src={lucro} width={"80px"} alt="" />
            <h5>Controle total dos seus processos financeiros</h5>
            <p>Contando com relatórios e estatísticas financeiras diferentes, você consegue manter o controle total de forma prática e ágil, dando a você, maior visibilidade sobre os seus processos.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos11 = [
        <>
            <img src={investimento} width={"80px"} alt="" />
            <h5>Controle de comissões integrado o financeiro</h5>
            <p>Controle os recebimentos de comissões e pagamentos de seus corretores com integração ao módulo financeiro.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];
    const buttonInfos12 = [
        <>
            <img src={forma} width={"80px"} alt="" />
            <h5>Recursos automatizados para locação</h5>
            <p>Evite falhas de operação, centralize os formulários gerenciais diretamente na plataforma e mantenha suas informações, controles e timbrados em um só local.</p>
            {buttonsInfo.map((button, index) => (
                <button key={index}>
                    <a href={button.url}>{button.text}</a>
                </button>
            ))}
        </>
    ];

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
                        <img src={usu} width={"150px"} alt="" />
                        <h5>Tranquilidade para sua gestão de aluguéis</h5>
                        <div className="button-container">
                            {buttonInfos.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-4 boxgestao ">
                        <img src={automacao} width={"150px"} alt="" />
                        <h5>Recursos automatizados para locação</h5>
                        <div className="button-container">
                            {buttonInfos2.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-4 boxgestao">
                        <img src={pratica} width={"150px"} alt="" />
                        <h5>Praticidade na hora de publicar seu imóvel</h5>
                        <div className="button-container">
                            {buttonInfos3.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>
                </div>

                <div className="modulogestao p-3">
                    <div className="col-md-6 boxgestao">
                        <img src={form} width={"150px"} alt="" />
                        <h5>Cadastros completos e intuitivo </h5>
                        <div className="button-container">
                            {buttonInfos4.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-6 boxgestao">
                        <img src={doc} width={"150px"} alt="" />
                        <h5>Controle Documentos</h5>
                        <div className="button-container">
                            {buttonInfos5.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>
                </div>

            </section>


            <div className="img_gestao">
                <img src={bg} alt="banner" />
            </div>

            <section id="modulos">
                <div className="modulogestao p-3">
                    <div className="col-md-3 boxgestao">
                        <img src={protecao} width={"150px"} alt="" />
                        <h5>Acesso certo ao usuário certo</h5>

                        <div className="button-container">
                            {buttonInfos6.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-3 boxgestao">
                        <img src={contrato} width={"150px"} alt="" />
                        <h5>Praticidade com os contratos</h5>
                        <div className="button-container">
                            {buttonInfos7.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-3 boxgestao">
                        <img src={contrato_fin} width={"150px"} alt="" />
                        <h5>Administração de contratos</h5>
                        <div className="button-container">
                            {buttonInfos8.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-3 boxgestao">
                        <img src={celular} width={"150px"} alt="" />
                        <h5>Experiência Otimizada</h5>
                        <div className="button-container">
                            {buttonInfos9.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>
                </div>
            </section >

            <section id="modulos">
                <div className="modulogestao p-3">
                    <div className="col-md-4 boxgestao">
                        <img src={lucro} width={"150px"} alt="" />
                        <h5>Controle total dos seus processos financeiros</h5>
                        <div className="button-container">
                            {buttonInfos10.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-4 boxgestao">
                        <img src={investimento} width={"150px"} alt="" />
                        <h5>Controle de comissões integrado o financeiro</h5>
                        <div className="button-container">
                            {buttonInfos11.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
                    </div>

                    <div className="col-md-4 boxgestao">
                        <img src={forma} width={"150px"} alt="" />
                        <h5>Formulários próprios de controle</h5>
                        <div className="button-container">
                            {buttonInfos12.map((info, index) => (
                                <button key={index} onClick={() => openPopup(info)}>
                                    Saiba +
                                </button>
                            ))}
                        </div>
                        {isPopupOpen && <Popup info={selectedInfo} onClose={closePopup} />}
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