import React from 'react';
import STORE from './store.js'
import List from './List.js'

function App() {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {STORE.lists.map(list => <List header={list.header} key={list.id} cards={list.cardIds.map(cardId => STORE.allCards[cardId])}></List>)}
      </div>
    </main>
  );
}

export default App;