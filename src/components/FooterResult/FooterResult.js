import './style.css'
import party from "../../assets/img/party.png"
import sad from "../../assets/img/sad.png"
import Icon from "../Icon"

export default function FooterResult({ respostas, total, visible, setVisible }) {
    if (respostas.includes('erro')) {
        return (
            <div className="footerResult">
                <h1>
                    <img src={sad} alt="sad" />
                    Putz...
                </h1>
                <p>Ainda faltam alguns...<br />
                    Mas não desanime!</p>
                <div className="completed">
                    <p>{respostas.length}/{total} CONCLUÍDOS</p>
                    <span>{respostas.map((result, index) => <Icon key={index} result={result} />)}</span>
                </div>
                <button  onClick={()=> setVisible(true)} >REINICIAR RECALL</button>
            </div>
        )

    }
    return (
        <div className="footerResult">
            <h1>
                    <img src={party} alt="sad" />
                    Parabéns
                </h1>
                <p>Você não esqueceu de <br /> nenhum flashcard!</p>
            <div className="completed">
                <p>{respostas.length}/{total} CONCLUÍDOS</p>
                <span>{respostas.map((result, index) => <Icon key={index} result={result} />)}</span>
            </div>
            <button onClick={()=> setVisible(true)} >REINICIAR RECALL</button>
        </div>
    )
}