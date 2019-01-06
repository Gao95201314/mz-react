import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
class HomeCenter extends React.Component {
  render() {
    return (
      <div className="center-view">
        <header id="header">
          <div className="tou">
            <i className="iconfont icon-shu1"></i>
          </div>
          <h2>
            <Link to="/user/login">立即登录</Link>
          </h2>
        </header>
        <main id="main">
          <div className="dingdan">
            <h3>
              <i className="iconfont icon-dingdan"></i>
              <span>电影订单</span>
            </h3>
            <h3>
              <i className="iconfont icon-pintuan"></i>
              <span>拼团订单</span>
            </h3>
          </div>
          <div className="ul">
            <Link tag="div" className="card" to="/user/card">
              <div className="list">
                <i className="iconfont icon-ziyuan"></i>
                <span>卖座卡</span>
              </div>
              <div className="list1">
                <i className="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
              </div>
            </Link>
            <Link className="balace" tag="div" to="/user/account">
              <div className="list" >
                <i className="iconfont icon-yue"></i>
                <span>余额</span>
              </div>
              <div className="list1">
                <p>￥0</p>
                <i className="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
              </div>
            </Link>
            <Link className="set" tag="div" to="/user/set">
              <div className="list">
                <i className="iconfont icon-shezhi"></i>
                <span>设置</span>
              </div>
              <div className="list1">
                <i className="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
              </div>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

export default HomeCenter;
