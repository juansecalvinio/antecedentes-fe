import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import styled from 'styled-components';
import Topbar from '../../components/Topbar/Topbar';
import config from '../../config/config';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { notification, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { registerUser } from '../../store/actions/loginActions';
import { FaArrowLeft } from 'react-icons/fa';
import { TitleWrapper } from './styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
`;

const PageContainer = styled.div`
    margin: 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all .3s ease;
    padding: 1rem;
    margin: 0 auto;
`;

const InputsWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    min-height: 475px;
    max-height: 475px;
    min-width: 575px;
    max-width: 575px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;

    h4 {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
    }

    form {
        padding: 1rem;
        margin: 0 3rem;

        div.ant-form-item-control-input-content {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: .5rem;

            button {
                margin: .5rem;
            }

            button.login-form-button {
                min-width: 175px;
            }
        }
    }

    div.google-login {
        margin: 2rem auto;
    }

    div.registered-message {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5rem;

        h4 {
            font-size: 1.75rem !important;
        }
        
        p {
            font-size: 1rem !important;
        }
    }
`;

const Register = ({
    register
}) => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);

    const nameRef = React.createRef();
    const passRef = React.createRef();
    const emailRef = React.createRef();

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleRegister = data => {
        // POST /register
        register(data)
        .then(() => {
            setRegistered(true);
            notification.success({
                message: 'Registro completo!',
                placement: 'topRight',
                style: {
                    backgroundColor: config.colors.success
                }
            })
        })
        .catch(error => {
            notification.error({
                message: error,
                description: 'Verifique los datos e intente nuevamente',
                placement: 'topRight',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        });
    }

    const onFinish = values => {
        if(password === confirmPassword) {
            handleRegister(values);
        } else {
            notification.error({
                message: 'Las contraseñas no coinciden',
                description: 'Verifique los datos e intente nuevamente',
                placement: 'topRight',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        }
    }

    const onFinishFailed = errorInfo => {
        console.error('Empty fields');
    }

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <TitleWrapper data-aos="fade-out">
                        <h3>Registrarme</h3>
                    </TitleWrapper>
                    <FormWrapper>
                        {!registered ? (<InputsWrapper>
                            <h4 data-aos="fade-out">Ingresa tus datos</h4>
                            <Form name="normal_register" className="login-form" 
                                initialValues={{ remember: true }} 
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                data-aos="fade-out"
                            >

                                <Form.Item name="name" rules={[{ required: true, message: 'Ingrese su nombre' }]}>
                                    <Input
                                        ref={nameRef}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        type="text"
                                        size="large"
                                        placeholder="Nombre"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item name="email" rules={[{ required: true, message: 'Ingrese su email' }]}>
                                    <Input
                                        ref={emailRef}
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        type="text"
                                        size="large"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item name="password" rules={[{ required: true, message: 'Ingrese su contraseña' }]}>
                                    <Input 
                                        ref={passRef}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        size="large"
                                        placeholder="Contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item rules={[{ required: true, message: 'Confirme su contraseña' }]}>
                                    <Input
                                        ref={passRef}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        size="large"
                                        placeholder="Confirmar contraseña"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Form.Item>
                                
                                <Form.Item>
                                    <Link to="/login">
                                        <Button shape="round" size="large">
                                            Ir a Login
                                        </Button>
                                    </Link>
                                    <Button className="login-form-button" type="primary" htmlType="submit" shape="round" size="large">
                                        Registrarse
                                    </Button>
                                </Form.Item>

                            </Form>

                        </InputsWrapper>) : 
                        (<InputsWrapper>
                            <div className="registered-message" data-aos="fade-out">
                                <h4>Gracias por sumarte, {name}!</h4>
                                <p>Ya podés acceder con tus datos</p>
                                <Link to="/login">
                                    <Button type="primary" shape="round" size="large">Acceder</Button>
                                </Link>
                            </div>
                        </InputsWrapper>) }
                        
                    </FormWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data, cb) => dispatch(registerUser(data, cb)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
