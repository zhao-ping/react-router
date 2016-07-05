/**
 * Created by zp on 16-6-28.
 */
import React, { Component, PropTypes } from 'react'
import $ from 'jquery'
import * as containerAPI from '../hander/container-api.js'



class AlertBox extends Component{

  exit(){
    $('#alertBox').hide();
  }
  addItem(){
  var item=$('input[type=radio]:checked').val();
    containerAPI.itemAdd(item);
  }
  render(){
    return(<div>
      <div><input type="radio" name="type" value="text"/>text</div>
      <div><input type="radio" name="type" value="date"/>date</div>
      <div><button onClick={this.addItem}>add</button><button onClick={this.exit}>exit</button></div>
    </div>)
  }
}

export default AlertBox
