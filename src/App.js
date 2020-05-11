import React from 'react';
import STORE from './store.js'
import List from './List.js'

function App() {
  return (
    <main className='App'>
    {STORE.lists.map(list => <List header={list.header} key={list.id} cards={list.cardIds.map(cardId => STORE.allCards[cardId])}></List>)}

    </main>
  );
}

export default App;