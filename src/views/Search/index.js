import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BScroll from 'better-scroll';
import './index.scss';
class HomeCinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inpval: "",
      listres: []
    }
  }
  //获取输入框的值
  inpVal() {
    let inpVal = this.refs["inp"].value;
    if (inpVal) {
      this.refs["city"].style.display = "none";
      this.refs["wrapper"].style.display = "block";
      let newArr = this.state.listres.filter(item => {
        return item.name.indexOf(inpVal) > -1;
      })
      this.setState({
        list: newArr
      })
    } else {
      this.refs["city"].style.display = "block";
      this.refs["wrapper"].style.display = "none";
    }
  }
  componentDidMount() {
    this.scroll = new BScroll(this.refs.wrapper);
    axios.get('http://localhost:3000/api/cinemas.json').then(res => {
      this.setState({
        listres: res.data
      })
      console.log(this.state.listres);
    })
  }
  render() {
    return (
      <div className="gao-search">
        <div className="gao-search-header">
          <i className="iconfont icon-zuojiantou"></i>
          <input type="search" ref="inp" placeholder="输入影院名称" onChange={this.inpVal.bind(this)} />
          <span>取消</span>
        </div>
        <div className="gao-search-content" ref="city">
          <p>离你最近</p>
          <p>英皇电影城(东海缤纷店)</p>
          <p>中国国际影城(深圳深国投店)</p>
          <p>星美影商城(深圳京基IMAX店)</p>
          <p><span>江湖影院侨香店</span><span>深圳中影金典电影城</span></p>
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
