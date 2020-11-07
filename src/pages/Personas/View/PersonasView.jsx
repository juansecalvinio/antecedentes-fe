import React, { useState } from 'react'
import { connect } from 'react-redux';
import Topbar from './../../../components/Topbar/Topbar';
import { Container, PageContainer } from '../styled';
import { SearchContainer, PersonContainer } from './styled'
import { Alert, Button, FormControl, InputGroup } from 'react-bootstrap';
import { fetchPersons, fetchPersonById, fetchPersonByCuit } from './../../../store/actions/personsActions';
import { ValidateHelper } from './../../../helpers/ValidateHelper';

const validateHelper = new ValidateHelper();

const PersonasView = ({ person, persons, getAll, getById, getByCuit }) => {

    React.useEffect(() => {
        if(fetchError !== '') {
            setFetchError('');
        }
    }, [])
    
    React.useEffect(() => {
        if(showPerson && Object.entries(person).length === 0) {
            setShowPerson(false);
            setFetchError('No se han encontrado datos.');
        } else {
            setFetchError('');
        }
    }, [person])

    const [inputError, setInputError] = useState('');
    const [searchCuit, setSearchCuit] = useState('');
    const [showPerson, setShowPerson] = useState(false);
    const [showPersons, setShowPersons] = useState(false);
    const [fetchError, setFetchError] = useState('');

    const handleChangeCuit = ({ target }) => {
        setInputError('');
        if(target.value.length <= 11) {
            if(validateHelper.validateNumbers(target.value)) {
                setSearchCuit(target.value);
            } else {
                setInputError('Debe ingresar números');
            }
        }
    }

    const handleSearchCuit = () => {
        setFetchError('');
        if(searchCuit.length < 1) {
            setInputError('Debe ingresar el CUIT para buscar información');
        } else if(searchCuit.length > 11) {
            setInputError('El formato ingresado no es correcto, excede la cantidad de números.')
        } else {
            setShowPersons(false);
            setShowPerson(true);
            getByCuit(searchCuit); 
        }
    }

    const handleSearch = () => {
        setFetchError('');
        setShowPerson(false);
        setShowPersons(true);
        getAll();
    }

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <SearchContainer>

                            <h2>Buscar por datos:</h2>

                            <div className="filter-wrapper">
                                <InputGroup>
                                    
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>CUIT</InputGroup.Text>
                                    </InputGroup.Prepend>

                                    <FormControl type="text" 
                                        maxLength="11"
                                        onChange={handleChangeCuit} 
                                        placeholder="00-00000000-0" />
                                    
                                    <InputGroup.Prepend>
                                        <Button variant="outline-secondary" onClick={handleSearchCuit}>
                                            Buscar
                                        </Button>
                                    </InputGroup.Prepend>
                                
                                </InputGroup>
                                
                                <Button variant="success" size="lg" onClick={handleSearch}>Buscar</Button>
                            </div>
                            
                            { inputError !== '' && <Alert variant="danger">{inputError}</Alert> }

                            <div className="persons-wrapper">
                                { showPersons && persons.length > 0 && 
                                    persons.map(e => 
                                    <PersonContainer key={e._id}>
                                        <div className="info">
                                            <div className="info-data">
                                                <span className="label">Nombre completo: </span>
                                                <span className="value">{e.firstName}</span>
                                            </div>
                                            <div className="info-data">
                                                <span className="label">CUIT: </span>
                                                <span className="value">{e.cuit}</span>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <Button size="sm" variant="outline-danger">Eliminar</Button>
                                            <Button size="sm">Ver más</Button>
                                        </div>
                                    </PersonContainer> 
                                    )
                                }

                                { showPerson && 
                                    <PersonContainer key={person._id}>
                                        <div className="info">
                                            <div className="info-data">
                                                <span className="label">Nombre completo: </span>
                                                <span className="value">{person.firstName}</span>
                                            </div>
                                            <div className="info-data">
                                                <span className="label">CUIT: </span>
                                                <span className="value">{person.cuit}</span>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <Button size="sm">Ver más</Button>
                                            <Button size="sm" variant="outline-danger">Eliminar</Button>
                                        </div>
                                    </PersonContainer>
                                }

                                { fetchError !== '' && <Alert variant="danger">{fetchError}</Alert> }
                            </div>

                    </SearchContainer>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        person: state.personsReducer.person,
        persons: state.personsReducer.persons,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(fetchPersons()),
        getById: id => dispatch(fetchPersonById(id)),
        getByCuit: cuit => dispatch(fetchPersonByCuit(cuit)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonasView);
