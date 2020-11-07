import React from 'react'
import styled from 'styled-components';
import Topbar from './../../components/Topbar/Topbar';
import { Link } from 'react-router-dom';
import { Container, Illustration, Title } from './styled';
import illustration from './../../assets/img/search-illustration.svg';

const PageContainer = styled.div`
    margin: 12rem 5rem; /** 8rem tiene height del Header */
    position: relative;
`;

const Home = () => {
    return (
        <React.Fragment>    
            <Topbar />
            <PageContainer>
                <Container>
                    <Title>
                        <h1>Bienvenido a Antecedentes Laborales</h1>
                        <button><Link to="/app/personas">Ingresar</Link></button>
                    </Title>
                    <Illustration>
                        <img src={illustration} alt="img-home" />
                    </Illustration>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

export default Home;
