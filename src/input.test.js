import React from 'react';
import {shallow} from 'enzyme'
import {ElementSearch,storeFactory} from './Tests/globalTestFuncitons'; 
import Input from './input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive();
    //console.log(store);
    return wrapper;
}


describe('Input component: wordes not gussed',()=>{
    let wrapper;    
    beforeEach(()=> {
        wrapper = setup({success:false});
    });
    it('not gussed: should render the container', ()=>{
        expect(ElementSearch(setup(), 'input-container').length).toBe(1);
    })
    it('not gussed: should render the text feild', ()=>{
        expect(ElementSearch(setup(), 'input-text-box').length).toBe(1);
    })
    it('not gussed: should render the submit button', ()=>{
        expect(ElementSearch(setup(), 'submit-button').length).toBe(1);
    })
})

describe('Input component: wordes gussed',()=>{
    let wrapper;    
    beforeEach(()=> {
        wrapper = setup({success:true});
    });
    it('wordes gussed : should render the container', ()=>{
        expect(ElementSearch(wrapper, 'input-container').length).toBe(0);
    })
    it('wordes gussed: should render the text feild', ()=>{
        expect(ElementSearch(wrapper, 'input-text-box').length).toBe(0);
    })
    it('wordes gussed: should render the submit button', ()=>{
        expect(ElementSearch(wrapper, 'submit-button').length).toBe(0);
    })
})