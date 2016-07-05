/**
 * Created by zp on 16-6-28.
 */
import React,{ Component } from "react"
import AlertBox from './AlertBox.js'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import * as containerAPI from '../hander/container-api.js'

class FormEditor extends Component{

  


  showAlertBox(){

    $('#alertBox').show();
    ReactDOM.render(
      <AlertBox />,
      document.getElementById('alertBox')
    )
  }

  removeItem(event){
    let index=$(event.currentTarget).data('item-index');
    
    let datakey=$(event.currentTarget).data('item-key');

    console.log('get remove index:'+index+'  key'+datakey);
    containerAPI.itemRemove(index,datakey)
  }

  saveData(){
    containerAPI.saveData()
  }
  
  render(){
    var self=this;
    
    return (<div><ul>
      {console.log(self.props.items)}
        {
          self.props.items.map((item,index)=>{
            return (<li>{item.id}
              {(()=>{
                if(item.type=='text'){
                  return (<input type="text"/>)
                }else {
                  return (<input type="date"/>)
                }
              })()}
              <button data-item-index={index} data-item-key={item.id} onClick={self.removeItem}>-</button>
            </li>)
          })}
      </ul>
        <button onClick={this.showAlertBox}>Add</button>
        <button onClick={this.saveData}>Save</button>
      </div>);
    }


}

export default FormEditor
