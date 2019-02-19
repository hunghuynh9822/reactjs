import React, { Component } from 'react';
import Item from './HeaderCartItem.js';
import NumberFormat from 'react-number-format';
import $ from 'jquery'
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

        $(window).click(function(){
            for (var i = 0; i < menu.length; i++) {
                $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
            }
            sub_menu_is_showed = -1;
        });
    }

    constructor(props) {
        super(props);
        this.state={
            cartItems : [
                {
                    id: 1,
                    tittle: "White Shirt With Pleat Detail Back",
                    image:"images/item-cart-01.jpg",
                    count:1,
                    price:19
                },
                {
                    id: 2,
                    tittle: "Converse All Star Hi Black Canvas",
                    image:"images/item-cart-02.jpg",
                    count:1,
                    price:39000
                },
                {
                    id: 3,
                    tittle: "Nixon Porter Leather Watch In Tan",
                    image:"images/item-cart-03.jpg",
                    count:1,
                    price:17
                }
            ]
        };
    }
    
    total = () => {
        var sum = 0;
        this.state.cartItems.forEach(e => {
            sum += e.count * e.price;
        });
        return sum;
    }
    
    render() {
        var items = this.state.cartItems.map((e,i) => (
            <Item key={i} tittle={e.tittle} image={e.image} count={e.count} price={e.price}></Item>
        ));
        return (
            <div className="header-cart header-dropdown">
                <ul className="header-cart-wrapitem">
                    {items}
                </ul>
                <div className="header-cart-total">
                    Total: <NumberFormat value={this.total()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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