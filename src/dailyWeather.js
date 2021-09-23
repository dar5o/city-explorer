import React from 'react';
import { ListGroup } from 'react-bootstrap'

class DailyWeather extends React.Component {

  render(){
    return(
      <>
        <ListGroup key={this.props.index}>
          <ListGroup.Item>{this.props.date}</ListGroup.Item> 
          <ListGroup.Item>{this.props.description}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }


}

export default DailyWeather;