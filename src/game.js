import React from 'react';
import Card from './card';
import shuffle from 'shuffle-array';
import uuidv4 from 'uuid/v4'



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
        const shuffledPhotos = shuffle(duplicatedPhotos)
         return shuffledPhotos.map ((url) => ({
                src: url, 
                isFlipped: false,
                id: uuidv4()
             
            
            }))                 
        }
        
//New function which will take one argument, a "card src" and logs it
        
        handleCardClicked = (cardsrc) => {
            alert(cardsrc)
        }
//Create a new instance of the Card component, With the following props.
//src: url of the photo for the car
//whenClicked (onClick) a callback function which the card can invoke when it is klicked

        
    
        render() {
        return (
            <div className="game" id="cardgame">
            
            <img id="h1" src="/images/memorygamelogo.png"/>
            
            {this.state.cards.map((card) => (
            <Card 
                src={card.src} 
                onClick={this.handleCardClicked} 
                key={card.id} 
                id={card.id} />
        )
        )
    }
 
            </div>
    
            
        )
    }
    
}


export default Game
