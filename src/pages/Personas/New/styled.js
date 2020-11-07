import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`; 

export const AfipSearchContainer = styled.div`
    display: flex;
    width: 100%;

    & .jumbotron {
        width: 60%;
        margin: 0 auto;

        & h3 {
            margin-bottom: 2rem;
        }

        & span.input-group-text {
            background-color: #007bff;
            color: #ffffff;
        }
    }
`;

export const FormContainer = styled.div`
    border-width: .2rem .2rem 0;
    border: 1px solid #ededed;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
    color: #212529;
    margin-top: 1rem;
    margin-right: 0;
    margin-left: 0;
    padding: 2.5rem;
    width: 90%;

    & h3 {
        font-family: 'AileronHeavyItalic', sans-serif;
        margin-bottom: 1.5rem;
    }

    & .group-check {
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        width: 100%;
    }

    & .form-group {
        border-bottom: 2px solid #ececec;
        padding-bottom: 1.5rem;
    }

    & .form-check {
        margin: .5rem;
        margin-right: 1.5rem;
    }

    & .form-check-input {
        width: 20px;
        height: 20px;
        margin-top: .2rem;
    }

    & .form-check-label {
        margin-left: .5rem;
    }
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    & button {
        margin: 0.5rem;
    }
`;