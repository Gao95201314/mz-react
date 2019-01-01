import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
    store.subscribe(()=>{
      this.setState({
        curCity:store.getState().city.curCity
      })
    })
  }
  changeCity(val){
    store.dispatch({
      type:'SET_CURCITY',
      name:val
    })
  }
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
  render() {
    return (
      <div className="lv-city">
      <div className="header">
      <Link className="iconfont icon-zuojiantou" to='/'></Link>
      <div className="curCity">当前城市-{this.state.curCity}</div>
      <div className="ll"></div>
      </div>
      <div className="lv-indexlist">
          <ul className="lv-indexlist__content">
            {
              Object.keys(this.state.cities).map((letter,index1)=>{
                return <li className="lv-indexsection" key={index1}>
              <p className="lv-indexsection__index">{letter}</p>
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
                 return <li key={index} onClick={this.findCity}>{item}</li>
               })
             }
            </ul> 
          </div>
        </div>  
        </div>
    )
  }
}
