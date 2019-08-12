import React, { Component } from 'react';
import {connect} from 'react-redux'

class Input extends Component{
    render(){
        return <div/>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       // prop: state.prop
    }
}


export default connect(mapStateToProps)(Input)