import React from 'react';
import { HeaderContainer } from './styled'
import Logo from './Logo/Logo';
import { Nav} from "react-bootstrap";
import { FaBars as MenuIcon } from 'react-icons/fa'

const Header = ({ menuOn }) => (
    <HeaderContainer>
        <MenuIcon color="#FFFFFF" size={30} onClick={menuOn} />
        <Nav.Link href="/inicio">
            <Logo />
        </Nav.Link>
    </HeaderContainer>
)

export default Header;
