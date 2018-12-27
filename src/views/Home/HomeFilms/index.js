import React from 'react';
import Tabber from '@/components/Tabber';

class HomeFilms extends React.Component {
constructor(){
  super();
  this.state={
    curTab:'nowPlaying',
    tabs:[
      {id:'noePlaying',name:'正在上映'},
      {id:'soonPlay',name:'即将上映'}
    ]
  }
}
  render() {
    return (
      <div>
        {/* <Tabber tab={this.state.tabs} curTab={this.state.curTab} hh={this.changeColor.bind(this)}></Tabber> */}
      </div>
    )
  }
}

export default HomeFilms;
