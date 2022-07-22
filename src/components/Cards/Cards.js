import Flashs from '../Flashs/Flashs'
import { useState } from 'react'
import Footer from '../Footer/Footer'

export default function Cards({respostas, setRespostas, arrayCards}) {

  
    console.log (respostas)
    return (
        <>
            {arrayCards.sort(() => Math.random() - 0.5).map((card, index) =>
                <Flashs respostas={respostas} setRespostas={setRespostas} key={index} question={card.question}
                    answer={card.answer} index={index} />)}
           
        </>
    )
}