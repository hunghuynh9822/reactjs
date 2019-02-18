import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="wrap_menu">
                <nav className="menu">
                    <ul className="main_menu">
                    <li>
                        <a href="index.html">Home</a>
                        <ul className="sub_menu">
                        <li><a href="index.html">Homepage V1</a></li>
                        <li><a href="home-02.html">Homepage V2</a></li>
                        <li><a href="home-03.html">Homepage V3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html">Shop</a>
                    </li>
                    <li className="sale-noti">
                        <a href="product.html">Sale</a>
                    </li>
                    <li>
                        <a href="cart.html">Features</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;