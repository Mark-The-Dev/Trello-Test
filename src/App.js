import React, { Component } from 'react';
import List from './List'
import STORE from './STORE'
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

// Example
const objectWithKVPs = {
  key: 'value',
  foo: 'foo value',
  bar: 'bar value',
  abc: { nested: 'object' }
}

// To remove the foo key value pair
const newObjectWithKVPs = omit(objectWithKVPs, 'foo');



class App extends Component {
  state = {
    store:STORE
  }
  
  handleDelete = (cardId) => {
    const {lists, allCards} = this.state.store

    const newList = lists.map( list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId) 
    }))

    const newCards = omit(allCards, cardId)

    this.setState({
      store:{
        lists: newList,
        allCards: newCards
      }
    })
  }

  render() {
    console.log(this.state)
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
