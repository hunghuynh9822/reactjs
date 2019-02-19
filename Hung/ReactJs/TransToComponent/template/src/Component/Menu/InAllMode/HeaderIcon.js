import React, { Component } from 'react';
import IconUser from './HeaderIconUser.js';
import IconCart from './HeaderIconCart.js';



class HeaderIcon extends Component {
    getClass = () => {
        if (this.props.mode === 'desktop'){
            return 'header-icons';
        }
        else if(this.props.mode === 'mobi'){
            return 'header-icons-mobile'
        }
    }
    render() {
        return (
            <div className={this.getClass()}>
                <IconUser></IconUser>
                <span className="linedivide1"></span>
                <IconCart></IconCart>
            </div>
        );
    }
}

export default HeaderIcon;