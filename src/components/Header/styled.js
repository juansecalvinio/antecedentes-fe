import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #009EE3;
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    left: 0;
    top: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    position: fixed;
    width: 100%;
    z-index: 1;

    & svg:hover {
        cursor: pointer;
    }
`;