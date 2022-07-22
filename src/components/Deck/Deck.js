import { useState } from "react"
import Icon from '../Icon'
import './style.css'
import logopequeno from '../../assets/img/logo-pequeno.png'
import setinha from '../../assets/img/setinha.png'

function Flashs({
    question,
    answer,
    index
}) {
    const [status, setStatus] = useState({ stage: 'choice', result: {} })
    const { stage, result } = status;
    const [respostas, setRespostas] = useState([])

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
                                <div className="botao"><button key={response} className={response}
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

function Flashcards() {
       
    const cards = [
        {
            question: 'O que é JSX',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __ ',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __ ',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX ',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __ ',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: ' Usamos props para __',
            answer: 'passar diferentes informações para componentes '
        }, {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }

    ]
    
    return (
        <>
            {cards.sort(() => Math.random() - 0.5).map((card, index) => 
                <Flashs key={index} question={card.question} answer={card.answer}
                    index={index}  />)}

        </>
    )
}

export default function Deck() {

    

    return (
        <>
            <div className="header">
                <img src={logopequeno} alt="logoflash" />
                <p>ZapRecall</p>
            </div>
            <div className='deck'>
                <Flashcards />
            </div>

        </>

    )



}