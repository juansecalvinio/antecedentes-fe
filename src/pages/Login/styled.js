import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
`;

export const PageContainer = styled.div`
    margin: 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

export const TitleWrapper = styled.div`
    h2, h3, h4 {
        color: #FFFFFF;
        font-size: 4rem;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        text-align: center;
    }

    h2 {
        font-size: 4.5rem;
    }

    h3 {
        font-size: 4rem;
    }

    h4 {
        font-size: 3.5rem;
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
    min-height: 500px;
    max-height: 500px;
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
        font-size: 1.25rem;
        text-align: center;
    }

    form {
        padding: 1rem;
        margin: 0 3rem;
        /* border-bottom: 1px solid #C6C6C6; */

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
        margin: 2.5rem auto;
        /* button {
            color: #FFFFFF !important;
            background-color: #F15A24 !important;
        } */
    }
`;

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 5rem;
    min-height: 350px;

    p {
        font-weight: 200;
        font-size: 1.5rem;
        text-align: center;
        width: 80%;
    }
`;