//这个文件，里面放着我们的动作生成器。就是一个一个方法，这个方法能够生成一个动作。
import {Toast} from 'antd-mobile';
/* 这是一个设置当前城市的动作生成器 */
export const setCity=function(name){
  return {
    type:'SET_CURCITY',
    name
  }
}

/* 这个就是一个异步的动作生成器，我想让其不返回动作，而是返回函数 */

export const setCity2=function(){
  return function(dispath){
    Toast.loading();
    /* eslint-disable */
    let myCity =new BMap.LocalCity();
    myCity.get(result=>{
      //派发一个动作，类型是：SET_CURCITY
      dispath({
        type:'SET_CURCITY',
        name:result.name
      });
      Toast.hide();
    })
  }
}
