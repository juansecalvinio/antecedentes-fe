import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12rem;
    width: 100%;
`;

export const PageContainer = styled.div`
    margin: 12rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    transition: all .3s ease;

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {

        flex-direction: column;

        .card {
            width: 15rem !important;
            min-height: 150px !important;
            margin-bottom: 1rem;

            .card-title {
                font-size: 1.3rem !important
            }
        }
    }

    .card {
        cursor: pointer;
        min-height: 200px;
        transition: all .3s ease;
        width: 20rem;

        .card-title {
            font-family: 'AileronHeavyItalic', sans-serif;
            font-size: 2rem;
            letter-spacing: -1.5px;
            font-style: italic;
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
            font-family: 'AileronLightItalic', sans-serif;
            font-size: 1.25rem;
            font-weight: 200;
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

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {

       display: none !important;

    }
`;