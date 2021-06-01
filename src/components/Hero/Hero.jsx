import React from 'react'
import Header from '../Header/Header';
import { Container } from './styled';

const Hero = ({ menuOn }) => {
    return (
        <Container>
            <Header menuOn={menuOn} />
        </Container>
    )
}

export default Hero;
