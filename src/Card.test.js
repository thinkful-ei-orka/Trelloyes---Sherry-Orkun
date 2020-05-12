import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

/** <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
 */

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
 });