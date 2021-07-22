import './App.css';
import React from 'react'
import axios from 'axios'
import RestaurantGrid from './RestaurantGrid.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get(`https://random-data-api.com/api/restaurant/random_restaurant?size=50`)
      .then((res) => {
        console.log('res! ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  render() {
    return (
      <div>
        <RestaurantGrid items={this.state.items}/>
      </div>
    );
  }
}

export default App;
