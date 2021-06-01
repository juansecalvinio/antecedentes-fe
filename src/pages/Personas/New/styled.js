import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
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
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
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

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 550px;
    margin-top: 2rem;

    div.inputs-wrapper {

        padding: 2rem 25rem;
        position: relative;

        &.step1 {

            h4 {
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
                font-weight: bold;
                text-align: center;
            }

            button {
                border-radius: 10px;
                min-width: 150px;
            }

            .ant-form {
                margin: 0 10rem;
                margin-top: 3rem;
            }

            div.action-wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-top: 0;
            }

            div.datepicker-wrapper {
                .ant-picker {
                    width: 100%;

                    .ant-picker-input {
                        display: flex;
                        justify-content: space-around;
                        flex-flow: row-reverse;

                        .ant-picker-suffix {
                            margin-left: 0;
                            margin-right: 4px;
                        }
                    }
                }
            }

        }

        &.step2 {
            height: inherit;
            padding: 2rem 5rem;
            
            .step2-header {

                h4 {
                    font-size: 2rem;
                    font-family: 'Raleway', sans-serif;
                    font-weight: bold;
                    text-align: 'left';
                }

                p {
                    font-size: .85rem;
                    font-family: 'Raleway', sans-serif;
                    font-weight: 500;
                    text-align: left;
                }
            }

            .step2-center {

                padding: 1rem 0;

                .antecs {
                    .ant-checkbox-group {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;
                        
                        & .ant-checkbox-group-item {
                            display: flex !important;
                            align-items: center;
                        }
                    }
                    .ant-checkbox + span {
                        font-size: 1.25rem;
                    }
                }
            }

            .step2-footer {
                
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .action-wrapper {

                    button {
                        border-radius: 10px;
                        margin: 0 1rem;
                        min-width: 150px;
                    }
                }
            }
        }
        
    }

    .step3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: inherit;
        padding: 10rem;

        h4 {
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            font-weight: bold;
            margin-top: .5rem;
            margin-bottom: 0;
        }

        p {
            font-family: 'Raleway',sans-serif;
            font-weight: 300;
            padding-bottom: 0;
            font-size: 1rem;
        }

        button {
            border-radius: 10px;
            margin: 0 1rem;
            min-width: 150px;
        }
    }
    
`;