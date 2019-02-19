import React, { Component } from 'react';
import HeaderIcon from '../InAllMode/HeaderIcon.js';
import Logo from '../InAllMode/Logo.js';
class HeaderMobile extends Component {
    mode = 'mobi';
    render() {
        return (
            <div className="wrap_header_mobile">
                {/* Logo moblie */}
                <Logo mode={this.mode}></Logo>
                {/* Button show menu */}
                <div className="btn-show-menu">
                    {/* Header Icon mobile */}
                    <HeaderIcon mode={this.mode}></HeaderIcon>
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                        <span className="hamburger-inner" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMobile;