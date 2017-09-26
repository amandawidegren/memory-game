import React from 'react';
import Card from './card'
import Counter from './counter'

class Game extends React.Component {
    
    state = {
        cards: [
        { src: "/images/image5.jpg" },
        { src: "/images/image4.gif" },
        { src: "/images/image2.jpg" },
        { src: "/images/image1.gif" }
        
        ]
    }
    


    
    render() {
        return (

            <div className="game" id="cardgame">
            
                <img id="h1" src="/images/memorygamelogo.png"/>
                <Card src={this.state.cards[0].src} />
                <Card src={this.state.cards[1].src} />
                <Card src={this.state.cards[2].src} />
                <Card src={this.state.cards[3].src} />
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
