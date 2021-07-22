import React from 'react'
import './RestaurantGridItem.css'

class RestaurantGridItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: null
    }
  }



  componentDidMount() {
    console.log('an item!', this.props)


  }

  getStatus() {
    // get current day
    // if !this.props.item.hours[currentDay].is_closed

    // else



  }


  render() {
    return (
      <div className='item'>
        <div className='name'>
          {this.props.item.name}</div>
        <div className='type'>
          {this.props.item.type}</div>
        <img className='logo' src={this.props.item.logo} alt={'food served at' + this.props.item.name} />
        <div className="status">
          {this.getStatus()}
        </div>
      </div>
    );
  }
}

export default RestaurantGridItem;
