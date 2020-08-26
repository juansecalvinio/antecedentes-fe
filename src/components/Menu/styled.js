import styled from 'styled-components'

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 20rem;
    background: #FFFFFF;
    padding: 1rem 2rem;
    transition: all .3s ease;

    a, a:hover {
        text-decoration: none;
    }

    &.active {
        z-index: 1500;
    }

    &.unactive {
        left: -20rem;
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid #D8D8D8;

    .close-menu {
        align-items: center;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        height: 100%;
        line-height: 100%;

        span {
            margin-left: 0.2rem;
        }
    }
`;

export const MenuItems = styled.div`
    .flex-column.nav {
        font-size: 20px;
    }
`;