import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { HeaderContainer } from './styled'
import Logo from './Logo/Logo';
import { FaBars as MenuIcon, FaPowerOff as Logout } from 'react-icons/fa'
import { logoutUser } from './../../store/actions/loginActions';

const Header = ({ menuOn, logoutUser, logged }) => {

    const history = useHistory();
    
    const logout = () => {
        logoutUser();
        setTimeout(() => history.push("/app"), 1500);
    }


    return (
        <HeaderContainer>
            <MenuIcon color="#FFFFFF" size={30} onClick={menuOn} />
            <div className="right-wrapper">
                <Link to="/app">
                    <Logo />
                </Link>
                { logged && <Logout color="#FFFFFF" size={30} onClick={logout} /> }
            </div>
        </HeaderContainer>
    )
}

const mapStateToProps = state => {
    return {
        logged: state.loginReducer.logged,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
