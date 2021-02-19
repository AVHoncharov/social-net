import React from 'react';
import {act, create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';
import ReactDOM from 'react-dom';

describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const root = document.createElement('div');
        ReactDOM.render(<ProfileStatus status='test status'/>, root);
        expect(root.querySelector('span').textContent).toBe('test status');
    });
    // test('status from props should be in the state', () => {
    //     let component;
    //     act(()=> {
    //         component = create(<ProfileStatus status='test status'/>);

    //     })
    //     // const component = create(<ProfileStatus status='test status'/>);
    //     const instance = component.root;//.getInstance();
    //     expect(instance.state.status).toBe('test-status');
    // })
})