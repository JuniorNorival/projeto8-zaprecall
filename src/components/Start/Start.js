import { useState } from 'react'
import Deck from '../Deck/Deck'
import logo from '../../assets/img/logo.png'
import './style.css'


export default function Start() {
    const [visible, setVisible] = useState(true)
    const [metazap, setMetazap] = useState(0)
    const [deckselect, setDeckselect] = useState('REACT')

    const getInputValue = (event) => {

        const userValue = event.target.value;
        setMetazap(userValue)

    };

    const getSelectValue = (event) => {

        const selectValue = event.target.value;
        setDeckselect(selectValue)

    };

    if (visible) {
        if (metazap >= 1 && metazap <= 8) {
            return (
                <div className="start" >
                    <div className="logo-start">
                        <img src={logo} alt="logoinicio" />
                        <h1>ZapRecall</h1>
                        <input type="text" placeholder="Escolha sua meta de Zaps..."
                            onChange={getInputValue} />
                        <select onChange={getSelectValue}>
                            <option value="REACT">REACT</option>
                            <option value="NARUTO">NARUTO</option>
                        </select>

                        <button className='botaoliberado' onClick={() => setVisible(false)}>Iniciar Recall!</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="start" >
                    <div className="logo-start">
                        <img src={logo} alt="logoinicio" />
                        <h1>ZapRecall</h1>
                        <input type="text" placeholder="Escolha sua meta de Zaps..." onChange={getInputValue} />
                        <button className='botaofechado'>Iniciar Recall!</button>
                    </div>
                </div>
            )
        }

    } else {
        return (
            <div className='container'><Deck deckselect={deckselect} visible={visible} setVisible={setVisible} metazap={metazap} /></div>
        )


    }


}





