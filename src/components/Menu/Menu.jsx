import React from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {
    MenuContainer,
    MenuHeader,
    MenuItems
} from './styled';
import { FaTimes as CloseIcon } from 'react-icons/fa'

const menuItems = [
    { name: 'Personas', link:'./personas' },
    { name: 'Antecedentes', link:'./antecs' },
]

const Menu = ({ menu, menuOff }) => {
    return (
        <MenuContainer className={ menu ? "active" : "unactive"}>
            <MenuHeader>
                <div className='close-menu'>
                    <CloseIcon color="#000000" size={20} onClick={menuOff} />
                </div>
                <Nav.Link href="/inicio">Inicio</Nav.Link>
            </MenuHeader>
            <MenuItems>
                <Nav defaultActiveKey="/" className="flex-column">
                    {menuItems.map(item => <Nav.Link key={item.name} href={item.link}>{item.name}</Nav.Link>)}
                </Nav>
            </MenuItems>
        </MenuContainer>
    )
}

export default Menu;
