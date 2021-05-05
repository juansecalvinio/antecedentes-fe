import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { notification, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, AlertOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../../store/actions/loginActions';
import styled from 'styled-components';
import config from '../../config/config';
import Topbar from '../../components/Topbar/Topbar';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
`;

const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const TitleWrapper = styled.div`
    h3 {
        color: #FFFFFF;
        font-size: 4rem;
        font-family: 'AileronHeavyItalic', sans-serif;
        text-align: center;
    }
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
    min-height: 450px;
    max-height: 400px;
    ${'' /* min-width: 700px;
    max-width: 700px; */}
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    margin: 0 17rem;

    h5 {
        font-family: 'AileronHeavyItalic', sans-serif;
        font-size: 2rem;
        text-align: center;
    }

    form {
        padding: 1rem;
        margin: 0 9rem;
        border-bottom: 1px solid #C6C6C6;

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
`;

const Login = ({
    error,
    login,
    logged,
}) => {

    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passRef = React.createRef();
    const emailRef = React.createRef();

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // React.useEffect(() => {
    //     if(logged) {
    //        history.push("/app");
    //     }
    // }, [logged]);

    // React.useEffect(() => {
    //     if(error.length !== 0) {
    //         notification.error({
    //             message: error,
    //             description: 'Verifique los datos e intente nuevamente',
    //             placement: 'topLeft',
    //             style: {
    //                 backgroundColor: config.colors.error
    //             }
    //         })
    //     }
    // }, [error]);

    const handleGoogleLoginSuccess = response => {
        
    }

    const handleGoogleLoginFailure = response => {
        
    }

    const handleLogin = data => {
        // POST /login
        login(data)
        .then(() => history.push("/app"))
        .catch(error => {
            notification.error({
                message: error,
                description: 'Verifique los datos e intente nuevamente',
                placement: 'topLeft',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        });
    }

    const onFinish = values => {
        handleLogin(values);
    }

    const onFinishFailed = errorInfo => {
        console.error('Empty fields');
    }

    // const validateInputs = () => {
    //     let inputs = {};
    //     inputs.username = username.length !== 0 ? false : true;
    //     inputs.password = password.length !== 0 ? false : true;

    //     setErrors({
    //         ...errors,
    //         ...inputs
    //     })

    //     return Object.values(inputs).every(e => e === false);
    // }

    // const handleClickLogin = e => {
    //     e.preventDefault();
    //     if(validateInputs()) {
    //         console.log('Click login');
    //         console.log({
    //             username,
    //             password
    //         });
    //     } else {
    //         console.error('Faltan campos');
    //     }
    // }

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <TitleWrapper data-aos="fade-out">
                        <h3>Acceder</h3>
                    </TitleWrapper>
                    <FormWrapper>
                        <InputsWrapper>
                            <h5 data-aos="fade-out">Ingresa tus datos</h5>
                            <Form name="normal_login" className="login-form" 
                                initialValues={{ remember: true }} 
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                data-aos="fade-out"
                            >

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
                                
                                <Form.Item>
                                    <Link to="/register">
                                        <Button shape="round" size="large">
                                            No tengo cuenta
                                        </Button>
                                    </Link>
                                    <Button className="login-form-button" type="primary" htmlType="submit" shape="round" size="large">
                                        Ingresar
                                    </Button>
                                </Form.Item>

                            </Form>
                            <div className="google-login">
                                <GoogleLogin clientId="245942166200-hfb8qrm6m9cgip71l5iuteujhnriidn9.apps.googleusercontent.com"
                                    onSuccess={handleGoogleLoginSuccess} 
                                    onFailure={handleGoogleLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                    buttonText="Ingresar con Google"
                                    />
                            </div>
                        </InputsWrapper>
                    </FormWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        error: state.appReducer.error,
        logged: state.loginReducer.logged,
        token: state.loginReducer.token,
        user: state.loginReducer.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(loginUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
