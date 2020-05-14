import React from 'react';
import List from './List.js';

class App extends React.Component {
  state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }

  deleteCard = (id) => {
    //get card's id, then delete from list, then update list
    console.log('delete called');
    let newCardList = this.omit(this.state.allCards, id)
    let newList = this.state.lists.map(list => {
        list.cardIds = list.cardIds.filter(card => {
          return card !== id
        })
        return list;
    })
    this.setState({
      lists: newList,
      allCards: newCardList
    })
  }

  omit(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  createCard = (listId) => {
    let newCard = this.newRandomCard();
    let newKey = newCard.id;
    //let newAllCards = this.state.allCards
    //newAllCards[newCard.id] = newCard
    let newAllCards = {...this.state.allCards, [newKey] : newCard}
    console.log(newAllCards)
    let newList = this.state.lists.map(list => {
      if(list.id === listId) {
        list.cardIds.push(newCard.id)
      }
      return list;
    })
    console.log(newList)
    this.setState({
      lists: newList,
      allCards: newAllCards
    })
  }

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => <List 
            create={this.createCard}
            delete={this.deleteCard}
            header={list.header} 
            key={list.id} 
            id={list.id}
            cards={list.cardIds.map(cardId => this.state.allCards[cardId])}
            ></List>)}
        </div>
      </main>
    );
  }
}

export default App;