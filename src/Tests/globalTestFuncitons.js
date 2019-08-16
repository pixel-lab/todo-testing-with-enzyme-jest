import React, { Component } from 'react';
import checkPropTypes from 'check-prop-types';

import { createStore } from "redux";
import rootReducer from '../reducers'

export const ElementSearch = (wrapper, tag) => (
    wrapper.find(`[data-test="${tag}"]`)
)

export const checkProps = (component, props) => {
    return  checkPropTypes(component.propTypes, props, 'prop', component.name);
}

export const storeFactory = (initialstate) => {
   // console.log(initialstate);
    return createStore(rootReducer,initialstate);
}