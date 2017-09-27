import React from 'react'; //We need react to use react
import "./card.css"; // Just normal CSS, React injects it into the <head> component
import Game from "./game"


//Define a "Card" component. 
//That component is inheriting functions from React.Component

class Card extends React.Component {
    
    
//The function we call from onClick. We give it a name 'handleClick' 
//and it takes no arguments. Because it's in a class it has access to 'this'
//so it can use this.props.src

//whenClicked (onClick) a callback function which the card can invoke when it is klicked
//
    
handleClick = () => {
    
this.props.onClick.key(this.props.src)    
    
}


// render() is a required function for our component. 
//React will invoke this function when it mounts the component.

render() { //render function definition. NOT using the flat arrow
    //render function needs to return JSX.
    //JSX ishasically HTML but you can use components as well.
    //For example, when we render this card we do so in the game components by using <Card />
    //Props become an object so, className="foo" becones { className: "foo}
    //on this.props, and onClick becomes { onClick: () => {} }
        return ( 
            <div className="card" onClick={this.handleClick}>
                <img src= {this.props.src} alt="" />
               </div>
        )
}

}
 

//to be able to use'import Card from "./card", we need to export it.

export default Card