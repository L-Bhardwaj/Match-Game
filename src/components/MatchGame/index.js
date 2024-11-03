import './index.css'
import {Component} from 'react'

import Tabs from '../Tabs'
import MatchItem from '../MatchItem'
import WinCard from '../WinCard'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = this.props
    this.state = {
      imagesList,
      tabsList,
      score: 0,
      timer: 60,
      item: imagesList[0],
      category: tabsList[0].tabId,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.runTimer, 1000)
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // }

  runTimer = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState({timer: timer - 1})
    } else {
      clearInterval(this.timerID)
    }
  }

  onReset = () => {
    this.timerID = setInterval(this.runTimer, 1000)
    const {imagesList, tabsList} = this.state
    this.setState({
      score: 0,
      timer: 60,
      item: imagesList[0],
      category: tabsList[0].tabId,
    })
  }

  onChangeTab = text => {
    this.setState({category: text})
  }

  onCheckImg = id => {
    const {item, imagesList} = this.state

    if (id === item.id) {
      this.setState(prev => ({
        score: prev.score + 1,
        item: imagesList[Math.floor(Math.random() * imagesList.length)],
      }))
    }
  }

  render() {
    const {score, timer, item, category, imagesList, tabsList} = this.state

    const imgLi = imagesList.filter(each => each.category === category)
    console.log(imgLi)

    return (
      <div className="main">
        <div>
          <nav className="navBar">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                className="logo"
                alt="website logo"
              />
            </div>
            <div className="scoreBoard">
              <ul>
                <li>
                  <p>
                    Score: <span>{score}</span>
                  </p>
                </li>
                <li>
                  <div className="timerBoard">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                      className="timerImg"
                      alt="timer"
                    />
                    <p>{timer} sec</p>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mainContent">
          {timer === 0 ? (
            <div>
              <WinCard score={score} onReset={this.onReset} />
            </div>
          ) : (
            <div className="content">
              <div>
                <img src={item.imageUrl} className="mainimg" alt="match" />
              </div>
              <div className="tabs">
                <ul>
                  {tabsList.map(each => (
                    <Tabs
                      key={each.tabId}
                      details={each}
                      activeTab={category === each.tabId}
                      click={this.onChangeTab}
                    />
                  ))}
                </ul>
              </div>

              <div>
                <ul>
                  {imgLi.map(each => (
                    <MatchItem
                      key={each.id}
                      details={each}
                      checkImg={this.onCheckImg}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default MatchGame
