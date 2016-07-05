/**
 * Created by zp on 16-6-30.
 */
import React,{Component,PropTypes}from 'react'
import {connect} from 'react-redux'
import FormPreview from '../components/FormPreview.js'


class PreviewPage extends Component{

    render(){
        return (<div>
            <FormPreview items={this.props.items}/>
        </div>)
    }

}

PreviewPage.PropTypes={
    items: PropTypes.array.isRequired
}

function getPreviewStatus(state, ownProps) {
    return{items:state.itemstate.items}
}

export default connect(getPreviewStatus, {
})(PreviewPage)
