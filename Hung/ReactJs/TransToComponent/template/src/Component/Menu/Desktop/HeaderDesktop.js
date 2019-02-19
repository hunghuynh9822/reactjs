import React, { Component } from 'react';
import TopBar from './TopBar.js';
import Logo from '../InAllMode/Logo.js';
import Menu from './Menu.js';
import HeaderIcon from '../InAllMode/HeaderIcon.js';


class HeaderDesktop extends Component {
    mode = 'desktop';
    render() {
        return (
            <div className="container-menu-header">
                <TopBar></TopBar>
                <div className="wrap_header">
                    {/* Logo */}
                    <Logo mode={this.mode}></Logo>
                    {/* Menu */}
                    <Menu></Menu>
                    {/* Header Icon */}
                    <HeaderIcon mode={this.mode}></HeaderIcon>
                </div>
            </div>
        );
    }
}

export default HeaderDesktop;