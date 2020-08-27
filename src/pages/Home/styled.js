import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    width: 100%;
`;

export const Title = styled.div`
    width: 50%;
    margin: 0 auto 0 2rem;

    & h1 {
        font-size: 5rem;
        font-weight: bold;
        letter-spacing: -3px;
    }
`;

export const Illustration = styled.div`
    width: 50%;
    margin: 0 0 0 auto;

    & img {
        width: 90%;
    }
`;