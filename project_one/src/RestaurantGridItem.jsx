import React from 'react'
import './RestaurantGridItem.css'

class RestaurantGridItem extends React.Component {



  componentDidMount() {
    console.log('an item!', this.props)


  }


  render() {
    return (
      <div className='item'>
        <div className='title'>
        {this.props.item.name}</div><br/>
        <img className='logo' src={this.props.item.logo} alt= {'food served at' + this.props.item.name}/>
      </div>
    );
  }
}

export default RestaurantGridItem;
