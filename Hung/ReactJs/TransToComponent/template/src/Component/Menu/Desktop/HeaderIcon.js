import React, { Component } from 'react';
import IconUser from './HeaderIconUser.js';
import IconCart from './HeaderIconCart.js';

class HeaderIcon extends Component {
    render() {
        return (
            <div className="header-icons">
                <IconUser></IconUser>
                <span className="linedivide1"></span>
                <IconCart></IconCart>
            </div>
        );
    }
}

export default HeaderIcon;