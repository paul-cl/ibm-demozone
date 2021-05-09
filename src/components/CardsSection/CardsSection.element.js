import styled from 'styled-components'

export const CardSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CardsHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 2.35rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const Card = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)),
    url(${props => props.img});
  background-size: cover;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 320px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-top: 30px;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
      url(${props => props.img});
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 1200px) {
    width: 280px;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`
export const CardHidden = styled.div`
  padding-top: 0px;
    overflow:hidden;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin-top:500px;
  
  @media screen and (max-width: 960px) {
    margin-top:0px;

    &:hover {
      transform: none;
    }
  }
  
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 10px;
  align-items: left;
  color: #fff;

  &:hover {
    ${CardHidden} {
      margin-top:0px;
    }
  }
  
`

export const CardTitle = styled.h1`
    color: #fff;
    font-size: 1.6rem;
    margin-bottom: 35px;
    margin-top: 25px;
    text-align: center;
    

`

export const CardImg = styled.img`
  height: 100px;
  width: 100%;
`

export const CardSubHeading = styled.p`
    color: #fff;
    margin-bottom: 10px;
    font-size: 0.875rem;
    margin-top: 25px;
    text-align: center;
    

`

export const CardHeading = styled.h4`
    color: #fff;
    font-size: 1.5rem;
`