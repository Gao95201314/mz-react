import React from 'react';
import { List, InputItem, WhiteSpace,Button,Flex,Icon,Toast} from 'antd-mobile';
import store from '@/store';

class Todo extends React.Component {
  constructor(props){
    super();
    this.state={
      value:'',
      myTodo :store.getState().todos,
    }
    this.handleVal=this.handleVal.bind(this);
    this.addTodo=this.addTodo.bind(this);
    //监听仓库的变化
    store.subscribe(()=>{
      this.setState({
        myTodo :store.getState().todos,
      })
    })
  }
  handleVal(val){
  this.setState({
    value:val
  })
  }
  addTodo(){
    if(!this.state.value){
      Toast.info('请输入内容！',1,()=>{
        //让input主动获取焦点
        this.refs['myInput'].focus();
      });
      return; 
    }
    //派发一个动作
    store.dispatch({
      type:'ADD_TODO',
      name:this.state.value
    })
    //清空value
    this.setState({
      value:'',
    })
  }
  deleteTodo(i){
    store.dispatch({
      type:'DELETE_TODO',
      index:i,
    })
  }
  render() {
    return (
      <div className="todo">
      <Flex>
      <Flex.Item style={{flex:3}}>
      <InputItem type="text" ref="myInput" placeholder="输入内容" value={this.state.value} onChange={this.handleVal}></InputItem>
      </Flex.Item>
      <Flex.Item style={{flex:1}}><Button type="primary" onClick={this.addTodo}>添加</Button> </Flex.Item>
      </Flex>
      <WhiteSpace></WhiteSpace>
      <List>
        {
        this.state.myTodo.map((item,index) => {
          return (
            <List.Item key={index} 
            extra={<Icon type="cross-circle" onClick={this.deleteTodo.bind(this,index)}></Icon>}
            >
            {item}
            </List.Item>
          )
        })
      }
      </List>
      </div>
    )
  }
}

export default Todo;
