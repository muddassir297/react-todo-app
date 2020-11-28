import React from 'react';
import { shallow } from 'enzyme';
import Addtodo from './Addtodo';
import { findByTestAttr } from './../../Utils'

const setUp =(props={})=>{
    const component = shallow(<Addtodo {...props} />);
    return component;
}
describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component= setUp();
    });

    it('Should render form wrapper without error',()=>{
        const wrapper = findByTestAttr(component, 'formAddComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render input text Box',()=>{
        const wrapper = findByTestAttr(component, 'textBox');
        expect(wrapper.length).toBe(1);
    });

    it('Should render add button',()=>{
        const wrapper = findByTestAttr(component, 'addButton');
        expect(wrapper.length).toBe(1);
    });
})