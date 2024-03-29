import Card from "../Card";
import styles from "./Arvore.module.css";
import Dados from "../../Dados/dados.json";

function Arvore ( ) {
    return (
        <div className={styles.arvore}>
            <div className={styles.frase}>
                <p>O talento vence jogos, mas só o trabalho em equipe ganha campeonatos!</p>
                <h5>"Michael Jordan"</h5>
            </div>

            <div className={styles.areas}>
                <h2>Atendimento - (Comercial e Financeiro)</h2>
                {   Dados
                    .filter((num) => num.cargo === "administrativo")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}
            </div>
            <div className={styles.areas}>
                <h2>Infraestrutura - (Planejamento, Projeto e Implementação)</h2>
                {   Dados
                    .filter((num) => num.cargo === "infraestrutura")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}
            </div>
            <div className={styles.areas}>
                <h2>Noc - (Monitoramento da Rede, Ativação Lógica e Suporte ao Cliente)</h2>
                {   Dados
                    .filter((num) => num.cargo === "suporte")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}
            </div>
            <div className={styles.areas}>
                <h2>Técnicos de Campo - (Ativação e Manutenção)</h2>
                {   Dados
                    .filter((num) => num.cargo === "tecnico")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}

            </div>
            <div className={styles.areas}>
                <h2>Almoxarifado - (Controle e distribuição de Material)</h2>
                {   Dados
                    .filter((num) => num.cargo === "almoxarifado")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}

            </div>
            <div className={styles.areas}>
                <h2>Apoio</h2>
                {   Dados
                    .filter((num) => num.cargo === "apoio")
                    .map (({nome, foto, funcao, unidade, facebook, instagram, linkedin}) => 
                <Card 
                    nome={nome} 
                    foto={foto} 
                    cargo={funcao} 
                    unidade={unidade} 
                    face={facebook} 
                    ins={instagram}
                    lin={linkedin}
                /> 
                )}

            </div>
        </div>
    );
}

export default Arvore;