import React from 'react';
import './index.less';

class Tabber extends React.Component{
  render(){
    return (
      <ul className="gao-tabber">
      {
        this.props.tab.map(item=>{
          return (
            <li className={['gao-tabber-item',this.props.curTab===item.id?'z-act':''].join(' ')} 
            key={item.id}
            onClick={()=>{this.props.hh(item.id)}}>
            {item.name}</li>
          )
        })
      }
    </ul>
    )
  }
}
export default Tabber;
