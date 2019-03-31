import React, { Component } from 'react';


class ItemSlick1 extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        var backgroundStyle = {
            backgroundImage: 'url(' + this.props.scrImage + ')',
        };
        return (
            <div className={"item-slick1 item"+this.props.id+"-slick1"} style={backgroundStyle}>
                <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                    <span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                        {this.props.caption1}
                    </span>
                    <h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                        {this.props.caption2}
                    </h2>
                    <div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                        {/* Button */}
                        <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSlick1;