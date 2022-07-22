import Icon from "../Icon"
import "./footer.css"
import FooterResult from "../FooterResult/FooterResult"
export default function Footer({ respostas, total }) {

    if (respostas.length >= 0 && respostas.length < total) {
        return (
            <div className="footer">
                <div className="completed">
                    <p>{respostas.length}/{total} CONCLUÍDOS</p>
                    <span>{respostas.map((result, index) => <Icon key={index} result={result} />)}</span>

                </div>
            </div>
        )
    }
    if (respostas.length === total) {
        return (
            <FooterResult respostas={respostas} />
        )
    }

}