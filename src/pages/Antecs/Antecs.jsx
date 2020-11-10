import React from 'react'
import { Container, ImgWrapper, OptionsWrapper } from './styled';
import { Card } from 'react-bootstrap';
import antecsSvg from './../../assets/img/admin-antecs.svg';
import styled from 'styled-components';
import Topbar from './../../components/Topbar/Topbar';
import { Link } from 'react-router-dom';


const PageContainer = styled.div`
    margin: 12rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const Antecs = () => {
    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <OptionsWrapper>
                        <Card>
                            <Link to="/antecs-view" style={{ width: '18rem' }}>
                                <ImgWrapper>
                                    <img src={antecsSvg} width="75%" alt="img-admin" />
                                </ImgWrapper>
                                <Card.Body>
                                    <Card.Title>Admin antecedentes</Card.Title>
                                    <Card.Text>
                                        Administrar los tipos de antecedentes del sistema.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </OptionsWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

export default Antecs;
