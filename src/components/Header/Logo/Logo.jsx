import React from 'react';
import { LogoWrapper } from './styled';
import { Link } from 'react-router-dom';
import logo from './../../../assets/img/main-brand.png';

const Logo = () => {
    return (
        <LogoWrapper>
            {/* <Link style={{textDecoration: 'none'}} to="/"> */}
                <img src={logo} alt='logo' />
                {/* <img src="./../../../assets/img/main-brand.png" alt='logo' /> */}
            {/* </Link> */}
        </LogoWrapper>
    )
}

export default Logo;
