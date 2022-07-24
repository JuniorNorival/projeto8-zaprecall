import { useState } from 'react'
import Deck from '../Deck/Deck'
import logo from '../../assets/img/logo.png'
import './style.css'
import { allDecks } from '../All-Decks/allDecks'

export default function Start() {
    const [visible, setVisible] = useState(true)
    const [metazap, setMetazap] = useState(0)
    const [deckselect, setDeckselect] = useState('')
    const [deckCards, setDeckCards] = useState({})

    const getInputValue = (event) => {

        const userValue = event.target.value;
        setMetazap(userValue)

    };

    const getSelectValue = (event) => {
      
        const selectValue = event.target.value;
        setDeckselect(selectValue)

    };
   
    const deck = allDecks(deckselect)
   
   
    if (visible) {
       
        if (metazap >= 1 && metazap <= 8 && deckselect !== '') {
            
            return (
                <div className="start" >
                    <div className="logo-start">
                        <img src={logo} alt="logoinicio" />
                        <h1>ZapRecall</h1>
                        <input type="text" placeholder="Escolha sua meta de Zaps..."
                            onChange={getInputValue} />
                        <h3>Escolha seu Deck</h3>
                        <select onChange={getSelectValue}>
                            <option value="">Escolha seu Deck</option>
                            <option value="REACT">REACT</option>
                            <option value="NARUTO">NARUTO</option>
                        </select>

                        <button className='botaoliberado' onClick={() => 
                            {setVisible(false)
                            setDeckCards(()=>deck.cards.sort(() => Math.random() - 0.5))}}>Iniciar Recall!</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="start" >
                    <div className="logo-start">
                        <img src={logo} alt="logoinicio" />
                        <h1>ZapRecall</h1>
                        <input type="text" placeholder="Escolha sua meta de Zaps..."
                            onChange={getInputValue} />
                        <h3>Escolha seu Deck</h3>
                        <select onChange={getSelectValue}>
                            <option value="">Escolha seu Deck</option>
                            <option value="REACT">REACT</option>
                            <option value="NARUTO">NARUTO</option>
                        </select>
                        <button onClick={()=> alert("Defina sua Meta de Zaps (Entre 1 e 8)\ne Escolha seu Deck")} 
                        className='botaofechado'>Iniciar Recall!</button>
                    </div>
                </div>
            )
        }
       
    } else {
        
        return (
            <div className='container'>
                <Deck deckCards={deckCards} visible={visible} setVisible={setVisible}
                    metazap={metazap} setMetazap={setMetazap} /></div>
        )


    }


}





