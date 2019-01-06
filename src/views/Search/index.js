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
  render() {
    return (
      <div className="cinemas-list">
        嘻嘻
      </div>
    )
  }
}

export default HomeCinemas;
