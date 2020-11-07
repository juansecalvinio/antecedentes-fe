import styled from 'styled-components';

export const Container = styled.div`

    & header {
        background: rgb(24,104,142);
        background: linear-gradient(5deg, rgba(24,104,142,1) 0%, rgba(60,159,227,1) 66%, rgba(0,187,255,1) 100%);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: 320px;
        height: 334px;
        text-align: center;

        img {
            width: 350px;
            margin-top: 60px;
            align-self: center;
        }
    }

`;