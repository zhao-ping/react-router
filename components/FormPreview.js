/**
 * Created by zp on 16-6-28.
 */
import React,{ Component } from "react"

class FormPreview extends Component{



  render(){
    var self=this;
    return (<div><ul>
      {self.props.items.map((item,index)=>{
        return(<li>{(()=>{
          if(item.type==='text'){
            return (<input type="text"/>)
          }else{return (<input type="date"/>)}
        })()}</li>)
      })}
    </ul></div>);
  }
}

export default FormPreview
