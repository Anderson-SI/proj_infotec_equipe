import img_notfound from "./imagem/Imagen-404.png";
import styles from "./Error.module.css"

function Error () {
    return (
        <>
        <div className={styles.error}>
            <a 
                href="/proj_info_equipe"
                id="home">
                <span>Clique aqui para voltar para página principal!</span>
            </a>
            <img src={img_notfound} alt="img_notfound"/> 
        </div>
        </>
    );
}

export default Error;