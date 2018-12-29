function todoDemon(state=[],action){
  switch(action.type){
    //添加
    case 'ADD_TODO':
    //深拷贝
    return [...state,action.name];
    //这种方法也行
    /* let state=JSON.parse(JSON.stringify(state));
    state.todos.push(action.name);
    return state; */
    //删除
    case 'DELETE_TODO':
    let newList=[...state];//将todos重新赋值一份出来，不加...表示修改了原来的数据了
    newList.splice(action.index,1);
     return newList;
// 返回一个默认state
  default:
  return state;
}
};
export default todoDemon;
