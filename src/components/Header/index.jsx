import styles from  "./Header.module.css"
import img_logo_Infotec from "./imagens/logo.png"


function Header(){
    return (
        <div className={styles.header}>
                <div className={styles.header_img}>
                    <a  href="https://infotec.psi.br/" 
                        id="siteInfotec">
                    <img src={img_logo_Infotec} alt="logoInfotec"/>
                    </a>
                </div>
                <div className={styles.header_titulo}>
                    <a 
                        href="/proj_infotec_equipe"
                        id="home">
                        <h1>CONHEÇA NOSSO TIME</h1>
                    </a>
                    <p>Equipe Umbaúba-SE</p>
                </div>
        </div>
    );
}

export default Header;