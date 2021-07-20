import "aos/dist/aos.css";
import React from 'react'
import AOS from 'aos';
import { connect } from 'react-redux';
import config from '../../config/config';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import { notification, Form, Input, Button } from 'antd';
import { UserOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import { Container, TitleWrapper, PageContainer, FormWrapper, InputsWrapper, ResultWrapper } from './styled';
import { resetPassword } from '../../store/actions/loginActions';

const ResetPassword = (props) => {

    const { changePassword } = props;
    const { userId, token } = props.match.params;

    React.useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [newPassword, setNewPassword] = React.useState('');
    const [newPassword2, setNewPassword2] = React.useState('');
    const [result, setResult] = React.useState(false);

    const newPasswordRef = React.createRef();
    const newPassword2Ref = React.createRef();

    const onFinish = values => {
        handleResetPassword(values);
    }

    const onFinishFailed = errorInfo => {
        console.error('Empty fields', errorInfo);
    }

    const handleResetPassword = data => {
        if(newPassword !== newPassword2) {
            notification.error({
                message: 'Las contraseñas no coinciden',
                description: 'Verifique los datos e intente nuevamente',
                placement: 'topRight',
                style: {
                    backgroundColor: config.colors.error
                }
            })
        }

        changePassword({ userId, token, newPassword })
        .then(response => {
            setResult(true);
        })
        .catch(error => notification.error({
            message: error,
            description: 'Verifique los datos e intente nuevamente',
            placement: 'topRight',
            style: {
                backgroundColor: config.colors.error
            }
        }));
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
                                Ingrese los datos
                            </h5>
                            <Form name="reset_password"
                                initialValues={{ remember: true }} 
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                data-aos="fade-out"
                            >
                                <Form.Item name="new-password" rules={[{ required: true, message: 'Ingrese una contraseña' }]}>
                                    <Input
                                        ref={newPasswordRef}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        type="password"
                                        size="large"
                                        placeholder="Nueva Contraseña"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item name="new-password-2" rules={[{ required: true, message: 'Confirme su contraseña' }]}>
                                    <Input
                                        ref={newPassword2Ref}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        type="password"
                                        size="large"
                                        placeholder="Confirmar Contraseña"
                                        onChange={(e) => setNewPassword2(e.target.value)}
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
                                        Se ha modificado la contraseña correctamente. 
                                        Vuelva a iniciar sesión con sus nuevos datos.
                                    </p>
                                    <Link to="/login">
                                        <Button shape="round" size="large">
                                            Iniciar sesión
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

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: (payload) => dispatch(resetPassword(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
