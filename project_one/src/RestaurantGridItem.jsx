import React from 'react'
import './RestaurantGridItem.css'

class RestaurantGridItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: null
    }

    this.getStatus = this.getStatus.bind(this)
  }



  componentDidMount() {



  }

  getStatus() {
    // first get the day of the week
    var dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var day = new Date().getDay()
    var dayKey = dayArray[day]

    var checkStatus = (open, close) => {

      var openTo24 = open.split(' ')[1] === 'AM' ? 0 : 12
      var openHours = Number(open.split(':')[0]) === 12 ? 0 + openTo24 : Number(open.split(':')[0]) + openTo24
      var openMins = Number(open.split(':')[1].split(' ')[0])

      var closeTo24 = close.split(' ')[1] === 'AM' ? 0 : 12
      var closeHours = Number(close.split(':')[0]) === 12 ? 0 + closeTo24 : Number(close.split(':')[0]) + closeTo24
      var closeMins = Number(close.split(':')[1].split(' ')[0])

      var now = new Date()
      var nowHrs = now.getHours()
      var nowMins = now.getMinutes()

      // if now is greater than openhours and greater than openMins and less than closehours and less than closemins
      if ((nowHrs > openHours || (nowHrs === openHours && nowMins >= openMins)) && (nowHrs < closeHours || (nowHrs === closeHours && nowMins <= closeMins))) {
        return 'open!'
      } else {
        return 'closed!'
      }


    }

    return checkStatus(this.props.item.hours[dayKey].opens_at, this.props.item.hours[dayKey].closes_at)


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



