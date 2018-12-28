import React,{Fragment}from 'react';
import Tabber from '@/components/Tabber';
import Nowplaying from '@/components/Nowplaying';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './index.scss';
import pic1 from '@/images/pic-1.jpg';
import pic2 from '@/images/pic-2.jpg';
import pic3 from '@/images/pic-3.jpg';
import pic4 from '@/images/pic-4.jpg';
class HomeFilms extends React.Component {
constructor(props){
  super(props);
  this.state={
    tabs:[
      {id:'noePlaying',href: "/films/nowplaying",name:'正在上映'},
      {id:'soonPlay',href: "/films/soonplay",name:'即将上映'}
    ]
  }
}
componentDidMount(){
    new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    pagination : {
    el: '.swiper-pagination',
    }
  })
}
  render() {
    return (
      <Fragment>
        <div className="swiper-container">
          <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={pic1} alt=""/></div>
              <div className="swiper-slide"><img src={pic2} alt=""/></div>
              <div className="swiper-slide"><img src={pic3} alt=""/></div>
              <div className="swiper-slide"><img src={pic4} alt=""/></div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
        <Tabber tab={this.state.tabs}></Tabber>
        <Nowplaying></Nowplaying>
      </Fragment>
    )
  }
}

export default HomeFilms;
