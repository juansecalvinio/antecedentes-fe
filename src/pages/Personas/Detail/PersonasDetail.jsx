import React from 'react'
import Topbar from '../../../components/Topbar/Topbar';
import AOS from 'aos';
import "aos/dist/aos.css";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DetailWrapper, PageContainer, TitleWrapper } from './styled'
import { Container } from '../styled';
import { Button } from 'antd';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { fetchPersonById } from './../../../store/actions/personsActions';
import { fetchAntecsMultipleIds } from './../../../store/actions/antecsActions';

const PersonasDetail = (props) => {

    const { error, loading, getPerson, getAntecsPerson, person, match } = props;

    const idPerson = match.params.id;

    const history = useHistory();

    const [antecsPerson, setAntecsPerson] = React.useState('');

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
        
        getPerson(idPerson);
    }, []);

    React.useEffect(() => {        
        getAntecsPerson(person.antecs)
        .then(data => setAntecsPerson(data));
    }, [person]);

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container data-aos="fade-out">
                    <TitleWrapper>
                        <div className="arrow-title">
                            <FaArrowLeft color="#FFFFFF" size={30} onClick={()=>history.goBack()} />
                            <h3>Detalle</h3>
                        </div>
                        <Button type="primary" size="large">Editar</Button>
                    </TitleWrapper>
                    <DetailWrapper>
                        { !loading && Object.entries(person).length > 0 && (
                        <>
                            <div className="detail-header">
                                <div className="avatar">
                                    <FaUserCircle color="#E0E0E0" size={100} />
                                </div>
                                <div className="info">
                                    <h4>{`${person.lastName}, ${person.firstName}`}</h4>
                                    <p>{`CUIT: ${person.cuit}`}</p>
                                </div>
                            </div>
                            { typeof antecsPerson !== "undefined" && Object.entries(antecsPerson).length > 0 ? (
                                <div className="detail-antecs">
                                        <h4>Esta persona registra los siguientes antecedentes:</h4>
                                        <ul>
                                            { antecsPerson.map(antec => <li key={antec._id}>{antec.name}</li> ) }
                                        </ul>                                
                                </div>
                            ) : (
                                <div className="detail-antecs">
                                    <h4>Esta persona no registra ningún antecedentes</h4>
                                </div>
                            ) }
                        </>
                        ) }
                    </DetailWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        person: state.personsReducer.person,
        error: state.appReducer.errorFailure,
        loading: state.appReducer.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPerson: id => dispatch(fetchPersonById(id)),
        getAntecsPerson: ids => dispatch(fetchAntecsMultipleIds(ids)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonasDetail);
