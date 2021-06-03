import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import config from '../../config/config';
import Topbar from '../../components/Topbar/Topbar';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { notification, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, AlertOutlined } from '@ant-design/icons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { loginUser, getGoogleUrl } from '../../store/actions/loginActions';
import { Container, PageContainer, TitleWrapper, FormWrapper, InputsWrapper } from './styled'

const Login = ({
    error,
    login,
    getGoogleUrl
}) => {

    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passRef = React.createRef();
    const emailRef = React.createRef();

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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

    const handleGoogleLogin = () => {
        getGoogleUrl()
        .then(url => window.location.href = url)
        .catch(error => {
            notification.error({
                message: error,
                description: 'No se pudo realizar conexión con Google. Verifique en unos minutos o intente con otro usuario',
                placement: 'topLeft',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        });
    }

    const handleGoogleLoginSuccess = response => {
        
    }

    const handleGoogleLoginFailure = response => {
        
    }

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
                                <GoogleLoginButton onClick={handleGoogleLogin}>
                                    Acceder desde Google
                                </GoogleLoginButton>
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
        error: state.appReducer.errorFailure,
        logged: state.loginReducer.logged,
        token: state.loginReducer.token,
        user: state.loginReducer.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(loginUser(data)),
        getGoogleUrl: () => dispatch(getGoogleUrl())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
