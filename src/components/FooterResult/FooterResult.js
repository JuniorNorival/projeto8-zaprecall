import './style.css'
import party from "../../assets/img/party"
export default function FooterResult() {
    return (
        <div className="footerResult">
            <div className="completed">
                <p>{respostas.length}/{total} CONCLUÍDOS</p>
                <span>{respostas.map((result, index) => <Icon key={index} result={result} />)}</span>

            </div>
        </div>
    )
}