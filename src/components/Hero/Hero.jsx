import React from 'react'
import Header from '../Header/Header';
import { Container } from './styled';

const Hero = ({ logged, menuOn, user }) => {
    return (
        <Container>
            <Header menuOn={menuOn} logged={logged} user={user} />
        </Container>
    )
}

export default Hero;
