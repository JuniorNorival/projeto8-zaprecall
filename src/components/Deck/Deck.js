import './style.css'
import logopequeno from '../../assets/img/logo-pequeno.png'
import Cards from '../Cards/Cards'


export default function Deck() {

    return (
        <>
            <div className="header">
                <img src={logopequeno} alt="logoflash" />
                <p>ZapRecall</p>
            </div>
            <div className='deck'>
                <Cards />
          
            </div>

        </>

    )



}