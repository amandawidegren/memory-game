import React from 'react';
import Card from './card'

class Game extends React.Component {
    
    state = {
        cards: [
            { src: "/images/image5.jpg" },
            { src: "/images/image4.gif" },
            { src: "/images/image2.jpg" },
            { src: "/images/image3.gif" },
            { src: "/images/image1.gif" },
            { src: "/images/image6.png" }
        
        ]
    }
    


    
    render() {
        return (
            <div className="game" id="cardgame">
            
                <img id="h1" src="/images/memorygamelogo.png"/>
                {this.state.cards.map((card) => (
                <Card src={card.src} />
))}
 
            </div>
    
            
        )
    }
}

    
    /*<Card src="/images/image5.jpg" />
     <Card src="/images/image4.gif" />
     <Card src="/images/image2.jpg" />
    <Card src="/images/image1.gif" />
     <Card src="/images/image2.jpg" />
      <Card src="/images/image3.gif" />
     <Card src="/images/image4.gif" />
    <Card src="/images/image3.gif" />
    <Card src="/images/image1.gif" />
    <Card src="/images/image6.png" />
     <Card src="/images/image5.jpg" />
     <Card src="/images/image6.png" />*/


export default Game
