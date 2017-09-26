import React from "react"

class Counter extends React.Component {
    
    state = {
        count: 0
    }

handleButtonClick = () => {
   this.setState({ count: this.state.count + 1})
}

handleMinusButtonClick = () => {
   this.setState({ count: this.state.count - 1})
}
    
    render( ) {
        return (
        <div>
        Count: {this.state.count} 
            <button onClick={this.handleButtonClick}>ADD!</button>
            <button onClick={this.handleMinusButtonClick}>ADD!</button>
        </div>
        )
    }
}

export default Counter 