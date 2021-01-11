import styled from 'styled-components';

export const Container = styled.div`

    height: 100vh;

    & header {
        background: rgba(24,144,255,1);
        background: linear-gradient(5deg, rgba(24,144,255,1) 0%, rgba(24,144,227,1) 50%, rgba(0,187,255,1) 100%);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: 320px;
        height: 350px;
        text-align: center;

        img {
            width: 50%;
            align-self: center;
        }

        @media screen 
        and (min-device-width: 360px) 
        and (max-device-height: 820px) {

            height: auto;

            img {
                width: 100%;
            }
        }
    }

    & main {
        min-height: 500px;

        section.intro {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5rem 2rem;
            margin: 0 auto;
            width: 90%;

            h2 {
                font-size: 4.5rem;
                font-family: 'AileronHeavyItalic', sans-serif;
                letter-spacing: -3px;
            }

            img {
                width: 100%;
            }

            @media screen 
            and (min-device-width: 360px) 
            and (max-device-height: 820px) {

                flex-direction: column-reverse;
                padding: 2rem;
                width: 100%;

                h2 {
                    font-size: 2rem;
                    letter-spacing: -1px;
                    text-align: center;
                    
                }

                img {
                    width: 75%;
                    margin-bottom: 2rem;
                }
            }      
        }

        section.info {
            background: rgba(24,144,255,1);
            background: linear-gradient(5deg, rgba(24,144,255,1) 0%, rgba(24,144,227,1) 50%, rgba(0,187,255,1) 100%);
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 5rem;

            div.info-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5rem 3rem;
                margin: 0 auto;
            
                h2 {
                    color: #FFFFFF;
                    font-size: 4.5rem;
                    font-family: 'AileronHeavyItalic', sans-serif;
                    letter-spacing: -3px;
                    text-align: right;
                    margin: 0 5rem;
                }

                img {
                    width: 100%;
                }
            }

            & button {
                border: 2px solid #FFFFFF;
                border-radius: 15px;
                background: transparent;
                margin-top: 1rem;
                padding: 0.5rem;
                transition: all .3s ease-in-out;
                
                &:active {
                    transform: scale(0.9);
                }

                & a {
                    font-family: 'AileronBoldItalic', sans-serif;
                    font-size: 2rem;
                }

                & a, a:active, a:hover {
                    color: #FFFFFF;
                    text-decoration: none;
                }
            }

            @media screen 
            and (min-device-width: 360px) 
            and (max-device-height: 820px) {

                flex-direction: column;

                div.info-wrapper {
                    flex-direction: column-reverse;
                    width: 100%;
                    padding: 2rem;
                }

                div.info-wrapper h2 {
                    font-size: 2rem;
                    letter-spacing: -1px;
                    text-align: center;
                    margin: 0;
                    
                }

                div.info-wrapper img {
                    width: 55%;
                    margin-top: 2rem;
                }
            }   
        }
    }

    & footer {
        background: rgb(0,0,0);
        color: #FFFFFF;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        min-height: 250px;

        img {
            width: 35%;
        }

        @media screen 
        and (min-device-width: 360px) 
        and (max-device-height: 820px) {

            height: auto;

            img {
                width: 75%;
            }
        }
    }

`;