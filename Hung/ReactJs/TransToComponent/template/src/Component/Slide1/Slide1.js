import React, { Component } from 'react';
import ItemSlick1 from './ItemSlick1';
const $ = window.$;

class Slide1 extends Component {
    componentDidMount() {
        /*[ Slick1 ]
        ===========================================================*/
        var itemSlick1 = $('.slick1').find('.item-slick1');
        var action1 = [];
        var action2 = [];
        var action3 = [];
        var cap1Slide1 = [];
        var cap2Slide1 = [];
        var btnSlide1 = [];

        for(var i=0; i<itemSlick1.length; i++) {
          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
        }


        $('.slick1').on('init', function(){

            action1[0] = setTimeout(function(){
                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
            },200);

            action2[0] = setTimeout(function(){
                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
            },1000);

            action3[0] = setTimeout(function(){
                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
            },1800);              
        });


        $('.slick1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // fade: true,
            dots: false,
            appendDots: $('.wrap-slick1-dots'),
            dotsClass:'slick1-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            appendArrows: $('.wrap-slick1'),
            prevArrow:'<button class="arrow-slick1 prev-slick1"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick1 next-slick1"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick1').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick1.length; i++) {

              clearTimeout(action1[i]);
              clearTimeout(action2[i]);
              clearTimeout(action3[i]);


              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

            }

            action1[currentSlide] = setTimeout(function(){
                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2[currentSlide] = setTimeout(function(){
                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3[currentSlide] = setTimeout(function(){
                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');
            },1800);            
        });
    }
    constructor(props) {
        super(props);
        this.state={
                slickItems : [
                {
                    scrImage:'https://www.chotot.com/kinhnghiem/wp-content/uploads/2018/05/may-tinh-de-ban-cho-tot.jpg',
                    caption1:'Women Collection 2018',
                    caption2:'New arrivals'
                },
                {
                    scrImage:'images/master-slide-02.jpg',
                    caption1:'Women Collection 2019',
                    caption2:'New arrivals'
                },
                {
                    scrImage:'images/master-slide-02.jpg',
                    caption1:'Women Collection 2020',
                    caption2:'New arrivals'
                },
                {
                    scrImage:'images/master-slide-02.jpg',
                    caption1:'Women Collection 2018',
                    caption2:'New arrivals'
                }
            ],
        }
    }
    
    ItemSlick1s =()=> this.state.slickItems.map((item,index)=>{
        return (
            <ItemSlick1 key={index} id={index} scrImage={item.scrImage} caption1={item.caption1} caption2={item.caption2}></ItemSlick1>
        )
    })

    render() {
        return (
            <section className="slide1">
                <div className="wrap-slick1">
                    <div className="slick1">
                        {this.ItemSlick1s()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Slide1;