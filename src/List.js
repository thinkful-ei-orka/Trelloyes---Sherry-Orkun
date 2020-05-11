import React from 'react';
import Card from './Card.js'

function List(props) {
    return (
      <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
            {props.cards.map(card => <Card title={card.title} content={card.content} key={card.id}/>)}
          </header>  
      </section>
    )
}

export default List;