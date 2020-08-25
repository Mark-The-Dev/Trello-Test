import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card'


describe('Card Component', () =>{
  it('renders without crashing',() => {
    const div = document.createElement('div');
    ReactDOM.render(<Card className='card' />, div);
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer.create(<Card
      title='title'
      content='content'
      />).toJSON();
      expect(tree).toMatchSnapshot();
  })



})