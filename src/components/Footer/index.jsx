import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import  styles from "./Footer.module.css"

function Footer(){
    return (
        <di className={styles.footer}>
            <div className={styles.centro}>
                <div>
                    <h4>E-MAIL</h4>
                    <p>atendimento@infotec.psi.br</p>
                </div>
                <div>
                    <h4>CONTATOS ARACAJU</h4>
                    <ul>
                        <li>(79) 99936-6179</li>
                    </ul>

                </div>
                <div>
                    <h4>OUTRAS REGIÕES</h4>
                    <ul>
                        <li>(79) 99846-3699</li>
                    </ul>

                </div>
                <div>
                    <h4>REDES SOCIAIS</h4>
                    <div className={styles.socialmidia}>
                        <a href="https://www.instagram.com/infotecprovedor/" 
                                id="instagram" 
                                className={styles.footerlink}>  
                                <FaFacebook/>
                            </a>
                            <a href="https://www.facebook.com/people/infotecprovedor/100063717576742/" 
                                id="facebook" 
                                className={styles.footerlink}>  
                                <FiInstagram/>
                            </a>
                            <a href="https://www.facebook.com/people/infotecprovedor/100063717576742/" 
                                id="whatsApp" 
                                className={styles.footerlink}>  
                                <BsWhatsapp/>
                            </a>
                    </div>
                </div>
            </div>
            <div className={styles.final}>
                <p>&copy; 2024 Infotec - Todos os direitos reservados.</p>
                <p>&#8482; Software Developer - Anderson Costa </p>
            </div>
        </di>
    );
}


export default Footer;