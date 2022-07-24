import Flashs from '../Flashs/Flashs'


export default function Cards({respostas, setRespostas, deckCards}) {

  
    
    return (
        <>
            {deckCards.map((card, index) =>
                <Flashs respostas={respostas} setRespostas={setRespostas} key={index} question={card.question}
                    answer={card.answer} index={index} />)}
           
        </>
    )
}