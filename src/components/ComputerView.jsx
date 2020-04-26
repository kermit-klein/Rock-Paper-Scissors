import React from "react"

const ComputerView = ({computerPick}) => {
    
    if (computerPick==="Rock") {
        return ( <p id="rocktext slct">ROCK</p> )
    } else if (computerPick==="Scissor") {
        return (<p id="scissorstext slct">SCISSORS</p>)
    } else if (computerPick==="Paper") {
        return (<p id="papertext slct">Paper</p>)
    } else {
        return (<p id="papertext slct">???</p>)
    }
        
    }
  
  export default ComputerView;