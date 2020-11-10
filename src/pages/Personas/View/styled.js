import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all .3s ease;

    & h2 {
        font-family: 'AileronHeavyItalic', sans-serif;
    }

    .filter-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem;
        margin-top: 2rem;

        .input-group {
            width: 50%;
        }

    }

    .persons-wrapper {
        border: none;
    }
`;

export const PersonContainer = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 15px;
    box-shadow: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;
    padding: 1.5rem;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
        border: 1px solid #009EE3;
    }

    .info {
        
        .info-data {
            span.label {
                font-family: 'AileronLight', sans-serif;
                font-size: 1.3rem;
            }
            span.value {
                font-family: 'AileronHeavyItalic', sans-serif;
                font-size: 1.5rem;
                margin-left: 1rem;
            }
        }
    }

    .actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        button {
            margin: .2rem;
        }
    }
`;