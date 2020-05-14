import React from 'react';
import Card from './Card.js'

function List(props) {
    return (
      <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
            <button onClick={() => props.create(props.id)}>Create a Card</button>
            {props.cards.map(card => <Card 
              delete={props.delete}
              title={card.title} 
              content={card.content} 
              key={card.id}
              id={card.id}/>)}
          </header>  
      </section>
    )
}

export default List;