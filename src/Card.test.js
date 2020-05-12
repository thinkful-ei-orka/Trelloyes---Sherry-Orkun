import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Card
            title = {'Sample Title'}
            content = {'lorem ipsum'}
         />,
        div);
        ReactDOM.unmountComponentAtNode(div);
    });
   
    it('renders this UI as expected', () => {
        const tree = renderer.create(
            <Card 
            title = {'title'}
            content = {'content'}
            />).toJSON();
            expect(tree).toMatchSnapshot();
    });
});