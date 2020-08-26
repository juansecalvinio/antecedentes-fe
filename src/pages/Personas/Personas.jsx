import React from 'react'
import { Container, OptionsWrapper } from './styled';
import { Card } from 'react-bootstrap';

const Personas = () => {
    return (
        <Container>
            <OptionsWrapper>
                <Card style={{ width: '20rem', marginLeft: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Buscar persona</Card.Title>
                        <Card.Text>
                            Consultar información en el sistema.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href='/personas/view'>Buscar</Card.Link>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '20rem', marginRight: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Agregar persona</Card.Title>
                        <Card.Text>
                            Dar de alta un nuevo registro en el sistema.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href='/personas/new'>Agregar</Card.Link>
                    </Card.Footer>
                </Card>
            </OptionsWrapper>
        </Container>
    )
}

export default Personas;
