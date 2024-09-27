import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import {
  GameContainer,
  ChoicesContainer,
  CustomButton,
  Image,
  RulesButton,
  RulesImage,
  CloseButton,
  PopupContainer,
  ResultChoice,
  ResultContainer,
  PlayButton,
  MatchResult,
} from './styledComponents'

class Home extends Component {
  state = {
    yourChoice: '',
    oponentChoice: '',
    isGameStart: true,
    score: 0,
    gameResult: '',
  }

  renderGameResult = choiceId => {
    const {choicesList} = this.props
    const choice = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[choice]

    const result = this.calculateGameResult(choiceId, randomChoice)

    this.setState({
      yourChoice: choiceId,
      isGameStart: false,
      oponentChoice: randomChoice,
      gameResult: result,
    })
  }

  calculateGameResult = (yourChoice, oponentChoice) => {
    if (yourChoice.id === oponentChoice.id) {
      return 'IT IS DRAW'
    }
    if (
      (yourChoice.id === 'ROCK' && oponentChoice.id === 'SCISSORS') ||
      (yourChoice.id === 'SCISSORS' && oponentChoice.id === 'PAPER') ||
      (yourChoice.id === 'PAPER' && oponentChoice.id === 'ROCK')
    ) {
      this.incrementScore()
      return 'YOU WON'
    }
    this.decrementScore()
    return 'YOU LOSE'
  }

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1,
    }))
  }

  onPlayAgain = () => {
    this.setState({isGameStart: true})
  }

  renderResult = () => {
    const {yourChoice, oponentChoice, gameResult} = this.state

    return (
      <ResultChoice>
        <ResultContainer>
          <ResultChoice>
            <h1>YOU</h1>
            <Image src={yourChoice.imageUrl} alt="your choice" />
          </ResultChoice>
          <ResultChoice>
            <h1>OPONENT</h1>
            <Image src={oponentChoice.imageUrl} alt="opponent choice" />
          </ResultChoice>
        </ResultContainer>
        <MatchResult>{gameResult}</MatchResult>
        <PlayButton type="button" onClick={this.onPlayAgain}>
          PLAY AGAIN
        </PlayButton>
      </ResultChoice>
    )
  }

  renderChoicesList = () => {
    const {choicesList} = this.props
    return (
      <ChoicesContainer>
        {choicesList.map(eachItem => (
          <CustomButton
            data-testid={`${eachItem.id.toLowerCase()}Button`}
            type="button"
            key={eachItem.id}
            onClick={() => this.renderGameResult(eachItem)}
          >
            <Image src={eachItem.imageUrl} alt={eachItem.id}/>
          </CustomButton>
        ))}
      </ChoicesContainer>
    )
  }

  render() {
    const {isGameStart, score} = this.state
    return (
      <GameContainer>
        <Header score={score} />
        {isGameStart ? this.renderChoicesList() : this.renderResult()}
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Home
