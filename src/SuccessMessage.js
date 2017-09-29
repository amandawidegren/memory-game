import React from 'react';



class SuccessMessage extends React.Component {
  
    render() {
     return ( 
<div>
     <img className="amazing" src="/images/amazing4.gif"/>
   <img className="resetbtn" src="/images/restartbutton.jpg" onClick={this.props.resetGame}/>  
         </div>
     )    
    }
    
}



export default SuccessMessage