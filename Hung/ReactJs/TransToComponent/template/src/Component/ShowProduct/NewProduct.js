import React, { Component } from 'react';
import swal from 'sweetalert';
const $ = window.$;

class NewProduct extends Component {
    componentDidMount() {
        /*[ Slick2 ]
        ===========================================================*/
        $('.slick2').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick2'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]    
        });
        /*[ Block2 button wishlist ]
        ===========================================================*/
        $('.block2-btn-addwishlist').on('click', function(e){
            e.preventDefault();
            $(this).addClass('block2-btn-towishlist');
            $(this).removeClass('block2-btn-addwishlist');
            $(this).off('click');
        });

        $('.block2-btn-addcart').each(function(){
            var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to cart !", "success");
            });
        });

        $('.block2-btn-addwishlist').each(function(){
            var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");
            });
        });

    }
    
    render() {
        return (
            <section className="newproduct bgwhite p-t-45 p-b-105">
                <div className="container">
                    <div className="sec-title p-b-60">
                    <h3 className="m-text5 t-center">
                        Featured Products
                    </h3>
                    </div>
                    {/* Slide2 */}
                    <div className="wrap-slick2">
                    <div className="slick2">
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="images/item-02.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Herschel supply co 25l
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $75.00
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src="images/item-03.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Denim jacket blue
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $92.50
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src="images/item-05.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Coach slim easton black
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $165.90
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                            <img src="images/item-07.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Frayed denim shorts
                            </a>
                            <span className="block2-oldprice m-text7 p-r-5">
                                $29.50
                            </span>
                            <span className="block2-newprice m-text8 p-r-5">
                                $15.90
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="images/item-02.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Herschel supply co 25l
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $75.00
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src="images/item-03.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Denim jacket blue
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $92.50
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src="images/item-05.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Coach slim easton black
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                $165.90
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                            <img src="images/item-07.jpg" alt="IMG-PRODUCT" />
                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="block2-txt p-t-20">
                            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                Frayed denim shorts
                            </a>
                            <span className="block2-oldprice m-text7 p-r-5">
                                $29.50
                            </span>
                            <span className="block2-newprice m-text8 p-r-5">
                                $15.90
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default NewProduct;