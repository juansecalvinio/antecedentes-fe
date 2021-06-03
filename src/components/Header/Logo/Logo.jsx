import React from 'react';
import { LogoWrapper } from './styled';
import logo from './../../../assets/img/logo-white-transparent.png';

const Logo = () => {
    return (
        <LogoWrapper>
            <img src={logo} alt='logo' />
        </LogoWrapper>
    )
}

export default Logo;
