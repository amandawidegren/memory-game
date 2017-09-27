import React from 'react';
import Card from './card';
import shuffle from 'shuffle-array'


    const photos = [
            "/images/image5.jpg",
            "/images/image4.gif",
            "/images/image2.jpg",
            "/images/image3.gif",
            "/images/image1.gif",
            "/images/image6.png"

]
    

class Game extends React.Component {
    
        constructor(props) {
            super(props)
            this.state = {
            cards: this.setupGame()
        }                
    }
    
        setupGame = () => { 
        const duplicatedPhotos = photos.concat(photos)
        const collection = shuffle(duplicatedPhotos) 
        shuffle(collection)
         return duplicatedPhotos.map ((url) => ({
                src: url, 
                isFlipped: false 
            }))                 
        }


    
    render() {
        return (
            <div className="game" id="cardgame">
            
                <img id="h1" src="/images/memorygamelogo.png"/>
                {this.state.cards.map((card) => (
                <Card src={card.src} />
        )
        )
    }
 
            </div>
    
            
        )
    }
}


export default Game
