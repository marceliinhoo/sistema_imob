import React from 'react';
import './footer.css';
import facebook from "../../assets/facebook.png"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import logofooter from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {


    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <footer>
                <div className="col-md-3">
                <img src={logofooter}   width={"70%"}alt="" />

                </div>
                <div className="col-md-6 ">
                    <br />
                    <p >©Copyright {currentYear} Grupo TC do Brasil.
                Política de Privacidade e Termos de Uso <Link to="/politica">Clique aqui</Link></p>
                
                </div>
                <div className="col-md-3 redessociais">
                    <a href="http://"><img src={whatsapp} width={"50%"} alt="" /></a>
                    <a href="http://"><img src={instagram}  width={"50%"} alt="" /></a>
                    <a href="http://"><img src={facebook}   width={"50%"}alt="" /></a>
                
                
                
                

                </div>
            </footer>

        </>
    )

}
export default Footer