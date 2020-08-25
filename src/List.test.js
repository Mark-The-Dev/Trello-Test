import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List'
import Card from './Card'
import STORE from './STORE'


describe('List Component', () =>{
  it('renders without crashing',() => {
    const div = document.createElement('div');
    ReactDOM.render(<List header={["header"]} cards= {["Card"]} />, div);
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer.create(<List
      header='header'
      cards={[{id:1, title:'name', content: 'data' }]}
    
      />).toJSON();
      expect(tree).toMatchSnapshot();
  })



})