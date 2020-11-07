import React from 'react'
import { Container } from './styled';
import logoWhite from './../../assets/img/logo-white-transparent.png';

const Landing = () => {
    return (
        <Container>
            <header>
                Landing page
                <img src={logoWhite} alt="logo" />
            </header>
            <main>
                <section></section>
                <section></section>
            </main>
            <footer></footer>
        </Container>
    )
}

export default Landing;
