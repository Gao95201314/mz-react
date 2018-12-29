function cityDemon (state={},action){
  switch(action.type){
  case'SET_CURCITY':
      return Object.assign({},state,{
          curCity:action.name
      });
      //返回一个默认state
      default:
      return state;
    }
};
export default cityDemon;
