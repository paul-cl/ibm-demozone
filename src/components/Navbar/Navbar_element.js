import styled from 'styled-components';
import { AiOutlineDatabase } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav `
  background: #111933;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.0rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(AiOutlineDatabase)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 59px;
    left: ${({ click }) => (click ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #111933;
  }
`;

export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  line-height: 15px;
  
  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavBottom = styled.div `
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: fixed;
    bottom: 0;
    color: #fff;
    margin: 30px;
  }
`

export const SocialIcon = styled.p `
  display: none;

  @media screen and (max-width: 960px) {
   
  }
`

export const NavLanguage = styled.p `

  display: none;
  
  @media screen and (max-width: 960px) {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 35px;
    word-break: keep-all;
    line-height: 20px;
  }
`


export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
