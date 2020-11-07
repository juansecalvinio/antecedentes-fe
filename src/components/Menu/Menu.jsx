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
    { name: 'Personas', link:'/app/personas' },
    { name: 'Antecedentes', link:'/app/antecs' },
]

const Menu = ({ menu, menuOff }) => {
    return (
        <MenuContainer className={ menu ? "active" : "unactive"}>
            <MenuHeader>
                <div className='close-menu'>
                    <CloseIcon color="#000000" size={20} onClick={menuOff} />
                </div>
                <Link to="/app" onClick={menuOff}>Inicio</Link>
            </MenuHeader>
            <MenuItems>
                <Nav defaultActiveKey="/" className="flex-column">
                    {menuItems.map(item => <Link onClick={menuOff} key={item.name} to={item.link}>{item.name}</Link>)}
                </Nav>
            </MenuItems>
        </MenuContainer>
    )
}

export default Menu;
