import styles from  "./Header.module.css"
import img_logo_Infotec from "./imagens/logo.png"


function Header(){
    return (
        <div>
            <div className={styles.header}>
                <img src={img_logo_Infotec} alt="logo infotec"/>
                <h1>CONHEÇA NOSSO TIME</h1>
            </div>
        </div>
    );
}

export default Header;