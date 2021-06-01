import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 12rem; */
    width: 100%;
`;

export const Title = styled.div`
    width: 50%;
    margin: 0 auto 0 2rem;

    & h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 5rem;
        font-weight: bold;
        letter-spacing: -3px;
    }

    & button {
        border: .5px solid #3C9FE3;
        border-radius: 15px;
        background: transparent;
        margin-top: 1rem;
        padding: 0.5rem;
        transition: all .3s ease-in-out;
        
        &:active {
            transform: scale(0.9);
        }

        & a {
            font-family: 'Raleway', sans-serif;
            font-weight: 200;
            font-size: 1.5rem;
        }

        & a, a:active, a:hover {
            color: #3C9FE3;
            text-decoration: none;
        }
    }

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {

        margin: 0;
        width: auto;
        
        & h1 {
            font-size: 40px;
        }

    }
`;

export const Illustration = styled.div`
    width: 50%;
    margin: 0 0 0 auto;

    & img {
        width: 90%;
    }

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {

        display: none;
    }
`;