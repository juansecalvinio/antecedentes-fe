import React from 'react'
import { Container, ImgWrapper, OptionsWrapper } from './styled';
import { Card } from 'react-bootstrap';
import searchSvg from './../../assets/img/search-files.svg';
import addSvg from './../../assets/img/add-illustration.svg';

const Personas = () => {
    return (
        <Container>
            <OptionsWrapper>
                <Card>
                    <Card.Link href='/personas-view'>
                        <ImgWrapper>
                            <img src={searchSvg} width="45%" alt="img-search" />
                        </ImgWrapper>
                        <Card.Body>
                            <Card.Title>
                                Buscar persona
                            </Card.Title>
                            <Card.Text>
                                Consultar información en el sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
                <Card>
                    <Card.Link href='/personas-new'>
                        <ImgWrapper>
                            <img src={addSvg} width="35%" alt="img-add" />
                        </ImgWrapper>
                        <Card.Body>
                            <Card.Title>
                                Agregar persona
                            </Card.Title>
                            <Card.Text>
                                Dar de alta un nuevo registro en el sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </OptionsWrapper>
        </Container>
    )
}

export default Personas;
