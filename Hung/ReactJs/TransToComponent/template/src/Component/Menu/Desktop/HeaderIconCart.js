import React, { Component } from 'react';
import IconNoti from './HeaderIconNoti.js';
import CartItems from './HeaderCartItems.js';

class HeaderIconCart extends Component {
    render() {
        return (
            <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                <IconNoti count = "0" ></IconNoti>
                {/* Header cart noti */}
                <CartItems></CartItems>
            </div>
        );
    }
}

export default HeaderIconCart;