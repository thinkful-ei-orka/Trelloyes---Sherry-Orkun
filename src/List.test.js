import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';



describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <List
            key = {1}
            header = {'Title'}    
            cards = {[
                { id: 'a', title: 'First card', content: 'lorem ipsum' },
                { id: 'b', title: 'Second card', content: 'lorem ipsum' }
            ]}

        />, 
        div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as expected', () => {
        const tree = renderer.create(
        <List 
            key = {1}
            header = {'Title'}    
            cards = {[
                { id: 'a', title: 'First card', content: 'lorem ipsum' },
                { id: 'b', title: 'Second card', content: 'lorem ipsum' }
        ]}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


