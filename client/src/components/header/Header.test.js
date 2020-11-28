import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from './../../Utils'

const setUp =(props={})=>{
    const component = shallow(<Header {...props} />);
    return component;
}
describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component= setUp();
    });

    it('Should render without errors',()=>{
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render logo wrapper',()=>{
        const wrapper = findByTestAttr(component, 'logoText');
        expect(wrapper.length).toBe(1);
    });

    it('Should render logo text',()=>{
        const wrapper = findByTestAttr(component, 'logoText');
        expect(wrapper.text()).toBe('ToDos');
    });
})