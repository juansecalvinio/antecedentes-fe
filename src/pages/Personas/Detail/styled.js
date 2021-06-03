import styled from 'styled-components';

export const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    div.arrow-title {

        display: flex;
        align-items: center;

        h3 {
            color: #FFFFFF;
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            font-weight: bold;
            text-align: center;
            margin: 0 2rem;
        }

        svg:hover {
            cursor: pointer;
        }

    }

    button {
        border-radius: 10px;
        min-width: 150px;
    }

`;

export const DetailWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 550px;
    margin-top: 2rem;
    padding: 4rem;

    & div.detail-header {
        border-bottom: .5px solid #C6C6C6;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 2rem;

        div.info {
            h4, p {
                text-align: left;
                margin: 0 2rem;
            }

            h4 {
                font-size: 2rem;
                font-weight: 600;
            }

            p {
                font-family: 'Roboto Mono', sans-serif;
                font-size: 1.5rem;
                font-weight: 300;
            }
        }
    }

    & div.detail-antecs {
        margin: 2rem 0;

        ul {
            margin-top: 2rem;
            padding-left: 3rem;
        }

        ul li {
            font-family: 'Roboto Mono', sans-serif;
            font-size: 1.25rem;
            font-weight: 300;
        }
    }
`;