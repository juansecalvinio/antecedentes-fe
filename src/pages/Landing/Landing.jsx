import React from 'react'
import { Container } from './styled';
import { Link } from 'react-router-dom';
import logoWhite from './../../assets/img/logo-white.png';
import imgSection from './../../assets/img/landing-img-section.svg';
import imgSection2 from './../../assets/img/landing-img-section-2.svg';
import imgSection3 from './../../assets/img/landing-img-section-3.svg';

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
                    <img src={imgSection2} alt="img-section" />
                </section>
                <section className="info">
                    <div className="info-wrapper">
                        <img src={imgSection3} alt="img-section" />
                        <h2>
                            Todos los datos
                            que necesitas,
                            en un sólo lugar
                        </h2>
                    </div>
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
