import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    width: 50%;
    margin: 0 auto 0 0;

    & h1 {
        font-size: 5rem;
        font-weight: bold;
    }
`;

export const Illustration = styled.div`
    width: 50%;
    margin: 0 0 0 auto;

    & img {
        width: 100%;
    }
`;