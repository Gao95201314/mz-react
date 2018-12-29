/*
 这个是 todo 的ui组件，只有页面的展示，不需要与 redux 做操作的。

 ui组件的数据来源，都是通过 props 来接收的。

 PS：一般情况下我们的ui组件就可以写成 函数的那种方式。特殊情况下，这时还是可以将ui组件做成 class 类的方式
*/
import React from 'react';
import { List, InputItem, WhiteSpace,Button,Flex,Icon,Toast} from 'antd-mobile';

class UI extends React.Component {
  constructor(props){
    super();
    this.state={
      value:''
    }
    this.handleVal=this.handleVal.bind(this);
  }
  handleVal(val){
    this.setState({
      value:val
    })
  }
  render() {
    return (
      <div className="todo">
      <Flex>
      <Flex.Item style={{flex:3}}>
      <InputItem type="text" ref="myInput" placeholder="输入内容" value={this.state.value} onChange={this.handleVal}></InputItem>
      </Flex.Item>
      <Flex.Item style={{flex:1}}>
      <Button type="primary" onClick={()=>{
        //判断是否可以add
        if(!this.state.value){
          Toast.info('请输入',1,()=>{
            this.refs.myInput.focus();
          })
          return;
        }
        this.props.addTodo(this.state.value);
      }}>添加</Button> </Flex.Item>
      </Flex>
      <WhiteSpace></WhiteSpace>
      <List>
        {
        this.props.myTodo.map((item,index) => {
          return (
            <List.Item key={index} 
            extra={<Icon type="cross-circle" onClick={this.props.deleteTodo.bind(this,index)}></Icon>}
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
export default UI;
