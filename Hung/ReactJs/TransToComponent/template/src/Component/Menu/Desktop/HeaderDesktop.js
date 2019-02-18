import React, { Component } from 'react';
import TopBar from './TopBar.js';
import Logo from './Logo.js';
import Menu from './Menu.js';

class HeaderDesktop extends Component {
    render() {
        return (
            <div className="container-menu-header">
                <TopBar></TopBar>
                <div className="wrap_header">
                    {/* Logo */}
                    <Logo></Logo>
                    {/* Menu */}
                    <Menu></Menu>
                </div>
            </div>
        );
    }
}

export default HeaderDesktop;