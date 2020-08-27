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



class App extends Component {
  state = {
    store: STORE
  }

  
  
  handleAdd = (listId) => {
    //console.log('hi')
    const newCard = newRandomCard()
    const { lists, allCards } = this.state.store
    const newList = lists.map(list => {
      if (listId === list.id) {
        return { 

          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      } 
        return list
      })


      this.setState({
        
        store:{
          lists:newList,
          allCards:{
            ...allCards,
            [newCard.id]: newCard
          }
        }

    

      })

  }
  
  
  handleDelete = (cardId, listId) => {
    const { lists, allCards } = this.state.store


    const newList = lists.map(list => {
      if (listId === list.id) {
        return { 

          ...list,
    
          cardIds: list.cardIds.filter(id => id !== cardId)
        }
      } else {
        return {...list}
      }
    }) 

    this.setState({
      store: {
        lists: newList,
        allCards
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
              //newCard={}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
