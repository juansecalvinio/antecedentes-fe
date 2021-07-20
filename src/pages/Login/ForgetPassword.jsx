import "aos/dist/aos.css";
import React from 'react'
import AOS from 'aos';
import { connect } from 'react-redux';
import config from '../../config/config';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import { notification, Form, Input, Button } from 'antd';
import { MailOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { Container, TitleWrapper, PageContainer, FormWrapper, InputsWrapper, ResultWrapper } from './styled';
import { forgetPassword } from '../../store/actions/loginActions';

const ForgetPassword = ({ forgetPassword }) => {

    React.useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [email, setEmail] = React.useState('');
    const [result, setResult] = React.useState(false);
    const [resultMessage, setResultMessage] = React.useState('');

    const emailRef = React.createRef();

    const onFinish = values => {
        handleSendEmail(values);
    }

    const onFinishFailed = errorInfo => {
        console.error('Empty fields', errorInfo);
    }

    const handleSendEmail = data => {
        forgetPassword(data)
        .then(response => {
            setResult(true);
            setResultMessage(response.message);
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

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container>
                    <TitleWrapper data-aos="fade-out">
                        <h4>Recuperar contraseña</h4>
                    </TitleWrapper>
                    { !result && (<FormWrapper>
                        <InputsWrapper>
                            <h5 data-aos="fade-out">
                                Ingrese su correo y le enviaremos un link para recuperar su contraseña
                            </h5>
                            <Form name="reset_password"
                                initialValues={{ remember: true }} 
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                data-aos="fade-out"
                            >
                                <Form.Item name="mail" rules={[{ required: true, message: 'Ingrese su email' }]}>
                                    <Input
                                        ref={emailRef}
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        type="text"
                                        size="large"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Link to="/login">
                                        <Button shape="round" size="large">
                                            Volver
                                        </Button>
                                    </Link>
                                    <Button type="primary" htmlType="submit" shape="round" size="large">
                                        Enviar
                                    </Button>
                                </Form.Item>
                            </Form>
                        </InputsWrapper>
                    </FormWrapper>)}

                    { result && (
                        <FormWrapper>
                            <InputsWrapper>
                                <ResultWrapper data-aos="fade-out">
                                    <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '3rem' }} />
                                    <p>
                                        { resultMessage }
                                    </p>
                                    <Link to="/login">
                                        <Button shape="round" size="large">
                                            Ir al inicio
                                        </Button>
                                    </Link>
                                </ResultWrapper>
                            </InputsWrapper>
                        </FormWrapper>
                    )}
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        forgetPassword: email => dispatch(forgetPassword(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
