import React, { Component } from 'react';
import DesktopHeader from './Desktop/HeaderDesktop.js';
import HeaderMobile from './Mobile/HeaderMobile.js';
import MenuMobile from './Mobile/MenuMobile.js';
const $ = window.$

class MainMenu extends Component {
    
    render() {
        return (
            // <!-- Header -->
	        <header className="header1">
                <DesktopHeader></DesktopHeader>
                {/* Header Mobile */}
                <HeaderMobile></HeaderMobile>
                {/* Menu Mobile */}
                <MenuMobile></MenuMobile>
                {/* <!-- Container Selection1 --> */}
                <div id="dropDownSelect1"></div>
            </header>
        );
    }
}

export default MainMenu;