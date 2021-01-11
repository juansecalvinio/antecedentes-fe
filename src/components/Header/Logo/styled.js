import styled from 'styled-components';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-size: 1.5rem;
        margin: 0 auto;
        text-decoration: none;
    }

    @media screen 
    and (min-device-width: 360px) 
    and (max-device-height: 820px) {
        
        img {
            width: 115%;
        }
    }
`;