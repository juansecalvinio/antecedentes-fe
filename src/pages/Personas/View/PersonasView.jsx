import React from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from '../../../components/Topbar/Topbar';
import { Container, ImgWrapper, OptionsWrapper } from '../styled';
import { Button } from 'antd';
import { FaArrowLeft } from 'react-icons/fa';
import AOS from 'aos';
import "aos/dist/aos.css";


const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    div.arrow-title {

        display: flex;
        align-items: center;

        h3 {
            color: #FFFFFF;
            font-size: 2rem;
            font-family: 'AileronHeavyItalic', sans-serif;
            text-align: center;
            margin: 0 2rem;
        }

        svg:hover {
            cursor: pointer;
        }

    }

    button {
        border-radius: 10px;
        min-width: 150px;
    }

`;

const TableWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 700px;
    margin-top: 2rem;
    
`;

const PersonasView = () => {

    const history = useHistory();

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container data-aos="fade-out">
                    <TitleWrapper>
                        <div className="arrow-title">
                            <FaArrowLeft color="#FFFFFF" size={30} onClick={()=>history.goBack()} />
                            <h3>Datos de personas</h3>
                        </div>
                        <Link to="/app/personas-new">
                            <Button type="primary" size="large">Agregar</Button>
                        </Link>
                    </TitleWrapper>
                    <TableWrapper>
                        
                    </TableWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

export default PersonasView;
