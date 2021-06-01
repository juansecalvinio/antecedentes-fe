import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
`;

export const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

export const TitleWrapper = styled.div`
    h3 {
        color: #FFFFFF;
        font-size: 4rem;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        text-align: center;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all .3s ease;
    padding: 1rem;
    margin: 0 auto;
`;

export const InputsWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    min-height: 450px;
    max-height: 450px;
    min-width: 550px;
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    /* margin: 0 25rem; */

    h5 {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
    }

    form {
        padding: 1rem;
        margin: 0 3rem;
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
        margin: 1.5rem auto;
    }
`;