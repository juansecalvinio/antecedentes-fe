import React, { useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';
import { AfipSearchContainer, Container, FormContainer, OptionsWrapper } from './styled';
import CustomModal from './../../../components/CustomModal/CustomModal';
import antecsMock from './../../../mocks/antecs.json';

/* 
Primero se buscan los datos en AFIP, si encuentra informacion, mostrar Nombre, Apellido, y CUIT
Y agregar en todo caso, los antecedentes.

Si no hay informacion en AFIP, mostrar Formulario para Agregar nueva Persona
*/

const PersonasNew = () => {

    const [afip, setAfip] = useState(false);
    const [afipResult, setAfipResult] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <Container>
            
            <CustomModal active={modal}
                title="Atención" 
                body="Está seguro que desea salir?"
                onCancel={() => setModal(false)}
                onSuccess={() => []} />

            
            { afip && !afipResult &&
                <AfipSearchContainer>
                    <Jumbotron>
                        <h3>Buscar datos en AFIP</h3>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text>CUIT</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="00-00000000-0" />
                        </InputGroup>
                        <Button variant="success" type="submit">Buscar</Button>
                    </Jumbotron>
                </AfipSearchContainer> }

            { !afip && <FormContainer>
                { afipResult && <h3>Agregar información de persona</h3> }
                { !afipResult && <h3>Datos personales</h3> }
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            { !afipResult && <Form.Control type="text" /> }
                            { afipResult && <Form.Control type="text" disabled value="NOMBRE" /> }
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Apellido</Form.Label>
                            { !afipResult && <Form.Control type="text" /> }
                            { afipResult && <Form.Control type="text" disabled value="APELLIDO" /> }
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>CUIT</Form.Label>
                            { !afipResult && <Form.Control type="text" placeholder="00-00000000-0" /> }
                            { afipResult && <Form.Control type="text" disabled value="00-00000000-0" /> }
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <h3>Seleccione los antecedentes:</h3>
                        <div className="group-check">
                            {antecsMock.map(antec => <Form.Check label={antec.name} key={antec._id.$oid} />)}
                        </div>
                    </Form.Group>
                </Form>
                <OptionsWrapper>
                    <Button variant="outline-danger" onClick={() => setModal(true)}>Cancelar</Button>
                    <Button variant="primary" type="submit">Confirmar</Button>
                </OptionsWrapper>
            </FormContainer> }
        </Container>
    )
}

export default PersonasNew;
