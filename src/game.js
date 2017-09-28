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
        
//This function will be called from the card component
        //ecause we have passed it as a prop (called onClick) when
        //we render the Card component
        
        //to generate the new state we need to .map over the old state.
        //and, if the card we're mapping over is the clicked card.
        //we need to set it's 'is flipped' value to be TRUE.
        //otherwise we don't need to change the state for that card.
        //Finally, we can call this.setState' with the nre arrat we've built.
        
        handleCardClicked = (clickedCardId) => {
            const newCardsState = this.state.cards.map((cardz) => {
               if (cardz.id === clickedCardId) {
                 cardz.isFlipped = true   
               }
               return cardz
           })
        
           this.setState({ cards: newCardsState}, this.checkIfCardsMatched)
            
            
        }
        
        
        
        checkIfCardsMatched = () => {
            const flippedCards = this.state.cards.filter((image) => {
                return image.isFlipped
            })
            
            
            if (flippedCards.length === 2) {
                setTimeout(() => {
                    const newCardsState = this.state.cards.map((image) => {
                    image.isFlipped = false
                    return image
                })
                
                this.setState({ cards: newCardsState })
            }, 400)
        }

    }

            
        
//Create a new instance of the Card component, With the following props.
//src: url of the photo for the car
//whenClicked (onClick) a callback function which the card can invoke when it is klicked
        
    
        render() {
        return (
            <div id="cardgame">
            
            <img className="logo" src="/images/memorygamelogo.png"/>
            
            {this.state.cards.map((card) => (
                <Card 
                src={card.src} 
                onClick={this.handleCardClicked} 
                key={card.id} 
                id={card.id}
                isFlipped={card.isFlipped}
                checkIfCardsMatched={card.filteredCards}/>
                )
            )
    }
 
            </div>
    
            
        )
    }
    
}


export default Game
