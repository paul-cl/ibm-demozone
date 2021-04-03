import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavItem, NavLinks } from './Navbar_element'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

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
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>
                            
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
