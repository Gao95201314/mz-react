import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BScroll from 'better-scroll';
import './index.scss';
class HomeCinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    this.scroll = new BScroll(this.refs.wrapper);
    axios.get('http://localhost:3000/api/cinemas.json').then(res => {
      this.setState({
        list: res.data
      })
    })
  }
  render() {
    return (
      <div className="cinemas-list">
        <div className="header">
          <span className="ding">深圳<i className="iconfont icon-xiajiantou"></i></span>
          <span className="itheme">影院</span>
          <Link to="/search"><i className="iconfont icon-fangdajing1"></i></Link>
        </div>
        <div className="allcity">
          <p>全城<i className="iconfont icon-xiajiantou"></i></p>
          <p>最近去过<i className="iconfont icon-xiajiantou"></i></p>
        </div>
        <div className="list" ref="wrapper">
          <div>
            {
              this.state.list.map((item, index) => {
                return (
                  <div className="contact" key={index}>
                    <div className="left">
                      <p>{item.name}</p>
                      <p>{item.address}</p>
                    </div>
                    <div className="right">
                      <p>￥<span>{item.lowPrice / 100}</span>起</p>
                      <p>距离未知</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HomeCinemas;
