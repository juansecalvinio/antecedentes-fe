import styled from 'styled-components';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 60%;
    }

    @media screen
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {
        
        img {
            width: 115%;
        }
    }
`;