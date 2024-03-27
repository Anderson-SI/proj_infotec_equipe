import styles from "./Card.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


function Card ({nome, foto, cargo, unidade, face, ins, lin }) {
    return (
        <section className={styles.card}>
            <div className={styles.perfil}>
                <img 
                    src={foto} 
                    alt={nome}
                    />
                <h3>{nome}</h3>
                <h4>{cargo}</h4>
                <h4>{unidade}</h4>
            </div>
            <div className={styles.socialmidia}>
                <a  href={face} 
                    id="facebook" 
                    className={styles.footerlink}>  
                    <IoLogoFacebook/>
                </a>
                <a  href={ins} 
                    id="istagram" 
                    className={styles.footerlink}>  
                    <IoLogoInstagram/>
                </a>
                <a  href={lin}  
                    id="linkedin" 
                    className={styles.footerlink}>  
                    <IoLogoLinkedin/>
                </a>
            </div>
        </section>
        
    );
}


export default Card;