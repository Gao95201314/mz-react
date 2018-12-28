let defaultState={
  city:{
    curCity:'',//当前城市
    cityList:[],//所有城市列表
  }
}
export default function(state=defaultState,action){
  switch(action.type){
    case'SET_CURCITY':
    return Object.assign({},state,{
      city:Object.assign({},state,{
        curCity:action.name
      })
    });
    default:
    return state;
  }
}
