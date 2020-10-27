import React from 'react'
import { Container, Illustration, Title } from './styled';
import illustration from './../../assets/img/search-illustration.svg';

const Home = () => {
    return (
        <Container>
            <Title>
                <h1>Bienvenido a Antecedentes Laborales</h1>
                <button><a href="/personas">Ir a Personas</a></button>
            </Title>
            <Illustration>
                <img src={illustration} alt="img-home" />
            </Illustration>
        </Container>
    )
}

export default Home;
