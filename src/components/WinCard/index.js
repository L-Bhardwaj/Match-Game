import './index.css'

const WinCard = props => {
  const {score, onReset} = props

  const clickBtn = () => {
    onReset()
  }

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <h1>{score}</h1>
      <button type="button" className="playAgain" onClick={clickBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default WinCard
