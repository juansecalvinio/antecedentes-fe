import React from 'react';
import { connect } from 'react-redux';
import { TopbarContainer, OverlayMenu } from './styled'
// import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu'
import { menuOn, menuOff } from './../../store/actions/appActions';

const Topbar = ({ menu, menuOn, menuOff }) => {
    return (
        <TopbarContainer>
           <Hero menuOn={menuOn} />
           <Menu menu={menu} menuOff={menuOff} />
           <OverlayMenu className={ menu ? 'active' : 'unactive'} /> 
        </TopbarContainer>
    )
}

const mapStateToProps = state => {
    return {
        menu: state.appReducer.menu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        menuOn: () => dispatch(menuOn()),
        menuOff: () => dispatch(menuOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
