import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
export default class Cinemas extends Component{
  render(){
    return (
      <div class="cinemas-list">
      <div class="header">
        <span class="ding">深圳<i class="iconfont icon-35_xiangxiajiantou"></i></span>
        <span class="itheme">影院</span>
        <i></i>
      </div>
      <div class="search">
      <mt-search v-model="searchText"></mt-search>
      </div>
      <div class="list" ref="wrapper">
        <div>
        <div class="contact" v-for="(item,index) in filterList" :key="index">
          <div class="left">
            <p>定</p>
            <p>定</p>
          </div>
          <div class="right">
            <p>￥
              <span>定</span>起
            </p>
            <p>距离未知</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
