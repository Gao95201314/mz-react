import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store from '@/store';
import './index.scss';
export default class City extends Component {
  constructor(props){
    super();
    this.state={
      curCity:store.getState().city.curCity,
    }
    store.subscribe(()=>{
      this.setState({
        curCity:store.getState().city.curCity
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
            <li className="lv-indexsection">
              <p className="lv-indexsection__index">A</p>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
              </ul>
            </li>
            <li className="lv-indexsection">
              <p className="lv-indexsection__index">B</p>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
              </ul>
            </li>
            <li className="lv-indexsection">
              <p className="lv-indexsection__index">C</p>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
              </ul>
            </li>
            <li className="lv-indexsection">
              <p className="lv-indexsection__index">D</p>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
              </ul>
            </li>
            <li className="lv-indexsection">
              <p className="lv-indexsection__index">E</p>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
                <li>安康</li>
                <li>安康</li>
                <li>安康</li>
                <li>安康</li>
                <li>安康</li>
                <li>安康</li>
              </ul>
            </li>
          </ul>
          <div className="lv-indexlist__nav">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
