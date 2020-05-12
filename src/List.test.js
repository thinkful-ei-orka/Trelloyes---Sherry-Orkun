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
          {id: 'a', title: 'title', content: 'content'},
          {id: 'b', title: 'title b', content: 'content b'}
        ]}
       />,
       section
     );
     
     ReactDOM.unmountComponentAtNode(section);
   });
 })