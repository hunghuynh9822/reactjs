import React, { Component } from 'react';



class Logo extends Component {
    constructor(props) {
        super(props);
        
    }
    
    getClass = () => {
        if (this.props.mode === 'desktop'){
            return 'logo';
        }
        else if(this.props.mode === 'mobi'){
            return 'logo-mobile'
        }
    }

    render() {
        return (
            <a href="index.html" className={this.getClass()}>
                <img src="images/icons/logo.png" alt="IMG-LOGO" />
            </a>
        );
    }
}

export default Logo;