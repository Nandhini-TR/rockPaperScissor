import {
  HeaderContainer,
  ChoiceContainer,
  ItemHeading,
  ScoreContainer,
  ScoreNumber,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <ChoiceContainer>
        <ItemHeading>
          ROCK <br /> PAPER <br /> SCISSORS
        </ItemHeading>
      </ChoiceContainer>
      <ScoreContainer>
        <Score>Score</Score>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
