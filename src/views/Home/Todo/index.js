import {connect} from 'react-redux';
import UI from './ui';

/*
  这个方法是用来映射 redux 仓库中的 state 怎么传递到 UI 组件

  state 参数就 是  store.getState() 返回的值，也就是仓库中的 state
*/
const mapStateToProps=(state)=>{
  return {
    myTodo:state.todos
  }
}

const mapDisoatchProps=(dispatch)=>{
  //自已写的中间件
  /* let next=dispatch;
  dispatch=function(action){
    console.log(111);
    next(action);
    console.log(222);
  } */
  return {
    /**
     * name 是 ui组件传递过来的
     */
    addTodo:(name)=>{
      dispatch({
        type:'ADD_TODO',
        // name:name
        name
      })

    },
    /**
     * i 是 下标，也是 需要 ui组件那边传递过来
     */
    deleteTodo:(i)=>{
      dispatch({
        type:'DELETE_TODO',
        index:i
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDisoatchProps
)(UI);

