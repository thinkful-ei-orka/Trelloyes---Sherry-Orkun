import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

 describe('<List />', () => {
   it('renders without crashing', () => {
     const section = document.createElement('section');

     ReactDOM.render(
       <List 
       header="Header"
       cards={[
       ]}
       />,
       section
     );
     
     ReactDOM.unmountComponentAtNode(section);
   });

   it('renders this UI as expected', () => {
    const tree = renderer.create(<List 
      header="Header"
      cards={[
      ]}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
 })