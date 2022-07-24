import './style.css'
import logopequeno from '../../assets/img/logo-pequeno.png'
import Cards from '../Cards/Cards'
import { useState } from 'react'
import Footer from '../Footer/Footer'


export default function Deck({ visible, setVisible, metazap, deckCards, setMetazap }) {
    const [respostas, setRespostas] = useState([])
 
    const total = deckCards.length

    return (
        <>
            <div className="header">
                <img src={logopequeno} alt="logoflash" />
                <p>ZapRecall</p>
            </div>
            <div className='deck'>
                <Cards respostas={respostas} setRespostas={setRespostas} deckCards={deckCards} />
            </div>
            <Footer respostas={respostas} total={total} visible={visible}
                setVisible={setVisible} metazap={metazap} setMetazap={setMetazap} />
        </>

    )



}