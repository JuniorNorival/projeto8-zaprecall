import { useState } from 'react'
import Deck from '../Deck/Deck'
import logo from '../../assets/img/logo.png'
import './style.css'

export default function Start() {
    const [visible, setVisible] = useState(true)
    const getInputValue = (event) => {

        const userValue = event.target.value;

        console.log(userValue);
    };
    if (visible) {
        return (
            <div className="start" >
                <div className="logo-start">
                    <img src={logo} alt="logoinicio" />
                    <h1>ZapRecall</h1>
                    {/* <input type="text" onChange={getInputValue} /> */}
                    <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container'><Deck visible={visible} setVisible={setVisible} /></div>
        )


    }


}





