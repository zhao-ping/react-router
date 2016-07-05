/**
 * Created by zp on 16-6-30.
 */
import React,{Component,PropTypes}from 'react'
import FormEditor from '../components/FormEditor.js'
import {connect} from 'react-redux'

class EditorPage extends Component{

    render(){
        return (<div>
            <FormEditor items={this.props.items} />
        </div>)
    }
}

EditorPage.propTypes={
    items:PropTypes.array.isRequired
}



function mapStateToProps(state) {
    return {
        items: state.itemstate.items,
    }
}

// var connect2 = connect(mapStateToProps, {});
// export default connect2(FormEditorPage)

export default connect(mapStateToProps, {
})(EditorPage )
