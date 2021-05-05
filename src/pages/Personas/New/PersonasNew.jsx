import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from '../../../components/Topbar/Topbar';
import { Container, ImgWrapper, OptionsWrapper } from '../styled';
import { notification, Form, Input, Button, Checkbox, DatePicker } from 'antd';
import { UserOutlined, CalendarOutlined, BankOutlined } from '@ant-design/icons';
import { FaArrowLeft } from 'react-icons/fa';
import AOS from 'aos';
import "aos/dist/aos.css";



const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    div.arrow-title {

        display: flex;
        align-items: center;

        h3 {
            color: #FFFFFF;
            font-size: 2rem;
            font-family: 'AileronHeavyItalic', sans-serif;
            text-align: center;
            margin: 0 2rem;
        }

        svg:hover {
            cursor: pointer;
        }

    }

    button {
        border-radius: 10px;
        min-width: 150px;
    }

`;

const FormWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 500px;
    margin-top: 2rem;

    div.inputs-wrapper {

        padding: 2rem 25rem;
        position: relative;

        &.step1 {

            h4 {
                font-size: 2rem;
                font-family: 'AileronHeavyItalic', sans-serif;
                text-align: center;
            }

            button {
                border-radius: 10px;
                min-width: 150px;
            }

            .ant-form {
                margin-top: 3rem;
            }

            div.action-wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-top: 0;
            }

            div.datepicker-wrapper {
                .ant-picker {
                    width: 100%;

                    .ant-picker-input {
                        display: flex;
                        justify-content: space-around;
                        flex-flow: row-reverse;

                        .ant-picker-suffix {
                            margin-left: 0;
                            margin-right: 4px;
                        }
                    }
                }
            }

        }

        &.step2 {
            height: inherit;
            padding: 2rem 5rem;
            
            .step2-header {

                h4 {
                    font-size: 2rem;
                    font-family: 'AileronHeavyItalic', sans-serif;
                    text-align: 'left';
                }

                p {
                    font-size: .85rem;
                    font-family: 'AileronRegularItalic', sans-serif;
                    text-align: left;
                }
            }

            .step2-center {

                padding: 1rem 0;

                .antecs {
                    .ant-checkbox-group {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;
                        
                        & .ant-checkbox-group-item {
                            display: flex !important;
                            align-items: center;
                        }
                    }
                    .ant-checkbox + span {
                        font-size: 1.25rem;
                        font-style: italic;
                    }
                }
            }

            .step2-footer {
                
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .action-wrapper {

                    button {
                        border-radius: 10px;
                        margin: 0 1rem;
                        min-width: 150px;
                    }
                }
            }
        }

        &.step3 {}
        
    }
    
`;

const PersonasNew = () => {

    const history = useHistory();

    const [steps, setSteps] = useState(2);

    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [cuit, setCuit] = useState('');
    const [fechaNac, setFechaNac] = useState(null);

    const [checkedList, setCheckedList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const [antecsOptions, setAntecsOptions] = useState([
      {
        value: "5eebe19d8324a8231de12f22",
        label: "DELEGADO O MIEMBRO DEL SINDICATO"
      },
      {
        value: "5eebe1ab8324a8231de12f23",
        label: "PROBLEMAS DE CONDUCTA"
      },
      {
        value: "5eebe1b58324a8231de12f24",
        label: "PROBLEMAS DE ASISTENCIA"
      },
      {
        value: "5eebe1c18324a8231de12f25",
        label:  "VIOLENCIA"
      },
      {
        value: "5eebe1d38324a8231de12f26",
        label: "ROBOS - HURTOS"
      },
      {
        value: "5eebe1eb8324a8231de12f27",
        label: "DIFICULTADES FÍSICAS CRÓNICAS"
      },
      {
        value: "5eebe2008324a8231de12f28",
        label: "ADICCIONES"
      }
    ]);

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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

    const handleStep1 = data => {

    }

    const onFinishStep1 = values => {
        handleStep1(values);
        setSteps(2);
    }

    const onFinishFailedStep1 = () => {}

    const onFinishStep2 = () => {}

    const onFinishFailedStep2 = () => {}

    const onFinishStep3 = () => {}

    const onFinishFailedStep3 = () => {}

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
                                    <Form.Item name="apellido" rules={[{ 
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
                                    <Form.Item name="nombre" rules={[{ 
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
                                    <Form.Item name="cuit" rules={[{ 
                                        required: true,
                                        message: "Ingrese el CUIT"
                                     }]}>
                                        <Input
                                            prefix={<BankOutlined className="site-form-item-icon" />}
                                            type="text"
                                            size="large"
                                            placeholder="Cuit"
                                            onChange={(e) => setCuit(e.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item name="cuit" rules={[{ 
                                        required: true,
                                        message: "Ingrese la fecha de nacimiento"
                                     }]}>
                                        <div className="datepicker-wrapper">
                                            <DatePicker 
                                                size="large"
                                                placeholder="Fecha de nacimiento"
                                                onChange={(e) => setFechaNac(e.target.value)}
                                            />
                                        </div>
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
                                        <Button size="large" type="primary" htmlType="submit">Continuar</Button>
                                    </div>
                                </div>
                            </div>
                        ) }

                        { steps === 3 && (
                            <div className="inputs-wrapper step3">
                                <h4>Información laboral</h4>
                                <p>Carga de documentos</p>
                            </div>
                        ) }

                    </FormWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

export default PersonasNew;
