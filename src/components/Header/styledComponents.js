import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #223a5f;
  width: 70%;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemHeading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Bree Serif';
`
export const ScoreContainer = styled(ChoiceContainer)`
  border-radius: 7px;
  background-color: #ffffff;
  font-family: 'Roboto';
  width: 80px;
  height: 80px;
  text-align: center;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 18px;
  font-family: 'Bree Serif';
  margin-bottom: 0px;
`
export const ScoreNumber = styled.p`
  color: #223a5f;
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
`
