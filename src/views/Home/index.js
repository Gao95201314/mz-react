import React, { Component } from 'react';
import Navbar from '@/components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeCenter from '@/views/Home/HomeCenter';
import HomeCinemas from '@/views/Home/HomeCinemas';
import HomeFilms from '@/views/Home/HomeFilms';
import HomeGroup from '@/views/Home/HomeGroup';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavTabs: [
        { key: 'films', href: "/films", icon: "icon-dianying", name: '电影' },
        { key: 'cinemas', href: "/cinemas", icon: "icon-yingyuan", name: '影院' },
        { key: 'group', href: "/group", icon: "icon-pintuan", name: '9.9拼团' },
        { key: 'center', href: "/center", icon: "icon-wode-copy", name: '我的' }
      ]
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/cinemas" component={HomeCinemas}></Route>
          <Route path="/group" component={HomeGroup}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>
        <Navbar tabs={this.state.NavTabs}></Navbar>
      </div>
    )
  }
}
