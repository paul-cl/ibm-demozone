import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks, NavItemButton, NavBtnLink } from './Navbar_element'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, {})
    window.addEventListener('resize', showButton)

    return (
        <div>
            <IconContext.Provider value= {{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            ULTRA
                        </NavLogo>
                        <HamburgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </HamburgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    {t('NavbarContents.1')}
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    {t('NavbarContents.2')}
                                </NavLinks>
                            </NavItem>
                            <NavItemButton>
                                {Button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>{t('NavbarContents.3')}</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>{t('NavbarContents.3')}</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemButton>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
