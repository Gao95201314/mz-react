import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { SearchBar,WhiteSpace, Toast} from 'antd-mobile';
import store from '@/store';
import './index.scss';
import axios from 'axios';
export default class City extends Component {
  constructor(props){
    super(props);
    this.state={
      curCity:store.getState().city.curCity,
      cities:{},
      moving: false,
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }
    this.unsubscribe=store.subscribe(()=>{
      this.setState({
        curCity:store.getState().city.curCity
      })
    })
  }
  //城市选择
  changeCity(val){
    store.dispatch({
      type:'SET_CURCITY',
      name:val
    })
  }
  //锚点定位
  srcollCity=(cityLetter)=>{
    Toast.info(cityLetter,0.6);
    if(cityLetter){
      //找到锚点
      let otherElement=document.getElementById(cityLetter);
      // 如果对应id的锚点存在，就跳转到锚点
      if(otherElement){
        otherElement.scrollIntoView({block:'start',behavior:'smooth'});
      }
    }
  }
  //城市列表
  componentWillMount(){
    axios.get('http://localhost:3000/api/cities.json').then(response=>{
      let result=response.data;
      // console.log(result);
      let cityObj = {'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': []};
      let city = {};
      result.forEach(item=>{
        for(var key in cityObj){
          if(key===item.pinyin.substring(0,1).toUpperCase()){
            cityObj[key].push(item);
          }
        }
      })
      for(var key in cityObj){
        if(cityObj[key].length>0){
          city[key]=cityObj[key];
        }
      }
      this.setState({
        cities:city,
      })
    })
  }
  //撤销
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div className="lv-city">
      <div className="header">
      <Link className="iconfont icon-zuojiantou" to='/'></Link>
      <div className="curCity">当前城市-{this.state.curCity}</div>
      <div className="ll"></div>
      </div>
      <SearchBar placeholder="请输入拼音或者城市名"/>
      <WhiteSpace />
      <div className="lv-indexlist">
          <ul className="lv-indexlist__content">
            {
              Object.keys(this.state.cities).map((letter,index1)=>{
                return <li className="lv-indexsection" key={index1}>
              <p className="lv-indexsection__index" id={letter}>{letter}</p>
              <ul>
                {
                  this.state.cities[letter].map((item,index2)=>{
                    return <li key={index2} onClick={this.changeCity.bind(this,item.name)}>{item.name}</li>
                  })
                }
              </ul>
            </li>
            })
            }
          </ul>
          
      <div className="lv-indexlist__nav">
           <ul>
             {
               this.state.labels.map((item,index)=>{
                 return <li key={index} onClick={this.srcollCity.bind(this,item)}>{item}</li>
               })
             }
            </ul> 
          </div>
        </div>  
        </div>
    )
  }
}
