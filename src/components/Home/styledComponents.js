import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const ChoicesContainer = styled.div`
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  justify-content: center;
`
export const CustomButton = styled.button`
  background: transparent;
  border: 0px none;
`
export const Image = styled.img`
  height: 150px;
  margin: 20px;
`
export const RulesButton = styled.button`
  padding: 15px;
  width: 85px;
  color: #223a5f;
  background-color: #ffffff;
  text-align: center;
  border: 0px none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  align-self: end;
  margin-bottom: 20px;
  font-family: 'Bree Serif';
`
export const RulesImage = styled.img`
  height: 50vh;
`
export const CloseButton = styled.button`
  background: transparent;
  border: 0px none;
  align-self: end;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ResultChoice = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  align-items: center;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PlayButton = styled(RulesButton)`
  width: 150px;
  align-self: center;
`
export const MatchResult = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
`
