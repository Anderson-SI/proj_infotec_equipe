import styles from "./Card.module.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


import { Tooltip } from 'react-tooltip';

function Card ({nome, foto, cargo, unidade, face, ins, lin }) {
    return (
        <section className={styles.card}>
            <div className={styles.perfil}>
                <img 
                    src={foto} 
                    alt={nome}
                    data-tooltip-id="meu-tooltip"
                    data-tooltip-content={nome}
                    />
                <h3>{nome}</h3>
                <h4>{cargo}</h4>
                <h4>{unidade}</h4>
                <Tooltip
                    id="meu-tooltip"
                    style={{ backgroundColor: "#000", 
                             color: "#fff",
                             fontSize: "12px",
                             padding: "5px",
                             margin: "0px",
                             pointerEvents: "none",
                             }}
                />

            </div>
            <div className={styles.socialmidia}>
                <a  href={face} 
                    id="facebook" 
                    className={styles.footerlink}
                    style={{ background: "#4267b3"}}
                    >  
                    <CiFacebook/>
                </a>
                <a  href={ins} 
                    id="instagram" 
                    className={styles.footerlink}
                    style={{ background: "linear-gradient(#7f37c9, #ff2992, #ff9807)"}}
                    >  
                    <CiInstagram/>
                </a>
                <a  href={lin}  
                    id="linkedin" 
                    className={styles.footerlink}
                    style={{ background: "#0E76A8"}}
                    >  
                    <CiLinkedin/>
                </a>
            </div>
        </section>
        
    );
}


export default Card;