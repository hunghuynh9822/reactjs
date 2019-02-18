import React, { Component } from 'react';
const $ = window.$;
const jQuery = require('jquery');

class HeaderCartItems extends Component {
    componentDidMount() {
        /*[ Show header dropdown ]
    ===========================================================*/
    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){ 
            
                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = -1;
                }
                else {
                    for (var i = 0; i < menu.length; i++) {
                        $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                    }

                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = jQuery.inArray( this, menu );
                }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });
    }
    
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

export default HeaderCartItems;