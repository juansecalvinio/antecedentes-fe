import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styled'
import Logo from './Logo/Logo';
import { FaBars as MenuIcon } from 'react-icons/fa'

const Header = ({ menuOn }) => (
    <HeaderContainer>
        <MenuIcon color="#009EE3" size={30} onClick={menuOn} />
        <Link to="/app">
            <Logo />
        </Link>
    </HeaderContainer>
)

export default Header;
