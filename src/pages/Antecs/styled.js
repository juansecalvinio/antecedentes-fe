import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    transition: all .3s ease;

    .card {
        cursor: pointer;
        min-height: 200px;
        transition: all .3s ease;
        width: 20rem;

        .card-title {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 2rem;
            letter-spacing: -1.5px;
        }

        a {
            color: #202020;
            font-size: 1.5rem;
            text-decoration: none;
        }

        a:active, a:hover, a:focus, a:visited {
            text-decoration: none;
            color: inherit;
        }

        p.card-text {
            font-family: 'Raleway', sans-serif;
            font-weight: 200;
            font-size: 1.25rem;
        }
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
        border: 1px solid #009EE3;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    min-height: 150px;
`;