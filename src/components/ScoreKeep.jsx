import React from "react"

const ScoreKeep = ({playerScore,computerScore,tieScore  }) => {
    return (
        <h3 class="slct">
            {playerScore}-{computerScore}-{tieScore}
        </h3>
    )  
  }

  
  export default ScoreKeep;