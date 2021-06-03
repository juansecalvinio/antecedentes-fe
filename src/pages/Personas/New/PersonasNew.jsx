import React, { useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import config from '../../../config/config';
import Topbar from '../../../components/Topbar/Topbar';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, FormWrapper, TitleWrapper, PageContainer } from './styled';
import { notification, Form, Input, Button, Checkbox, Select } from 'antd';
import { UserOutlined, BankOutlined, IdcardOutlined } from '@ant-design/icons';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { fetchAntecs } from '../../../store/actions/antecsActions';
import { insertPerson } from '../../../store/actions/personsActions';

const { Option } = Select;

const PersonasNew = ({ antecs, errorFailure, getAntecs, insertPerson }) => {

    React.useEffect(() => {
        AOS.init({ duration: 1000 });

        if(Object.entries(antecs).length === 0) {
            getAntecs();
        }
    }, []);

    React.useEffect(() => {
        setAntecsOptions(antecs);
    }, [antecs]);

    React.useEffect(() => {
        if(typeof errorFailure !== "undefined") {
            notification.error({
                message: errorFailure,
                description: 'Ocurrió un error. Intente nuevamente.',
                placement: 'topLeft',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        }
    }, [errorFailure]);

    const history = useHistory();

    const [steps, setSteps] = useState(1);

    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [cuit, setCuit] = useState('');
    const [genero, setGenero] = useState('');

    const [checkedList, setCheckedList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const [antecsOptions, setAntecsOptions] = useState('');

    const handleOnChangeCheckboxGroup = list => {
        setCheckedList(list);
        setCheckAll(list.length === antecsOptions.length);
    }

    const handleCheckAll = () => {
        if(checkAll) {
            setCheckAll(false);
            setCheckedList([]);
        } else {
            setCheckAll(true);
            setCheckedList(antecsOptions.map(antec => antec.value));
        }
    }

    const onFinishStep1 = () => {
        setSteps(2);
    }

    const onFinishFailedStep1 = () => {}

    const onFinishStep2 = () => {
        const bodyData = {
            lastName: apellido,
            firstName: nombre,
            dni,
            cuit,
            genre: genero,
            antecs: checkedList,
        };

        insertPerson(bodyData)
        .then(() => setSteps(3))
        .catch(error => {
            notification.error({
                message: error,
                description: 'No se pudo registrar la persona. Verifique los datos e intente nuevamente',
                placement: 'topLeft',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        });
    }

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container data-aos="fade-out">
                    <TitleWrapper>
                        <div className="arrow-title">
                            <FaArrowLeft color="#FFFFFF" size={30} onClick={()=>history.goBack()} />
                            <h3>Agregar persona</h3>
                        </div>
                    </TitleWrapper>
                    <FormWrapper>

                        { steps === 1 && (
                            <div className="inputs-wrapper step1">
                                <h4>Información personal</h4>
                                <Form onFinish={onFinishStep1} onFinishFailed={onFinishFailedStep1}>
                                    <Form.Item name="lastName" rules={[{ 
                                        required: true,
                                        message: "Ingrese el apellido"
                                     }]}>
                                        <Input
                                            prefix={<UserOutlined className="site-form-item-icon" />}
                                            type="text"
                                            size="large"
                                            placeholder="Apellido"
                                            onChange={(e) => setApellido(e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="firstName" rules={[{
                                        required: true,
                                        message: "Ingrese el nombre"
                                     }]}>
                                        <Input
                                            prefix={<UserOutlined className="site-form-item-icon" />}
                                            type="text"
                                            size="large"
                                            placeholder="Nombre"
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="dni" rules={[{ 
                                        required: true,
                                        message: "Ingrese el Documento"
                                     }]}>
                                        <Input
                                            prefix={<IdcardOutlined className="site-form-item-icon" />}
                                            type="text"
                                            size="large"
                                            placeholder="DNI"
                                            onChange={(e) => setDni(e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="cuit" rules={[{ 
                                        required: true,
                                        message: "Ingrese el CUIT"
                                     }]}>
                                        <Input
                                            prefix={<BankOutlined className="site-form-item-icon" />}
                                            type="text"
                                            size="large"
                                            placeholder="CUIT"
                                            onChange={(e) => setCuit(e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="genre" rules={[{ 
                                        required: true,
                                        message: "Seleccione el género"
                                     }]}>
                                        <Select
                                            placeholder="Seleccione el género"
                                            onChange={(value) => setGenero(value)}
                                        >
                                            <Option value="female">Femenino</Option>
                                            <Option value="male">Masculino</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        <div className="action-wrapper">
                                            <Button size="large" type="primary" htmlType="submit">Continuar</Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        ) }

                        { steps === 2 && (
                            <div className="inputs-wrapper step2">
                                <div className="step2-header">
                                    <h4>Información laboral</h4>
                                    <p>Seleccione los antecedentes que correspondan</p>
                                </div>
                                <div className="step2-center">
                                    <div className="antecs">
                                        <Checkbox.Group options={antecsOptions} value={checkedList} onChange={handleOnChangeCheckboxGroup} />
                                    </div>
                                </div>
                                <div className="step2-footer">
                                    <Button size="large" type="link" onClick={handleCheckAll}>Seleccionar todos</Button> 
                                    <div className="action-wrapper">
                                        <Button size="large" type="secondary" onClick={()=>setSteps(1)}>Volver</Button>
                                        <Button size="large" type="primary" onClick={onFinishStep2}>Continuar</Button>
                                    </div>
                                </div>
                            </div>
                        ) }

                        { steps === 3 && (
                            <div className="step3">
                                <FaCheckCircle color="#3AD29F" size={75} />
                                <h4>Listo</h4>
                                <p>Se agregaron los datos correctamente</p>
                                <Button size="large" type="primary" onClick={()=>history.push("/app")}>Ir a inicio</Button>
                            </div>
                        ) }

                    </FormWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        antecs: state.antecsReducer.antecs,
        error: state.appReducer.errorFailure,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAntecs: () => dispatch(fetchAntecs()),
        insertPerson: body => dispatch(insertPerson(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonasNew);
