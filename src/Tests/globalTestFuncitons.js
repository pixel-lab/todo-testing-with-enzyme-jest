import React, { Component } from 'react';
import checkPropTypes from 'check-prop-types';

export const ElementSearch = (wrapper, tag) => (
    wrapper.find(`[data-test="${tag}"]`)
)

export const checkProps = (component, props) => {
    return  checkPropTypes(component.propTypes, props, 'prop', component.name);

}