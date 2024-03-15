
import Card from "../Card";
import styles from "./Arvore.module.css";
import Dados from "../../Dados/dados.json"

const arrayAdm = Dados.filter((num) => num.cargo === "administrativo");
const arrayApoio = Dados.filter((num) => num.cargo === "apoio");
const arraySuporte = Dados.filter((num) => num.cargo === "suporte");
const arrayInfra = Dados.filter((num) => num.cargo === "infraestrutura");
const arrayTecnico = Dados.filter((num) => num.cargo === "tecnico");

function Arvore ( ) {
    return (
        <div className={styles.arvore}>
            <div className={styles.frase}>
                <p>O talento vence jogos, mas só o trabalho em equipe ganha campeonatos!</p>
                <h5>"Michael Jordan"</h5>
            </div>
            <div className={styles.areas}>
                <h2>Atendimento, Comercial e Financeiro</h2>
                {arrayAdm.map ((dados) => 
                <Card 
                    nome={dados.nome} 
                    foto={dados.foto} 
                    cargo={dados.funcao} 
                    unidade={dados.unidade} 
                    face={dados.facebook} 
                    ins={dados.instagram}
                    lin={dados.linkedin}
                /> )}
            </div>
            <div className={styles.areas}>
                <h2>Infraestrutura</h2>
                {arrayInfra.map ((dados) => 
                <Card 
                    nome={dados.nome} 
                    foto={dados.foto} 
                    cargo={dados.funcao} 
                    unidade={dados.unidade} 
                    face={dados.facebook} 
                    ins={dados.instagram}
                    lin={dados.linkedin}
                /> )}

            </div>
            <div className={styles.areas}>
                <h2>Suporte Técnico Noc</h2>
                {arraySuporte.map ((dados) => 
                <Card 
                    nome={dados.nome} 
                    foto={dados.foto} 
                    cargo={dados.funcao} 
                    unidade={dados.unidade} 
                    face={dados.facebook} 
                    ins={dados.instagram}
                    lin={dados.linkedin}
                /> )}

            </div>
            <div className={styles.areas}>
                <h2>Técnicos</h2>
                {arrayTecnico.map ((dados) => 
                <Card 
                    nome={dados.nome} 
                    foto={dados.foto} 
                    cargo={dados.funcao} 
                    unidade={dados.unidade} 
                    face={dados.facebook} 
                    ins={dados.instagram}
                    lin={dados.linkedin}
                /> )}

            </div>
            <div className={styles.areas}>
                <h2>Apoio</h2>
                {arrayApoio.map ((dados) => 
                <Card 
                    nome={dados.nome} 
                    foto={dados.foto} 
                    cargo={dados.funcao} 
                    unidade={dados.unidade} 
                    face={dados.facebook} 
                    ins={dados.instagram}
                    lin={dados.linkedin}
                /> )}

            </div>
        </div>
    );
}

export default Arvore;