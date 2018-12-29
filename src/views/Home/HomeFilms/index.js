import {connect} from 'react-redux';
import UI from './ui';


const mapStateToProps=(state)=>{
  return {
    curCity:state.city.curCity,
    tabs:[
      {id:'noePlaying',href: "/films/nowplaying",name:'正在上映'},
      {id:'soonPlay',href: "/films/soonplay",name:'即将上映'}
    ]
  }
}
export default connect(
  mapStateToProps
)(UI);






/* import React,{Fragment}from 'react';
import Tabber from '@/components/Tabber';
import Nowplaying from '@/components/Nowplaying';
import {Link} from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import store from '@/store';
import './index.scss';
import pic1 from '@/images/pic-1.jpg';
import pic2 from '@/images/pic-2.jpg';
import pic3 from '@/images/pic-3.jpg';
import pic4 from '@/images/pic-4.jpg';
class HomeFilms extends React.Component {
constructor(props){
  super(props);
  this.state={
    curCity:store.getState().city.curCity,
    tabs:[
      {id:'noePlaying',href: "/films/nowplaying",name:'正在上映'},
      {id:'soonPlay',href: "/films/soonplay",name:'即将上映'}
    ]
  }
  store.subscribe(()=>{
    this.setState({
      curCity:store.getState().city.curCity,
    })
  })
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
        {
        //轮播图
        }
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
        {
          //定位城市
        }
        <Link to='/city' className='city-fixed'>
        <span>{this.state.curCity}</span>
        <i className="iconfont icon-xiajiantou"></i>
        </Link>
        <Tabber tab={this.state.tabs}></Tabber>
        <Nowplaying></Nowplaying>
      </Fragment>
    )
  }
}
export default HomeFilms; */

