import Flashs from '../Flashs/Flashs'
import { useState } from 'react'
import Footer from '../Footer/Footer'

export default function Cards() {

    const arrayCards = [
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
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }

    ]
    const [respostas, setRespostas] = useState([])
    const total = arrayCards.length
    console.log(total)
    return (
        <>
            {arrayCards.sort(() => Math.random() - 0.5).map((card, index) =>
                <Flashs respostas={respostas} setRespostas={setRespostas} key={index} question={card.question}
                    answer={card.answer} index={index} />)}
            <Footer respostas={respostas} total={total} />
        </>
    )
}