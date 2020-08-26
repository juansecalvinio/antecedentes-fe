import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    transition: all .3s ease;

    .card {
        min-height: 200px;
        transition: all .3s ease;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
        border: 1px solid #009EE3;
    }
`;