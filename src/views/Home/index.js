import React, { Component } from 'react';
import Navbar from '@/components/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomeCenter from '@/views/Home/HomeCenter';
import HomeCinemas from '@/views/Home/HomeCinemas';
import HomeFilms from '@/views/Home/HomeFilms';

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      NavTabs:[
        { key: 'films', href: "/films", icon: "icon-films", name: '电影' },
        { key: 'cinemas', href: "/cinemas", icon: "icon-cinemas", name: '影院' },
        { key: 'center', href: "/center", icon: "icon-center", name: '我的' }
      ]
    }
  }
  render(){
    return (
      <div>
         <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/cinemas" component={HomeCinemas}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>
         <Navbar tabs={this.state.NavTabs}></Navbar>
      </div>
    )
  }
}
