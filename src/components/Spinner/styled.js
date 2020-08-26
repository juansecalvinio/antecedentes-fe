import styled from 'styled-components';

export const StyledSpinner = styled.div`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    background-color: rgba(51, 51, 51, 0.7);
`;