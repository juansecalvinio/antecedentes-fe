import React from 'react'
import { Container, OptionsWrapper } from './styled';
import { Card } from 'react-bootstrap';

const Antecs = () => {
    return (
        <Container>
            <OptionsWrapper>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Admin antecedentes</Card.Title>
                        <Card.Text>
                            Administrar los tipos de antecedentes del sistema.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href='/antecs/view'>Ir</Card.Link>
                    </Card.Footer>
                </Card>
            </OptionsWrapper>
        </Container>
    )
}

export default Antecs;
