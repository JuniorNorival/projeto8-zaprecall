import { useState } from 'react'
import Deck from '../Deck/Deck'
import logo from '../../assets/img/logo.png'
import './style.css'

export default function Start() {
    const [visible, setVisible] = useState(true)

    return (
        <>
            
                {visible ? (
                    <div className="start" >
                        <div className="logo-start">
                            <img src={logo} alt="logoinicio" />
                            <h1>ZapRecall</h1>
                            <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
                        </div>
                    </div>) : (<div className='flash'><Deck /></div>)}
            
        </>



    )


}