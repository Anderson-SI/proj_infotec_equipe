import img_notfound from "./imagem/Imagen-404.png";
import styles from "./Error.module.css"

function Error () {
    return (
        <div className={styles.error}>
            <img src={img_notfound} alt="img_notfound"/> 
        </div>
    );
}

export default Error;