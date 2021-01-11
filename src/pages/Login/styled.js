import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .form-container {
        border-bottom: 1px solid #cccccc;
        margin-bottom: 2rem;
    }

    section {
        ${'' /* border: 1px dashed black; */}
        width: 100%;
        height: 100vh;
    }

    section.login {

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 50%;
        }

        .login-form {
            max-width: 300px;
        }

        .login-form-forgot {
            float: right;
        }

        .ant-col-rtl .login-form-forgot {
            float: left;
        }

        .login-form-button {
            width: 100%;
        }

        .ant-form-item-control-input-content {
            button {
                margin: 0.5rem 0;
            }
        }
    }

    section.bg {
        background: rgba(24,144,255,1);
        background: linear-gradient(5deg, rgba(24,144,255,1) 0%, rgba(24,144,227,1) 50%, rgba(0,187,255,1) 100%);

        img {
            width: 100%;
        }
    }

    
`;