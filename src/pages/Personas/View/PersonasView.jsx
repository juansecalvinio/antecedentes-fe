import React from 'react'
import Topbar from '../../../components/Topbar/Topbar';
import AOS from 'aos';
import "aos/dist/aos.css";
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../styled';
import { PageContainer, TitleWrapper, TableWrapper } from './styled';
import { Button, Table, Space, Result } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchPersons } from './../../../store/actions/personsActions';

const PersonasView = ({ error, getPersons, loading, persons }) => {

    const history = useHistory();

    React.useEffect(() => {
        AOS.init({ duration: 1000 });

        if(Object.entries(persons).length === 0) {
            getPersons();
        }
    }, []);

    const tableColumns = [
        { title: "Apellido", dataIndex: "lastName", key: "lastName" },
        { title: "Nombre", dataIndex: "firstName", key: "firstName" },
        { title: "DNI", dataIndex: "dni", key: "dni" },
        { title: "CUIT", dataIndex: "cuit", key: "cuit" },
        { title: "Acciones", key: "acciones", width: 150, render: (props) => {
                return(
                    <Space size="middle">
                        <a onClick={()=>history.push(`/app/personas-view/${props.key}`)}>Ver detalle</a>
                    </Space>
                )
            }
        },
    ]

    let tableData = Object.keys(persons).map((key, index) => {
        return {
            key: persons[key]._id,
            lastName: persons[key].lastName,
            firstName: persons[key].firstName,
            dni: persons[key].dni,
            cuit: persons[key].cuit,
        }
    })

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container data-aos="fade-out">
                    <TitleWrapper>
                        <div className="arrow-title">
                            <FaArrowLeft color="#FFFFFF" size={30} onClick={()=>history.goBack()} />
                            <h3>Datos de personas</h3>
                        </div>
                        <Link to="/app/personas-new">
                            <Button type="primary" size="large">Agregar</Button>
                        </Link>
                    </TitleWrapper>
                    <TableWrapper data-aos="fade-out">
                        { !loading && (
                            <Table columns={tableColumns} dataSource={tableData} size="middle" />
                        )}
                    </TableWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        persons: state.personsReducer.persons,
        error: state.appReducer.errorFailure,
        loading: state.appReducer.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPersons: () => dispatch(fetchPersons()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonasView);
