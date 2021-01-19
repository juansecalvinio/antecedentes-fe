import React from 'react'
import styled from 'styled-components';
import Topbar from './../../components/Topbar/Topbar';
import { Link } from 'react-router-dom';
import { Container, ImgWrapper, OptionsWrapper, TitleWrapper } from './styled';
import { Card } from 'react-bootstrap';
import searchSvg from './../../assets/img/search-files.svg';
import addSvg from './../../assets/img/add-illustration.svg';

const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const Personas = () => {
    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <TitleWrapper>
                        <h3>Personas</h3>
                    </TitleWrapper>
                    <OptionsWrapper>
                        <Card>
                            <Link to='/app/personas-view'>
                                <ImgWrapper>
                                    <img src={searchSvg} width="45%" alt="img-search" />
                                </ImgWrapper>
                                <Card.Body>
                                    <Card.Title>
                                        Buscar
                                    </Card.Title>
                                    <Card.Text>
                                        Consultar información en el sistema.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card>
                            <Link to='/app/personas-new'>
                                <ImgWrapper>
                                    <img src={addSvg} width="35%" alt="img-add" />
                                </ImgWrapper>
                                <Card.Body>
                                    <Card.Title>
                                        Agregar
                                    </Card.Title>
                                    <Card.Text>
                                        Dar de alta un nuevo registro en el sistema.
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

export default Personas;
