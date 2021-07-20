import React from 'react'
import styled from 'styled-components';
import Topbar from './../../components/Topbar/Topbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, ImgWrapper, OptionsWrapper, TitleWrapper } from './styled';
import { Card } from 'react-bootstrap';
import afipSvg from './../../assets/img/logo-afip.svg';
import searchSvg from './../../assets/img/search-files.svg';
import addSvg from './../../assets/img/add-illustration.svg';
import AOS from 'aos';
import "aos/dist/aos.css";

const PageContainer = styled.div`
    margin: 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

const cardsData = [
    { 
        title: "Consultar AFIP", 
        text: "Buscar datos desde el servicio de AFIP", 
        href: "/app/personas-afip", 
        imgSrc: afipSvg, 
        imgWidth: "45%", 
        imgAlt: "img-afip"  
    },
    { 
        title: "Buscar", 
        text: "Consultar información en el sistema", 
        href: "/app/personas-view", 
        imgSrc: searchSvg, 
        imgWidth: "45%", 
        imgAlt: "img-search"
    },
    { 
        title: "Agregar", 
        text: "Dar de alta un nuevo registro en el sistema", 
        href: "/app/personas-new", 
        imgSrc: addSvg, 
        imgWidth: "35%",
        imgAlt: "img-add"  
    }
]

const Personas = () => {

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <React.Fragment>
            <Topbar />
            <PageContainer>
                <Container data-aos="fade-out">
                    <TitleWrapper>
                        <h3>Personas</h3>
                    </TitleWrapper>
                    <OptionsWrapper>
                        {cardsData.map(card => (
                            <Card key={card.imgAlt}>
                                <Link to={card.href}>
                                    <ImgWrapper>
                                        <img src={card.imgSrc} width={card.imgWidth} alt={card.imgAlt} />
                                    </ImgWrapper>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.text}</Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        ))}
                    </OptionsWrapper>
                </Container>
            </PageContainer>
        </React.Fragment>
    )
}

export default Personas;
