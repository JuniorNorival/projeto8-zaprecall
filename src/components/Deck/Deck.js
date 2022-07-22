import './style.css'
import logopequeno from '../../assets/img/logo-pequeno.png'
import Cards from '../Cards/Cards'
import { useState } from 'react'
import Footer from '../Footer/Footer'


export default function Deck({visible, setVisible}) {
    const [respostas, setRespostas] = useState([])
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
   
    const total = arrayCards.length
    
    return (
        <>
            <div className="header">
                <img src={logopequeno} alt="logoflash" />
                <p>ZapRecall</p>
            </div>
            <div className='deck'>
                <Cards respostas={respostas} setRespostas={setRespostas} arrayCards = {arrayCards}/>
            </div>
            <Footer respostas={respostas} total = {total} visible={visible} setVisible={setVisible} />
        </>

    )



}