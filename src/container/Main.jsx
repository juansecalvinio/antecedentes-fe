import React from 'react'
import styled from 'styled-components';
import Topbar from './../components/Topbar/Topbar';

const Container = styled.div`
    background: #FFFFFF;
    height: 100%;
    margin: 0 auto;
    transition: all .3s ease;
`;

const PageContainer = styled.div`
    margin: 12rem 6rem; /** 8rem tiene height del Header */
    height: 100%;
    width: auto;
    position: relative;
`;

const Main = ({ children }) => {
    return (
        <Container>
            <Topbar />
            <PageContainer>
                {children}
            </PageContainer>
        </Container>
    )
}

export default Main;
