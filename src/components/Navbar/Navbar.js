import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar_element'
import { IconContext } from 'react-icons/lib'

import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();
    const [click, setClick] = useState(false)
 

    const handleClick = () => setClick(!click)


    return (
        <>
            <IconContext.Provider value= {{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={handleClick} click={click}>
                            <NavIcon />
                            DEMO HUB
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
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
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
