let defaultState={
  todos:[],//这是todo的列表
  city:{
    curCity:'',//当前城市
    cityList:[],//所有城市列表
  }
}
export default function(state=defaultState,action){
  switch(action.type){
    //添加
    case 'ADD_TODO':
    //深拷贝
    return Object.assign({},state,{
      todos:[
        ...state.todos,
        action.name
      ]
    });
    //这种方法也行
    /* let state=JSON.parse(JSON.stringify(state));
    state.todos.push(action.name);
    return state; */
    //删除
    case 'DELETE_TODO':
    let newList=[...state.todos];//将todos重新赋值一份出来，不加...表示修改了原来的数据了
    newList.splice(action.index,1);
     return Object.assign({},state,{
      todos:newList
    });
    //城市改变
    case'SET_CURCITY':
    return Object.assign({},state,{
      city:Object.assign({},state,{
        curCity:action.name
      })
    });
    //返回一个默认state
    default:
    return state;
  }
}
