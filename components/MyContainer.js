/**
 * Created by zp on 16-6-28.
 */
import React, { Component, PropTypes } from 'react'
import * as containerAPI from '../hander/container-api.js'
import {showPreview,showEdit} from '../hander/container-api.js'
import * as types from '../actions/action-types.js'
import  store from '../store.js'
import {connect} from 'react-redux'


class MyContainer extends Component{

 toPreview(){
    document.getElementById('alertBox').innerHTML='';
    containerAPI.showPreview();
    this.context.router.push('/preview');
  }

  toEdit(){
    containerAPI.showEdit();
    this.context.router.push("/editor")
  }

  render(){
    var self=this;
    return(
      <div>{(() =>{
        if(self.props.status==='edit'){
          return <button onClick={e=>self.toPreview(e)}>to preview</button>
        }else {return <button onClick={e=>self.toEdit(e)}>to edit</button>}
      })()}

      {self.props.children}
      </div>
    )
  }

}

MyContainer.PropTypes={
  status:PropTypes.string.isRequired
}
MyContainer.contextTypes={
  router: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    status: state.formstate.status
  }
}

export default connect(mapStateToProps, {
})(MyContainer)
