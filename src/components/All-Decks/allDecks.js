export function allDecks (deckselect){
    
    if (deckselect === 'REACT'){
        const cards = [
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
        
        return (
            {cards}
        )
        
    } else if (deckselect === 'NARUTO'){
        const cards = [
            {
                question: 'Qual o sobrenome do Naruto',
                answer: 'Uzumaki'
            },
            {
                question: 'Quem matou o clã Uchiha',
                answer: 'Itachi Uchiha'
            },
            {
                question: 'Qual o nome do primeiro Hokage',
                answer: 'Hashirama'
            },
            {
                question: 'Qual o principal golpe do Naruto',
                answer: 'Rasengan'
            },
            {
                question: 'Quem consegue abrir os 8 portões internos',
                answer: 'Migth Guy'
            },
            {
                question: 'Quem foi o inimigo na primeira missão do Naruto',
                answer: 'Zabuza'
            },
            {
                question: 'Qual o nome do golpe que o Kakashi ensina pro Sasuke',
                answer: 'Chidori'
            },
            {
                question: 'Qual o nome da raposa de 9 caldas',
                answer: 'Kurama'
            }
    
        ]
        
        return (
            {cards}
        )
    }
}