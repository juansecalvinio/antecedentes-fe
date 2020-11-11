import React, { useState } from 'react'
import { Container } from './styled';
import logoColor from './../../assets/img/logo-color.png';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import imageBg from './../../assets/img/login-image.svg';
import { GoogleLogin } from 'react-google-login';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [register, setRegister] = useState(false);

    const handleGoogleLoginSuccess = response => {

    }

    const handleGoogleLoginFailure = response => {
        
    }

    return (
        <Container>
            <section className="login">
                <img src={logoColor} alt="logo" />
                <div className="form-container">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={()=>{}}>
                        <Form.Item name="username" rules={[{ required: true, message: 'Ingrese su nombre de usuario' }]}>
                            <Input 
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                size="large"
                                placeholder="Usuario" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Ingrese su contraseña' }]}>
                            <Input 
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                size="large"
                                placeholder="Contraseña"
                            />
                        </Form.Item>
                        { register && <Form.Item name="email" rules={[{ required: true, message: 'Ingrese su email' }]}>
                            <Input 
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                type="text"
                                size="large"
                                placeholder="Email"
                            />
                        </Form.Item> }

                        { !register && 
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Recordarme</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="">Olvidé mi contraseña</a>
                        </Form.Item> }

                        <Form.Item>
                            { !register && <Button className="login-form-button" type="primary" shape="round" size="large" onClick={()=>{}}>
                                Ingresar
                            </Button> }
                            { !register && <Button className="login-form-button" type="dashed" shape="round" size="large" onClick={() => setRegister(true)}>
                                Registrarme
                            </Button> }
                            { register && <Button className="login-form-button" type="primary" shape="round" size="large" onClick={()=>{}}>
                                Crear usuario
                            </Button> }
                            { register && <Button className="login-form-button" type="dashed" shape="round" size="large" onClick={() => setRegister(false)}>
                                Volver
                            </Button> }
                        </Form.Item>
                    </Form>
                </div>
                { !register && <GoogleLogin clientId="245942166200-hfb8qrm6m9cgip71l5iuteujhnriidn9.apps.googleusercontent.com"
                    onSuccess={handleGoogleLoginSuccess} 
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    buttonText="Ingresar con Google"
                    /> }
            </section>
            <section className="bg">
                <img src={imageBg} alt="login-img" />
            </section>
        </Container>
    )
}

export default Login
