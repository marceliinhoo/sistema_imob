import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './financeiro.css';
import Fin1 from "../../assets/fin1.jpg"
import Celulares from "../../assets/celulares-fin.jpg"
import Financeiros from "../../assets/financeiro.png"
import Extrato from "../../assets/extrato.jpg"
import Fin2 from "../../assets/fin2.jpg"
import Fin3 from "../../assets/fin3.jpg"
import Pix from "../../assets/pix.png"
import atendente from "../../assets/atendente.jpg"





const Financeiro = () => {
    return (
        <>
            <Header />



            <section id="financeiro">

                <section id="header_canais">

                    <h2>Tenha um <span>Raio-x</span> de seu departamento <b>financeiro!</b> </h2>
                    <p>Com nosso sistema para gestão de venda de imóveis, você ganha praticidade, eficiência e poder de decisão para sua rotina comercial.
                    </p>

                </section>

                
                <section id="celulares">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 aling-txt">
                                <p>Descubra uma nova forma de prosperar com nossa gestão imobiliária inteligente. Maximize lucros, reduza custos e tenha controle total de suas propriedades. Simplifique. Rentabilize. Cresça.</p>
                            </div>
                            <div className="col-md-6 ">
                                <center><img src={Celulares} className="img-fluid" width={"250px"} alt="" /></center>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container box-container">
                    <div className="row">
                        <div className="col-md-5 aling-txt">
                            <p> <span>CONTROLE CADA CENTAVO</span><br /><br />
                                Através do Fechamento de Caixa e da Conciliação Bancária você sabe exatamente de onde vem e para onde vai o seu dinheiro.<br />
                                Assim, você evita furos no setor financeiro e garante a saúde financeira da sua imobiliária, além de economizar tempo da sua equipe.</p>

                            <p><span>SEM SURPRESAS DESAGRADÁVEIS </span><br /><br />

                                Com o Fluxo de Caixa (Diário e Mensal) você terá uma visão em tempo real de todos os lançamentos a receber e a pagar da sua imobiliária. Mantenha seu fluxo de caixa sempre equilibrado e garanta a sobrevivência da sua imobiliária.
                            </p>

                        </div>
                        <div className="col-md-7 aling-txt">
                            <img src={Fin1} className="img-fluid" width={"400px"} alt="" />

                        </div>
                    </div>

                    <div className="aling-txt">
                        <p>
                            <span>EXTRATO POR TIPO DE CONTA</span><br /><br />

                            Com o Extrato por tipo de conta você conseguirá entender a situação financeira da sua imobiliária, saber se está lucrativa ou com prejuízo. Essa é uma maneira da nossa plataforma ajudá-lo a reduzir custos, corrigir erros e aumentar margens de lucro. O Demonstrativo de Resultado de Exercício é um resumo da situação financeira da sua imobiliária em um determinado período de tempo (podendo ser mensal, trimestral, semestral ou anual). Isso tudo é feito de forma automática, cruzando as análises de receitas, custos e despesas operacionais, não operacionais e transitórias*, conforme as movimentações financeiras que foram lançadas no sistema.

                        </p>
                    </div>

                    <div className="row ">
                        <div className="aling-img mt-4">
                            <div className="col-md-4 hover-img">
                                <center><img src={Extrato} className="img-fluid hover-img" width={"90%"} alt="" /></center>
                                <center><p>Painel extrato</p></center>
                            </div>
                            <div className="col-md-4 hover-img">
                                <center><img src={Fin2} className="img-fluid hover-img" width={"90%"} alt="" /></center>
                                <center><p>Painel pagar e receber</p></center>
                            </div>
                            <div className="col-md-4 hover-img ">
                                <center><img src={Fin3} className="img-fluid hover-img" width={"90%"} alt="" /></center>
                                <center><p>Painel entradas e saídas</p></center>
                            </div>
                        </div>


                    </div>

                    <section id="finan">
                        <div className="row">
                            <div className="col-md-5 aling-txt">
                                <p><span>Integração bancaria</span> <br /><br />
                                    Integração com baixa automática, agilize a cobrança do seu setor financeiro e para o cliente na hora de pagar, apresentando as opções de pagamento via Boleto, Carne via PIX e agilizando as baixas e o controle de conferencia de pagamento, além de poder agilizar as cobranças encaminhando lembretes por email ou Whatsapp. </p>
                                <img src={Pix} className="img-fluid" width={"70%"} alt="" />
                            </div>
                            <div className="col-md-7 aling-txt2">
                                <span>UM SISTEMA FINANCEIRO COMPLETO</span>
                                <img src={Financeiros} className="img-fluid" width={"70%"} alt="" />
                            </div>

                        </div>
                    </section>

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
            <Footer />



        </>
    )

}
export default Financeiro