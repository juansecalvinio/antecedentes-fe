import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
`;

export const TitleWrapper = styled.div`

    h3 {
        color: #FFFFFF;
        font-size: 4rem;
        font-family: 'AileronHeavyItalic', sans-serif;
        text-align: center;
    }
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all .3s ease;
    padding: 1rem 5rem;

    .card {
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition: all .3s ease;
        width: 350px;
        min-height: 400px;
        max-height: 400px;
        margin: 0 2rem;

        .card-title {
            font-family: 'AileronHeavyItalic', sans-serif;
            font-size: 2.5rem;
            letter-spacing: -1.5px;
            font-style: italic;
            text-align: center;
        }

        .card-body {
            min-height: 250px;
            width: 100%;
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
            text-align: center;
            margin: 0 3rem;
        }
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
        transform: translateY(-10px);
        ${'' /* border: 1px solid #009EE3; */}
    }

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
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 1.25rem;
    min-height: 150px;

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {

       display: none !important;

    }
`;