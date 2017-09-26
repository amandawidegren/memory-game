import React from 'react';
import Card from './card'
import Counter from './counter'

const Game = () => (
    <div class="row" id="container">
    <div className="game" id="cardgame">
    <img id="h1" src="/images/memorygamelogo.png"/>
    <Counter/>
    <Card src="/images/image5.jpg" />
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
     <Card src="/images/image6.png" />
</div>
    </div>
)

export default Game
