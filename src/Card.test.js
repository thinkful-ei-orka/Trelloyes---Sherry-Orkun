import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

 describe('<Card />', () => {
   it('renders without crashing', () => {
     const div = document.createElement('div');

     ReactDOM.render(
       <Card
          title="To-Do"
          content="sleep"
        />,
        div
      );

      ReactDOM.unmountComponentAtNode(div);
   })

   it('renders this UI as expcected', () => {
     const tree = renderer.create(<Card
      title="To-Do"
      content="sleep"
      />).toJSON();
      
      expect(tree).toMatchSnapshot();
   });
 });