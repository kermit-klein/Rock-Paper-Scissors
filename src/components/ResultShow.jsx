import React from "react"

const ResultShow = ({whoWon}) => {
    
    if (whoWon==="Player") {
        return (<p class="result">Player Wins</p>)
    } else if (whoWon==="Computer") {
        return (<p class="result">Computer Wins</p>)
    } else {
        return
    }
  }

  
  export default ResultShow;