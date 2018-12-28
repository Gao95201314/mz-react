import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class Tabber extends React.Component{
  render(){
    return (
      <ul className="gao-tabber">
      {
        this.props.tab.map(item=>{
          return (
            <li className='gao-tabber-item'
            key={item.id}>
            <NavLink to={item.href}>
            {item.name}
            </NavLink>
            </li>
          )
        })
      }
    </ul>
    )
  }
}
export default Tabber;
