import React from 'react'
import { Container } from './styled';
import { Link } from 'react-router-dom';
import logoWhite from './../../assets/img/logo-white.png';
import imgSection from './../../assets/img/landing-img-section.svg';

const Landing = () => {
    return (
        <Container>
            <header>
                <img src={logoWhite} alt="logo" />
            </header>
            <main>
                <section className="intro">
                    <h2>
                        Llegó una
                        nueva forma
                        de obtener
                        información
                    </h2>
                    <img src={imgSection} alt="img-section" />
                </section>
                <section className="join">
                    <button>
                        <a href="/#/app">Ingresar</a>
                    </button>
                </section>
            </main>
            <footer>
                <img src={logoWhite} alt="logo" />
            </footer>
        </Container>
    )
}

export default Landing;
