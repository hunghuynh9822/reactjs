import React, { Component } from 'react';

class HeaderIconNoti extends Component {
    render() {
        return (
            <span className="header-icons-noti">{this.props.count}</span>
        );
    }
}

export default HeaderIconNoti;