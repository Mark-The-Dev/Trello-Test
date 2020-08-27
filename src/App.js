import React, { Component } from 'react';
import List from './List'
import STORE from './STORE'
import './App.css';


class App extends Component {

  state = {
    store: STORE
  }

  handleAddItem = (itemName) => {
    const newItems = {
      ...this.state.store.allCards
    }
    this.setState({
      //shoppingItems: newItems
    })
  }

  //  newRandomCard = () => {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   }
  // }




  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List

            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
