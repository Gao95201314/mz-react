import React from 'react';
import './index.scss';
import axios from 'axios';

class FilmList extends React.Component {
  constructor() {
    super();
    this.state = {
      films: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/films.json').then((response) => {
      let res = response.data;
      this.setState({
        films: res
      })
    })
  }
  render() {
    return (
      <div className="film-list-content">
        <ul>
          {
            this.state.films.map((item, index) => {
              return <li key={index}>
                <div className="img">
                  <img src={item.poster} alt="" />
                </div>
                <div className="info">
                  <div>
                    <span className="name">{item.name}</span>
                    <span className="type">{item.filmType.name}</span>
                  </div>
                  <div>
                    <span className="label">观众评分</span>
                    <span className="grade">{item.grade}</span>
                  </div>
                  <div>
                    <span className="label">主演:{item.actors && item.actors.map(item => {
                      return item.name
                    })}</span>
                  </div>
                  <div>
                    <span className="label">美国 澳大利亚 | {item.runtime}分钟</span>
                  </div>
                </div>
                <div className="buy">购票</div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default FilmList;
