import setinha from '../../assets/img/setinha.png'
import { useState } from "react"
import Icon from '../Icon/Icon'
export default function Flashs({
    question,
    answer,
    index, 
    respostas, 
    setRespostas
}) {
    const [status, setStatus] = useState({ stage: 'choice', result: {} })
    const { stage, result } = status;
    

    if (stage === 'choice') {
        return (
            <div className="cards closed">
                <div className={stage} onClick={() => setStatus({ ...status, stage: 'question' })}>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>

        )
    } else if (stage === 'question') {
        return (
            <div className="cards open">
                <div className={stage}>
                    <p>{question}</p>
                    <img src={setinha} onClick={() => setStatus({ ...status, stage: 'answer' })} alt="setinh" />
                </div>
            </div>
        )

    } else if (stage === 'answer') {

        const buttons = [
            { text: "Não lembrei", response: "erro" },
            { text: "Quase não lembrei", response: "duvida" },
            { text: "Zap!", response: "acerto" }]

        return (
            <div className="cards open">
                <div className={stage}>
                    <p>{answer}</p>
                    <span>
                        {buttons.map(({ text, response }) => {
                            return (
                                <div key={response}  className="botao"><button className={response}
                                    onClick={() => {
                                        setStatus({ stage: 'answered', result: response })
                                        addResponse(response)
                                    }}><p>{text}</p>
                                </button>
                                </div>
                            )
                        })}</span>
                </div>
            </div>
        )
    } else if (stage === 'answered') {

        return (
            <div className="cards closed">
                <div className={stage}>
                    <div className={result}>
                        <p>Pergunta {index + 1}</p>
                        <div><Icon result={result} /></div>
                    </div>
                </div>
            </div>

        )

    }

function addResponse (response){
    const novasRespostas = [...respostas, response] 
    setRespostas(novasRespostas)  
}

}