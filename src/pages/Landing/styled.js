import styled, { keyframes } from 'styled-components';
import fondoMobile from './../../assets/img/fondo-vector-mobile.svg';

const ilustrationAnimate = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.04);
    }
`;

export const Container = styled.div`
    background: linear-gradient(90deg, #24C6DC 0%, #514A9D 100%);
    min-height: 100vh;

    .contenedor {
        position: relative;
        ${'' /* height: 600px; */}
        display: flex;
        align-items: center;
        flex-direction: column;

        section {
            display: flex;
            width: 100%;
            z-index: 1;
        }

        .section-uno {
            align-items: center;
            justify-content: flex-end;

            img {
                padding: 4rem;
                width: 35%;
            }
        }

        .section-dos {
            padding: 0 4rem;
        }

        .wave {
            position: absolute;
            overflow: hidden;
            top: 0;
            right: 0;
            width: 80%;
        }

        .contenedor-textos {
            flex-basis: 50%;
            padding-left: 4rem;
            padding-bottom: 4rem;
            overflow: hidden;

            h1, h2 {
                color: #ffffff;
            }
            
            h1.titulo {
                font-size: 2.75rem;
                font-family: 'Raleway', sans-serif !important;
                font-weight: bold;
                margin: 0;
            }

            h2.subtitulo {
                font-size: 1.5rem;
                font-family: 'Raleway', sans-serif !important;
                font-weight: 200;
                margin: 1.75rem 0;
            }

            a {
                display: inline-block;
                width: 200px;
                height: 50px;
                padding-top: 10px;
                text-align: center;
                background: #ffffff;
                border-radius: 15px;
                border: none;
                color: #3B89BD;
                font-family: 'Raleway', sans-serif !important;
                font-weight: 200;
                text-decoration: none;
                font-size: 1.25rem;
            }
        }

        .contenedor-imagen {
            flex-basis: 50%;
            position: relative;
            text-align: center;
            overflow: hidden;

            img {
                ${'' /* animation: ${ilustrationAnimate} ease-in 1s infinite alternate; */}
                width: 75%;
            }
        }
        
        @media screen 
        and (min-device-width: 360px) 
        and (max-device-height: 820px) {

            height: 100%;

            .wave {
                content: url(${fondoMobile});
                width: 100%;
            }

            section {
                flex-direction: column;
            }

            .section-uno {
                
                justify-content: center;

                img {
                    padding: .5rem;
                    width: 80%;
                }                
            }

            .section-dos {
                flex-direction: column-reverse;
                padding: 0;
                margin-bottom: 4.5rem;
            }

            .contenedor-textos {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 2rem;
                padding: 0 !important;

                h1.titulo {
                    font-size: 1.75rem !important;
                    text-align: center;
                    margin: 0;
                }

                h2.subtitulo {
                    font-size: 1.25rem !important;
                    text-align: center;
                    margin-left: 1rem;
                    margin-right: 1rem;
                }

                a {
                    color: #514A9D;
                    ${'' /* font-size: 1.5rem;
                    padding: 15px 0; */}
                }
            }

            .contenedor-imagen img {
                width: 80%;
            }
        }
    }

`;