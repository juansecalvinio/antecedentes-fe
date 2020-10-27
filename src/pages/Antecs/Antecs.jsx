import React from 'react'
import { Container, ImgWrapper, OptionsWrapper } from './styled';
import { Card } from 'react-bootstrap';
import antecsSvg from './../../assets/img/admin-antecs.svg';

const Antecs = () => {
    return (
        <Container>
            <OptionsWrapper>
                <Card>
                    <Card.Link href="/antecs-view" style={{ width: '18rem' }}>
                        <ImgWrapper>
                            <img src={antecsSvg} width="75%" alt="img-admin" />
                        </ImgWrapper>
                        <Card.Body>
                            <Card.Title>Admin antecedentes</Card.Title>
                            <Card.Text>
                                Administrar los tipos de antecedentes del sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </OptionsWrapper>
        </Container>
    )
}

export default Antecs;
