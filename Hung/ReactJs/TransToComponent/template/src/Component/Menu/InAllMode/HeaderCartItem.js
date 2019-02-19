import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class HeaderCartItem extends Component {
    render() {
        return (
            <li className="header-cart-item">
                <div className="header-cart-item-img">
                    <img src={this.props.image} alt="IMG" />
                </div>
                <div className="header-cart-item-txt">
                    <a href="#" className="header-cart-item-name">
                        {this.props.tittle}
                    </a>
                    <span className="header-cart-item-info">
                        {this.props.count} x <NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </span>
                </div>
            </li>
        );
    }
}

export default HeaderCartItem;