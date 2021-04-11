import { Link } from 'react-router-dom'
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

export const Card = styled(Link)`
  background: #F5F5F5;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 270px;
  height: 420px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 370px;
  padding: 10px;
  align-items: left;
  color: #fff;
`

export const CardImg = styled.img`
  height: 180px;
  width: 100%;
  background-color: #111933;
`

export const CardSubHeading = styled.h3`
    color: #696969;
    margin-bottom: 10px;
    font-size: 0.875rem;
    margin-top: 15px;
`

export const CardHeading = styled.h4`
    color: #000000;
    font-size: 1.5rem;
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  padding: 10px;
  align-items: right;
  background-color: #000000;
`

export const CardFooterText = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    right: 0;
    line-height: 30px;
    vertical-align: middle;
`

export const SocialIconLink = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 32px;
  padding-left: 7px;
`
