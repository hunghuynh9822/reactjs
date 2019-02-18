import React, { Component } from 'react';

class HeaderCartNoti extends Component {
    render() {
        return (
            <div className="header-cart header-dropdown">
                <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        White Shirt With Pleat Detail Back
                        </a>
                        <span className="header-cart-item-info">
                        1 x $19.00
                        </span>
                    </div>
                    </li>
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src="images/item-cart-02.jpg" alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        Converse All Star Hi Black Canvas
                        </a>
                        <span className="header-cart-item-info">
                        1 x $39.00
                        </span>
                    </div>
                    </li>
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src="images/item-cart-03.jpg" alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        Nixon Porter Leather Watch In Tan
                        </a>
                        <span className="header-cart-item-info">
                        1 x $17.00
                        </span>
                    </div>
                    </li>
                </ul>
                <div className="header-cart-total">
                    Total: $75.00
                </div>
                <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                    {/* Button */}
                    <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        View Cart
                    </a>
                    </div>
                    <div className="header-cart-wrapbtn">
                    {/* Button */}
                    <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        Check Out
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCartNoti;