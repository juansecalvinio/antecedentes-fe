import React, { useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Container } from './styled';
import { Link } from 'react-router-dom';
import fondoVector from './../../assets/img/fondo-blanco-svg.svg';
import logoColor from '../../assets/img/logo-landing.svg';
import illustration from './../../assets/img/illustration-landing.svg';

const Landing = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Container>
            <main className="contenedor">
                <section className="section-uno" data-aos="fade-left">
                    <img src={logoColor} alt="logo"/>
                </section>
                <section className="section-dos">
                    <div className="contenedor-textos" data-aos="fade-right">
                        <h1 className="titulo">Todo lo que necesitas,<br></br> en un sólo lugar</h1>
                        <h2 className="subtitulo">Llegó una nueva forma de obtener información</h2>
                        <a href="/#/app" className="cta">Entrar ahora</a>
                    </div>
                    <div className="contenedor-imagen" data-aos="fade-up">
                        <img src={illustration} alt="illustration"/>
                    </div>
                </section>
                <img className="wave" src={fondoVector} alt="wave"/>
            </main>
        </Container>
    )
}

export default Landing;