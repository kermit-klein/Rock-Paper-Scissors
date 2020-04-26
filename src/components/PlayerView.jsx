import React from "react"

const PlayerView = ({playerPick}) => {
    
    if (playerPick==="Rock") {
        return ( <p id="rocktext slct">ROCK</p> )
    } else if (playerPick==="Scissor") {
        return (<p id="scissorstext slct">SCISSORS</p>)
    } else if (playerPick==="Paper") {
        return (<p id="papertext slct">Paper</p>)
    } else {
        return (<p id="papertext slct">???</p>)
    }
        
    }
  
  export default PlayerView;