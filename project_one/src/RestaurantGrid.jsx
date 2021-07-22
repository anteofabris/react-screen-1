import React from 'react'
import RestaurantGridItem from './RestaurantGridItem.jsx'
import './RestaurantGrid.css'


class RestaurantGrid extends React.Component {



  render() {
    return (
      <div className='restaurant-grid'>
        {this.props.items.map((item, index) => {
          return <RestaurantGridItem item={item} key={index} />
        })}
      </div>
    );
  }
}

export default RestaurantGrid;
