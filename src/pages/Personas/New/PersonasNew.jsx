import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Topbar from './../../../components/Topbar/Topbar';
import { Alert, Button, Col, Form, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';
import { AfipSearchContainer, Container, FormContainer, OptionsWrapper } from './styled';
import CustomModal from './../../../components/CustomModal/CustomModal';
import antecsMock from './../../../mocks/antecs.json';
import { useHistory } from 'react-router';
import { insertPerson } from './../../../store/actions/personsActions';

/* 
Primero se buscan los datos en AFIP, si encuentra informacion, mostrar Nombre, Apellido, y CUIT
Y agregar en todo caso, los antecedentes.

Si no hay informacion en AFIP, mostrar Formulario para Agregar nueva Persona
*/

const PageContainer = styled.div`
    margin: 12rem 5rem; /** 8rem tiene height del Header */
    position: relative;
`;

const PersonasNew = ({ addPerson, error }) => {

    // React.useEffect(() => {
    //     console.log(valueAntecs);
    // }, [valueAntecs]);

    const [afip, setAfip] = useState(false);
    const [afipResult, setAfipResult] = useState(false);
    const [modal, setModal] = useState(false);
    const [valueNombre, setNombre] = useState('');
    const [valueApellido, setApellido] = useState('');
    const [valueCuit, setCuit] = useState('');
    const [valueAntecs, setAntecs] = useState([]);

    const history = useHistory();

    const handleChangeNombre = ({ target }) => {
        setNombre(target.value);
    }

    const handleChangeApellido = ({ target }) => {
        setApellido(target.value);
    }

    const handleChangeCuit = ({ target }) => {
        setCuit(target.value);
    }

    const handleCheckbox = ({ target }) => {
        const antec = target.id;
        setAntecs([
            ...valueAntecs,
            antec
        ]);
        console.log(valueAntecs);
    }

    const handleSubmit = () => {
        const bodyPerson = {
            "firstName": valueNombre,
            "lastName": valueApellido,
            "cuit": valueCuit,
        }
        console.log(bodyPerson);
        addPerson(bodyPerson, null);
    }

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>

                <Container>
                    
                    <CustomModal active={modal}
                        title="Atención" 
                        body="Está seguro que desea salir?"
                        onCancel={() => setModal(false)}
                        onSuccess={() => history.push('/app')} />

                    
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
                                    { !afipResult && <Form.Control type="text" onChange={handleChangeNombre} /> }
                                    { afipResult && <Form.Control type="text" disabled value="NOMBRE" /> }
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Apellido</Form.Label>
                                    { !afipResult && <Form.Control type="text" onChange={handleChangeApellido} /> }
                                    { afipResult && <Form.Control type="text" disabled value="APELLIDO" /> }
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>CUIT</Form.Label>
                                    { !afipResult && <Form.Control type="text" maxLength="11" placeholder="00-00000000-0" onChange={handleChangeCuit} /> }
                                    { afipResult && <Form.Control type="text" disabled value="00-00000000-0" /> }
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <h3>Seleccione los antecedentes:</h3>
                                <div className="group-check">
                                    {antecsMock.map(antec => 
                                        <Form.Check type="checkbox" 
                                            id={antec._id.$oid} 
                                            label={antec.name}
                                            onClick={handleCheckbox} 
                                            key={antec._id.$oid} />
                                    )}
                                </div>
                            </Form.Group>
                        </Form>
                        <OptionsWrapper>
                            <Button size="lg" variant="outline-danger" onClick={() => setModal(true)}>Cancelar</Button>
                            <Button size="lg" variant="primary" onClick={handleSubmit}>Confirmar</Button>
                        </OptionsWrapper>
                    </FormContainer> }

                    { error && <Alert variant="danger">{error}</Alert> }
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        error: state.appReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (data, antecs) => dispatch(insertPerson(data, antecs))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonasNew);
