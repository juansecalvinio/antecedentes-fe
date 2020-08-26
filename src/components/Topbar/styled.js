import styled from 'styled-components'

export const TopbarContainer = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: all .3s ease;
    height: 100%;
    bottom: initial;
`;

export const OverlayMenu = styled.div`
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    transition: all .3s ease;
    height: 100%;
    width: 100%;

    &.active {
        opacity: 1;
        position: fixed;
        z-index: 1400;
    }

    &.unactive {
        opacity: 0;
        position: relative;
    }
`;