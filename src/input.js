import React, { Component } from 'react';
import {connect} from 'react-redux'

class Input extends Component{    
    render(){        
        if(!this.props.success){
        return (
            <div className="container" data-test="input-container">
                <input type="text" data-test="input-text-box"/>
                <button  data-test="submit-button">Submit</button>
            </div>
        )
        }
        else {
            return null
        }
    }
}
const mapStateToProps = ({success}) => {
    return {
        success
    }
}
export default connect(mapStateToProps)(Input)