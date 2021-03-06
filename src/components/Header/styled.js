import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #FFFFFF;
    border-bottom: 1px solid #009EE3;
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

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {
        svg {
            width: 50%;
        }
    }
`;