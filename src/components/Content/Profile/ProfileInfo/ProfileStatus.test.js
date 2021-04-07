import React from 'react';
import {act, create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';
import ReactDOM from 'react-dom';

describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const root = document.createElement('div');
        ReactDOM.render(<ProfileStatus statusText='test status'/>, root);
        expect(root.querySelector('div').textContent).toBe('test status');
    });
})