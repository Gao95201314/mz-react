import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Search from './views/Search';
import Home from './views/Home';
import City from './views/City';
// import { setCity2,setCity} from '@/store/actions';

class App extends React.Component {
  componentDidMount() {
    //根据百度地图的api获取当前的城市
    /* eslint-disable*/
    let myCity = new BMap.LocalCity();
    myCity.get((result) => {
      //派发一个动作
      store.dispatch({
        type: 'SET_CURCITY',
        name: result.name
      })
      //  store.dispatch(setCity(result.name));
    });
    // store.dispatch(setCity2());
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {/* PSPSPS: 注意注意注意 ！！！ */}
            <Route path="/city" component={City}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/" component={Home}></Route>
            {/* ？？？ */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
