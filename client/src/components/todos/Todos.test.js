import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { findByTestAttr } from '../../Utils';
import Todos from './Todos';

const mockStore = configureMockStore();
const store = mockStore({});

const setUp =(props={})=>{
    const component = shallow(        
        <Provider store={store} >
            <Todos {...props} />
        </Provider>
    );
    return component;
}

describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component= setUp();
    });

    it('Should render UL item without error',()=>{
        const wrapper = findByTestAttr(component, 'ulList');
        expect(wrapper.length).toBe(1);
    });

    it('Should render checkbox',()=>{
        const wrapper = findByTestAttr(component, 'checkBox');
        expect(wrapper.length).toBe(1);
    });

    it('Should render delete button',()=>{
        const wrapper = findByTestAttr(component, 'buttonDelete');
        expect(wrapper.length).toBe(1);
    });

    it('Should render edit button',()=>{
        const wrapper = findByTestAttr(component, 'buttonEdit');
        expect(wrapper.length).toBe(1);
    });
})