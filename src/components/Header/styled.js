import styled from 'styled-components';

export const HeaderContainer = styled.div`
    ${'' /* background: #FFFFFF; */}
    background: transparent;
    ${'' /* border-bottom: 1px solid #009EE3; */}
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    left: 0;
    top: 0;
    padding-right: 2rem;
    width: 100%;
    z-index: 1;

    & svg:hover {
        cursor: pointer;
    }

    div.right-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {
        svg {
            width: 50%;
        }
    }
`;