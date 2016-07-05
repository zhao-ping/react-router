/**
 * Created by zp on 16-6-28.
 */
import * as types from '../actions/action-types.js'
import {combineReducers} from 'redux'
import _ from 'lodash'
import $ from 'jquery'
import { routerReducer as routing} from 'react-router-redux'

const initializedStatus={
  status:"edit"
};

const initialItems={
  items:getData().responseJSON
};

function getData() {
  return $.ajax({
    url:'/data',
    type:'get',
    async:false
  })
}

function formReducer(state=initializedStatus,action) {

  switch (action.type){
    case types.TO_PREVIEW:
      return _.assign({},state,{status:'preview'});
    case types.TO_EDIT:
      return _.assign({},state,{status:'edit'});
    default:
      return state;
  }
}

function itemReducer(state=initialItems,action) {


  var type=action.type;
  var latestItems=state;
  if(type==types.ADD_ITEM){
    var newelment={type:action.item};
    let newItems=_.concat(state.items,newelment);
    if (newItems){

      latestItems=_.assign({},state,{items:newItems});
      return latestItems;
    }
    return state;
  }
  else if(type==types.REMOVE_ITEM){
        var newItems=_.filter(state.items,function (item,index) {//第一个参数:指当前数据；第二个参数：指当前数据的索引；
        return index!= action.index;
    })
    latestItems=_.assign({},state,{items:newItems,datakey:action.datakey});
    return latestItems;
  }
  else if(type=types.SAVE_DATA){
    $.ajax({
      url:"/latestItems",
      type:"get",
      async:false,
      dataType:"json",
      data:{items:state.items}

    });
  }
  return latestItems;
}





var reducers=combineReducers({
  itemstate:itemReducer,
  formstate:formReducer,
  routing
});
export default reducers
