import React from 'react';
import './formulario.css';


const Formulario = () => {
    return (
        <>
            <div className="form_contato" >
                

                <form action="https://formsubmit.co/contato@geconweb.com.br" method="POST"  >
                    <div className="form1" >
                        <input type="text" name='name' placeholder=" Digite seu nome"/>

                        <input type="email" name='email' placeholder=" Digite seu email"/>

                        <input type="text" name="assunto" placeholder=" Assunto" />

                    </div>

                    <div className="form2 ">
                         <textarea cols="30" rows="10" name='menssage' placeholder=" Deixe aqui sua mensagem"/>
                    </div>
                    <div className='divi'>
                        <input type="hidden" name="_next" value="https://www.geconweb.com.br" />
                        <button type="submit" value="Enviar"  >Enviar</button>


                    </div>
                </form>


            </div>

        </>
    )

}
export default Formulario