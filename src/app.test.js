import React from 'react';
import {shallow} from 'enzyme';
import {storeFactory} from './Tests/globalTestFuncitons'

import App from './App';

const setup = (state = {}) => {
    const store = storeFactory(state);
    const wrapper1 =  shallow(<App store= {store} />).dive();
    console.log(wrapper1);
    return wrapper1;
}
describe('App component testing', ()=> {
    
    it('should have `success` props as true', () => {            
        const success = true;
        const wrapper = setup({success});
        expect(wrapper.instance().props.success).toBe(true);
    });
});